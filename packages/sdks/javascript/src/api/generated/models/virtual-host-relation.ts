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


import { UserRelation } from './user-relation';

/**
 * 
 * @export
 * @interface VirtualHostRelation
 */
export interface VirtualHostRelation {
    /**
     * Unique ID of the Virtual Host
     * @type {number}
     * @memberof VirtualHostRelation
     */
    id: number;
    /**
     * The type of the Virtual Host (`name-based` or `ip-based`)
     * @type {string}
     * @memberof VirtualHostRelation
     */
    type: string;
    /**
     * The name of the Virtual Host
     * @type {string}
     * @memberof VirtualHostRelation
     */
    name: string;
    /**
     * The relative path to the root directory of the Virtual Host
     * @type {string}
     * @memberof VirtualHostRelation
     */
    root_directory: string;
    /**
     * The address of the forward server
     * @type {string}
     * @memberof VirtualHostRelation
     */
    forward_server_address: string;
    /**
     * 
     * @type {UserRelation}
     * @memberof VirtualHostRelation
     */
    created_by_user: UserRelation;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof VirtualHostRelation
     */
    created_at: string;
    /**
     * The date and time when the record was updated
     * @type {string}
     * @memberof VirtualHostRelation
     */
    updated_at: string;
}
