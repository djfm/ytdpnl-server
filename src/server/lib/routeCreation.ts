import {type DataSource} from 'typeorm';
import {type Transporter} from 'nodemailer';
import {type Request, type Response} from 'express';

import {type CreateLogger} from './logger';
import {type TokenTools} from './crypto';

import {has} from '../../common/util';
import NotFoundError from './notFoundError';

const hasMessage = has('message');
const message = (x: unknown) => (hasMessage(x) ? x.message : 'An unknown error occurred');

export type RouteContext = {
	dataSource: DataSource;
	mailer: Transporter;
	mailerFrom: string;
	createLogger: CreateLogger;
	tokenTools: TokenTools;
};

export type RouteCreator = (context: RouteContext) => (req: Request, res: Response) => Promise<void>;

export type RequestHandler<Output> = (req: Request) => Promise<Output>;

export type HttpVerb = 'get' | 'post' | 'put' | 'delete';

export type RouteDefinition<Output> = {
	verb: HttpVerb;
	path: string;
	makeHandler: (context: RouteContext) => RequestHandler<Output>;
};

export const makeRouteConnector = (context: RouteContext) => <T>(definition: RouteDefinition<T>) => async (req: Request, res: Response) => {
	const {makeHandler} = definition;
	const handler = makeHandler(context);

	try {
		const value = await handler(req);
		res.json({
			kind: 'Success',
			value,
		});
	} catch (err) {
		if (err instanceof NotFoundError) {
			res.status(404).json({
				kind: 'Failure',
				message: message(err),
			});
			return;
		}

		res.status(500).json({
			kind: 'Failure',
			message: message(err),
		});
	}
};

export default RouteContext;
