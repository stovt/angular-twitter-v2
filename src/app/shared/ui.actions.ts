import { Action } from '@ngrx/store';

export const START_LOADING_USERS = '[UI] Start Loading Users';
export const STOP_LOADING_USERS = '[UI] Stop Loading Users';
export const START_LOADING_TWEET = '[UI] Start Loading Tweet';
export const STOP_LOADING_TWEET = '[UI] Stop Loading Tweet';
export const START_LOADING_ALL_TWEETS = '[UI] Start Loading All Tweets';
export const STOP_LOADING_ALL_TWEETS = '[UI] Stop Loading All Tweets';
export const START_LOADING_USER_TWEETS = '[UI] Start Loading User Tweets';
export const STOP_LOADING_USER_TWEETS = '[UI] Stop Loading User Tweets';

export class StartLoadingUsers implements Action {
  readonly type = START_LOADING_USERS;
}

export class StopLoadingUsers implements Action {
  readonly type = STOP_LOADING_USERS;
}

export class StartLoadingTweet implements Action {
  readonly type = START_LOADING_TWEET;
}

export class StopLoadingTweet implements Action {
  readonly type = STOP_LOADING_TWEET;
}

export class StartLoadingAllTweets implements Action {
  readonly type = START_LOADING_ALL_TWEETS;
}

export class StopLoadingAllTweets implements Action {
  readonly type = STOP_LOADING_ALL_TWEETS;
}

export class StartLoadingUserTweets implements Action {
  readonly type = START_LOADING_USER_TWEETS;

  constructor(public payload: string) {}
}

export class StopLoadingUserTweets implements Action {
  readonly type = STOP_LOADING_USER_TWEETS;

  constructor(public payload: string) {}
}

export type UIActions =
  | StartLoadingUsers
  | StopLoadingUsers
  | StartLoadingTweet
  | StopLoadingTweet
  | StartLoadingAllTweets
  | StopLoadingAllTweets
  | StartLoadingUserTweets
  | StopLoadingUserTweets;
