import { AxiosPromise } from "axios";
import { Resources } from "../constants";
import XAPI, { Timestamp } from "../XAPI";

export function createActivityProfile(
  this: XAPI,
  activityId: string,
  profileId: string,
  profile: { [key: string]: any },
  etag?: string,
  matchHeader?: "If-Match" | "If-None-Match"
): AxiosPromise<void> {
  const headers = {};
  if (etag) headers[matchHeader] = etag;
  return this.requestResource(
    Resources.ACTIVITY_PROFILE,
    {
      activityId: activityId,
      profileId: profileId,
    },
    {
      method: "POST",
      data: profile,
      headers: headers,
    }
  );
}

export function setActivityProfile(
  this: XAPI,
  activityId: string,
  profileId: string,
  profile: { [key: string]: any },
  etag: string,
  matchHeader: "If-Match" | "If-None-Match"
): AxiosPromise<void> {
  const headers = {};
  headers[matchHeader] = etag;
  return this.requestResource(
    Resources.ACTIVITY_PROFILE,
    {
      activityId: activityId,
      profileId: profileId,
    },
    {
      method: "PUT",
      data: profile,
      headers: headers,
    }
  );
}

export function getActivityProfiles(
  this: XAPI,
  activityId: string,
  since?: Timestamp
): AxiosPromise<string[]> {
  return this.requestResource(Resources.ACTIVITY_PROFILE, {
    activityId: activityId,
    ...(since
      ? {
          since,
        }
      : {}),
  });
}

export function getActivityProfile(
  this: XAPI,
  activityId: string,
  profileId: string
): AxiosPromise<{ [key: string]: any }> {
  return this.requestResource(Resources.ACTIVITY_PROFILE, {
    activityId: activityId,
    profileId: profileId,
  });
}

export function deleteActivityProfile(
  this: XAPI,
  activityId: string,
  profileId: string,
  etag?: string
): AxiosPromise<void> {
  const headers = {};
  if (etag) headers["If-Match"] = etag;
  return this.requestResource(
    Resources.ACTIVITY_PROFILE,
    {
      activityId: activityId,
      profileId: profileId,
    },
    {
      method: "DELETE",
      headers: headers,
    }
  );
}
