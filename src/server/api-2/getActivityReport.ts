import {type RouteDefinition} from '../lib/routeCreation';
import DailyActivityTime from '../models/dailyActivityTime';

import {type Page, extractPaginationRequest} from '../lib/pagination';

export type ActivityReport = Page<DailyActivityTime>;

export const createGetActivityReportDefinition: RouteDefinition<ActivityReport> = {
	verb: 'get',
	path: '/api/activity-report/:page',
	makeHandler: ({createLogger, dataSource}) => async (req): Promise<ActivityReport> => {
		const log = createLogger(req.requestId);
		log('Received get activity report request');
		const {page, pageSize} = extractPaginationRequest(req);
		const activityRepo = dataSource.getRepository(DailyActivityTime);

		const results = await activityRepo.find({
			order: {
				createdAt: 'DESC',
				updatedAt: 'DESC',
			},
			relations: ['participant'],
			take: pageSize,
			skip: page * pageSize,
		});

		const pageCount = Math.ceil(await activityRepo.count() / pageSize);

		return {
			results,
			page,
			pageSize,
			pageCount,
		};
	},
};

export default createGetActivityReportDefinition;
