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

import { ApiBaseService } from "../../../services/ApiBaseService";
import { ApiResponse } from "../../../common/ApiResponse";
import { ArgumentNullException } from "../../../common/Exceptions";
import { Variable } from '../../generated/models';
import { VariableCreate } from '../../generated/models';

/**
 * ApplicationsVariablesApiService - Auto-generated
 */
export class ApplicationsVariablesApiService extends ApiBaseService {
    /**
     * 
     * @summary Create a new variable linked to an application
     * @param {number} applicationId Unique id of the application
     * @param {VariableCreate} variableCreate A JSON object containing application variable data
     */
    public async addVariableToApplication(applicationId: number, variableCreate: VariableCreate): Promise<ApiResponse<Variable>> {
        if (applicationId === null || applicationId === undefined) {
            throw new ArgumentNullException('applicationId', 'addVariableToApplication');
        }
        if (variableCreate === null || variableCreate === undefined) {
            throw new ArgumentNullException('variableCreate', 'addVariableToApplication');
        }
        
        let queryString = '';

        const requestUrl = '/applications/{application_id}/variables' + (queryString? `?${queryString}` : '');

        const response = await this.post <Variable, VariableCreate>(requestUrl.replace(`{${"application_id"}}`, encodeURIComponent(String(applicationId))), variableCreate);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Returns a list of variables belonging to an application
     * @param {number} applicationId Unique ID of the application to retrieve variables from
     * @param {number} [page] Number of the page to be retrieved
     * @param {number} [perPage] Number of items returned per page
     */
    public async listApplicationVariables(applicationId: number, page?: number, perPage?: number): Promise<ApiResponse<Array<Variable>>> {
        if (applicationId === null || applicationId === undefined) {
            throw new ArgumentNullException('applicationId', 'listApplicationVariables');
        }
        
        let queryString = '';
        const queryParams = { page: page, per_page: perPage, } as { [key: string]: any };
        for (const key in queryParams) {
            if (queryParams[key] === undefined || queryParams[key] === null) {
                continue;
            }

            queryString += (queryString? '&' : '') + `${key}=${encodeURI(queryParams[key])}`;
        }

        const requestUrl = '/applications/{application_id}/variables' + (queryString? `?${queryString}` : '');

        const response = await this.get <Array<Variable>>(requestUrl.replace(`{${"application_id"}}`, encodeURIComponent(String(applicationId))));
        return new ApiResponse(response);
    }
}