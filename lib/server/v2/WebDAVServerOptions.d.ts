/// <reference types="node" />
import { HTTPAuthentication } from '../../user/v2/authentication/HTTPAuthentication';
import { Writable, Readable } from 'stream';
import { PrivilegeManager } from '../../user/v2/privilege/PrivilegeManager';
import { FileSystem } from '../../manager/v2/fileSystem/FileSystem';
import { FileSystemSerializer } from '../../manager/v2/fileSystem/Serialization';
import * as https from 'https';
export interface IAutoSave {
    treeFilePath: string;
    tempTreeFilePath?: string;
    onSaveError?: (error: Error) => void;
    streamProvider?: (callback: (inputStream?: Writable, outputStream?: Writable) => void) => void;
}
export interface IAutoLoad {
    treeFilePath?: string;
    serializers?: FileSystemSerializer[];
    streamProvider?: (inputStream: Readable, callback: (outputStream?: Readable) => void) => void;
}
export declare class WebDAVServerOptions {
    requireAuthentification?: boolean;
    httpAuthentication?: HTTPAuthentication;
    privilegeManager?: PrivilegeManager;
    rootFileSystem?: FileSystem;
    lockTimeout?: number;
    strictMode?: boolean;
    hostname?: string;
    https?: https.ServerOptions;
    port?: number;
    serverName?: string;
    version?: string;
    autoSave?: IAutoSave;
    autoLoad?: IAutoLoad;
}
export default WebDAVServerOptions;
export declare function setDefaultServerOptions(options: WebDAVServerOptions): WebDAVServerOptions;
