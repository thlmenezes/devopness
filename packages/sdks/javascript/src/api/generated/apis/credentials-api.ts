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
import { Credential } from '../../generated/models';
import { CredentialRelation } from '../../generated/models';

/**
 * CredentialsApiService - Auto-generated
 */
export class CredentialsApiService extends ApiBaseService {
    /**
     * 
     * @summary Delete a given credential
     * @param {number} credentialId The ID of the credential.
     */
    public async deleteCredential(credentialId: number): Promise<ApiResponse<void>> {
        if (credentialId === null || credentialId === undefined) {
            throw new ArgumentNullException('credentialId', 'deleteCredential');
        }
        
        let queryString = '';

        const requestUrl = '/credentials/{credential_id}' + (queryString? `?${queryString}` : '');

        const response = await this.delete <void>(requestUrl.replace(`{${"credential_id"}}`, encodeURIComponent(String(credentialId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Get a credential by ID
     * @param {number} credentialId The ID of the credential.
     */
    public async getCredential(credentialId: number): Promise<ApiResponse<Credential>> {
        if (credentialId === null || credentialId === undefined) {
            throw new ArgumentNullException('credentialId', 'getCredential');
        }
        
        let queryString = '';

        const requestUrl = '/credentials/{credential_id}' + (queryString? `?${queryString}` : '');

        const response = await this.get <Credential>(requestUrl.replace(`{${"credential_id"}}`, encodeURIComponent(String(credentialId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary List credentials
     * @param {number} [page] Number of the page to be retrieved
     * @param {number} [perPage] Number of items returned per page
     */
    public async listCredentials(page?: number, perPage?: number): Promise<ApiResponse<Array<CredentialRelation>>> {
        
        let queryString = '';
        const queryParams = { page: page, per_page: perPage, } as { [key: string]: any };
        for (const key in queryParams) {
            if (queryParams[key] === undefined || queryParams[key] === null) {
                continue;
            }

            queryString += (queryString? '&' : '') + `${key}=${encodeURI(queryParams[key])}`;
        }

        const requestUrl = '/credentials' + (queryString? `?${queryString}` : '');

        const response = await this.get <Array<CredentialRelation>>(requestUrl);
        return new ApiResponse(response);
    }
}