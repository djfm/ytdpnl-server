/* eslint-disable @typescript-eslint/no-inferrable-types */

import {IsInt, IsNumber, IsPositive} from 'class-validator';
import {Column, Entity, PrimaryColumn, OneToMany} from 'typeorm';

import Event from '../../common/models/event';

@Entity()
export class WatchTime {
	@IsInt()
	@IsPositive()
	@PrimaryColumn()
		eventId: number = 0;

	@IsNumber()
	@IsPositive()
	@Column()
		secondsWatched: number = 0;

	@OneToMany(() => WatchTime, wt => wt.event)
		event: Event = new Event();
}

export default WatchTime;
