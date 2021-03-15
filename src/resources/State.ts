import { AxiosPromise } from "axios";
import { Resources } from "../constants";
import XAPI, { Agent, Timestamp } from "../XAPI";

export function createState(
  this: XAPI,
  agent: Agent,
  activityId: string,
  stateId: string,
  state: { [key: string]: any },
  registration?: string,
  etag?: string,
  matchHeader?: "If-Match" | "If-None-Match"
): AxiosPromise<void> {
  const headers = {};
  if (etag) headers[matchHeader] = etag;
  return this.requestResource(
    Resources.STATE,
    {
      agent: agent,
      activityId: activityId,
      stateId: stateId,
      ...(registration
        ? {
            registration,
          }
        : {}),
    },
    {
      method: "POST",
      data: state,
      headers: headers,
    }
  );
}

export function setState(
  this: XAPI,
  agent: Agent,
  activityId: string,
  stateId: string,
  state: { [key: string]: any },
  registration?: string,
  etag?: string,
  matchHeader?: "If-Match" | "If-None-Match"
): AxiosPromise<void> {
  const headers = {};
  if (etag) headers[matchHeader] = etag;
  return this.requestResource(
    Resources.STATE,
    {
      agent: agent,
      activityId: activityId,
      stateId: stateId,
      ...(registration
        ? {
            registration,
          }
        : {}),
    },
    {
      method: "PUT",
      data: state,
      headers: headers,
    }
  );
}

export function getStates(
  this: XAPI,
  agent: Agent,
  activityId: string,
  registration?: string,
  since?: Timestamp
): AxiosPromise<string[]> {
  return this.requestResource(Resources.STATE, {
    agent: agent,
    activityId: activityId,
    ...(registration
      ? {
          registration,
        }
      : {}),
    ...(since
      ? {
          since,
        }
      : {}),
  });
}

export function getState(
  this: XAPI,
  agent: Agent,
  activityId: string,
  stateId: string,
  registration?: string
): AxiosPromise<{ [key: string]: any }> {
  return this.requestResource(Resources.STATE, {
    agent: agent,
    activityId: activityId,
    stateId: stateId,
    ...(registration
      ? {
          registration,
        }
      : {}),
  });
}

export function deleteState(
  this: XAPI,
  agent: Agent,
  activityId: string,
  stateId: string,
  registration?: string,
  etag?: string
): AxiosPromise<void> {
  const headers = {};
  if (etag) headers["If-Match"] = etag;
  return this.requestResource(
    Resources.STATE,
    {
      agent: agent,
      activityId: activityId,
      stateId: stateId,
      ...(registration
        ? {
            registration,
          }
        : {}),
    },
    {
      method: "DELETE",
      headers: headers,
    }
  );
}

export function deleteStates(
  this: XAPI,
  agent: Agent,
  activityId: string,
  registration?: string,
  etag?: string
): AxiosPromise<void> {
  const headers = {};
  if (etag) headers["If-Match"] = etag;
  return this.requestResource(
    Resources.STATE,
    {
      agent: agent,
      activityId: activityId,
      ...(registration
        ? {
            registration,
          }
        : {}),
    },
    {
      method: "DELETE",
      headers: headers,
    }
  );
}
