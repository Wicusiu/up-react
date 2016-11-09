export interface Action {
	type:string;
	keyName:string;
	value:any;
}

export const UPDATE = 'UPDATE';

/**
 * This is an action creator.
 */
export const update = (keyName, value) => ({
    type: UPDATE,
    keyName,
    value
});