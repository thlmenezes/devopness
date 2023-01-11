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
import { CloudInstanceRelation } from '../../generated/models';

/**
 * StaticDataCloudProviderServiceInstancesApiService - Auto-generated
 */
export class StaticDataCloudProviderServiceInstancesApiService extends ApiBaseService {
    /**
     * 
     * @summary List `Cloud Provider Service` instances by region
     * @param {string} cloudProviderServiceCode The cloud provider service code.
     * @param {string} regionCode The region of the cloud provider to get related instances.
     * @param {number} [page] Number of the page to be retrieved
     * @param {number} [perPage] Number of items returned per page
     */
    public async listStaticCloudInstancesByCloudProviderServiceCodeAndRegionCode(cloudProviderServiceCode: string, regionCode: string, page?: number, perPage?: number): Promise<ApiResponse<Array<CloudInstanceRelation>>> {
        if (cloudProviderServiceCode === null || cloudProviderServiceCode === undefined) {
            throw new ArgumentNullException('cloudProviderServiceCode', 'listStaticCloudInstancesByCloudProviderServiceCodeAndRegionCode');
        }
        if (regionCode === null || regionCode === undefined) {
            throw new ArgumentNullException('regionCode', 'listStaticCloudInstancesByCloudProviderServiceCodeAndRegionCode');
        }
        
        let queryString = '';
        const queryParams = { page: page, per_page: perPage, } as { [key: string]: any };
        for (const key in queryParams) {
            if (queryParams[key] === undefined || queryParams[key] === null) {
                continue;
            }

            queryString += (queryString? '&' : '') + `${key}=${encodeURI(queryParams[key])}`;
        }

        const requestUrl = '/static/cloud-provider-service-options/{cloud_provider_service_code}/regions/{region_code}/instances' + (queryString? `?${queryString}` : '');

        const response = await this.get <Array<CloudInstanceRelation>>(requestUrl.replace(`{${"cloud_provider_service_code"}}`, encodeURIComponent(String(cloudProviderServiceCode))).replace(`{${"region_code"}}`, encodeURIComponent(String(regionCode))));
        return new ApiResponse(response);
    }
}