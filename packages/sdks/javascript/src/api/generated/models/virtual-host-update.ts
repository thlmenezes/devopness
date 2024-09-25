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



/**
 * 
 * @export
 * @interface VirtualHostUpdate
 */
export interface VirtualHostUpdate {
    /**
     * The unique ID of the given Virtual Host.
     * @type {number}
     * @memberof VirtualHostUpdate
     */
    id: number;
    /**
     * The name of the virtual host, unique within the environment. For `name-based` type, it must be a valid domain name (e.g., `my-app.example.com`). For `ip-based` type, it must be a valid IPv4 address or an IPv4 address with port (e.g., `127.0.0.1:3000`). Must not be greater than 255 characters.
     * @type {string}
     * @memberof VirtualHostUpdate
     */
    name: string;
    /**
     * The document root location, within the application directory, that contains the public files to be served when a user visits the domain name associated with this virtual host. Must not be greater than 255 characters.
     * @type {string}
     * @memberof VirtualHostUpdate
     */
    root_directory?: string;
    /**
     * The network name or IP address on which the application linked to this virtual host is configured to listen for incoming requests. A valid address has `http` or `https` protocol, a domain name or IP address, an optional port and optional path. You can also specify a UNIX-socket using `unix:` protocol. Examples: `http://127.0.0.1:8080` (for applications exposing port `8080`, for example running in a Docker container), `http://127.0.0.1:3000` (for applications kept alive by a daemon/background process that listens on port `3000`), `unix:/var/run/example.sock` (for applications listening on a custom socket). Must not be greater than 255 characters.
     * @type {string}
     * @memberof VirtualHostUpdate
     */
    application_listen_address?: string | null;
    /**
     * The ID of the application to be associated with the virtual host. The value of `root_directory` will be relative to this application directory.
     * @type {number}
     * @memberof VirtualHostUpdate
     */
    application_id?: number | null;
}

