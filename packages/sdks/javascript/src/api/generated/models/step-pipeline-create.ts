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


import { PipelineStepRunnerName } from './pipeline-step-runner-name';

/**
 * 
 * @export
 * @interface StepPipelineCreate
 */
export interface StepPipelineCreate {
    /**
     * Name/short description of the script. Must be at least 4 characters. Must not be greater than 60 characters.
     * @type {string}
     * @memberof StepPipelineCreate
     */
    name?: string;
    /**
     * A short text describing the command. Can be helpful for other team members to understand why a pipeline step is needed. Must not be greater than 255 characters.
     * @type {string}
     * @memberof StepPipelineCreate
     */
    description?: string;
    /**
     * The pipeline step\'s type. Must not be greater than 20 characters.
     * @type {string}
     * @memberof StepPipelineCreate
     */
    type?: string;
    /**
     * A command line or multiline bash script. Must be at least 10 characters. Must not be greater than 300 characters.
     * @type {string}
     * @memberof StepPipelineCreate
     */
    command: string;
    /**
     * 
     * @type {PipelineStepRunnerName}
     * @memberof StepPipelineCreate
     */
    runner: PipelineStepRunnerName;
    /**
     * The name of the Unix user on behalf of which the script will be executed. Must not be greater than 60 characters.
     * @type {string}
     * @memberof StepPipelineCreate
     */
    run_as_user?: string;
}

