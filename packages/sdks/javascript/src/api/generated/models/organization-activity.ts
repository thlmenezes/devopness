/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { TriggeredActions } from './triggered-actions';
import { UserEnvironmentStats } from './user-environment-stats';
import { UserProjectStats } from './user-project-stats';
import { UserTeamStats } from './user-team-stats';

/**
 * 
 * @export
 * @interface OrganizationActivity
 */
export interface OrganizationActivity {
    /**
     * 
     * @type {UserProjectStats}
     * @memberof OrganizationActivity
     */
    projects: UserProjectStats;
    /**
     * 
     * @type {UserEnvironmentStats}
     * @memberof OrganizationActivity
     */
    environments: UserEnvironmentStats;
    /**
     * 
     * @type {UserTeamStats}
     * @memberof OrganizationActivity
     */
    teams: UserTeamStats;
    /**
     * 
     * @type {TriggeredActions}
     * @memberof OrganizationActivity
     */
    triggered_actions: TriggeredActions;
}

