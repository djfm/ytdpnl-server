/* eslint-disable @typescript-eslint/no-inferrable-types */

import {Column, Entity} from 'typeorm';
import {IsInt, IsNumber, Min, Max, IsBoolean} from 'class-validator';

import Model from '../../common/lib/model';

@Entity()
export class TransitionSetting extends Model {
	@Column()
	@IsInt()
	@Min(0)
	@Max(2)
		fromPhase: number = 0;

	@Column()
	@IsInt()
	@Min(0)
	@Max(2)
		toPhase: number = 0;

	@Column()
	@IsBoolean()
		isCurrent: boolean = true;

	@Column()
	@IsInt()
	@Min(0)
		minPagesViewed: number = 0;

	@Column()
	@IsInt()
	@Min(0)
		minVideoPagesViewed: number = 0;

	@Column()
	@IsNumber()
	@Min(0)
		minVideoTimeViewedSeconds: number = 0;

	@Column()
	@IsNumber()
	@Min(0)
		minTimeSpentOnYoutubeSeconds: number = 0;

	@Column()
	@IsInt()
	@Min(0)
		minSidebarRecommendationsClicked: number = 0;

	@Column()
	@IsInt()
	@Min(0)
		minDays: number = 0;
}

export default TransitionSetting;
