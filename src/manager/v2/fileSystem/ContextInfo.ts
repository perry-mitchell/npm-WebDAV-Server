import { Readable, Writable } from 'stream'
import { RequestContext } from '../../../server/v2/RequestContext'
import { LockScope } from '../../../resource/lock/LockScope'
import { LockType } from '../../../resource/lock/LockType'
import { LockKind } from '../../../resource/lock/LockKind'
import { Workflow } from '../../../helper/Workflow'
import { Errors } from '../../../Errors'
import { Lock } from '../../../resource/lock/Lock'
import { Path } from '../Path'
import { ResourceType, OpenWriteStreamMode } from './CommonTypes'
import * as mimeTypes from 'mime-types'
import * as crypto from 'crypto'

export interface IContextInfo
{
    context : RequestContext
}

export interface OpenWriteStreamInfo extends IContextInfo
{
    targetSource : boolean
    estimatedSize : number
    mode : OpenWriteStreamMode
}
export interface OpenReadStreamInfo extends IContextInfo
{
    targetSource : boolean
    estimatedSize : number
}
export interface MimeTypeInfo extends IContextInfo
{
    targetSource : boolean
}
export interface SizeInfo extends IContextInfo
{
    targetSource : boolean
}
export interface CreateInfo extends IContextInfo
{
    type : ResourceType
}
export interface CopyInfo extends IContextInfo
{
    depth : number
    overwrite : boolean
}
export interface DeleteInfo extends IContextInfo
{
    depth : number
}
export interface MoveInfo extends IContextInfo
{
    overwrite : boolean
}
export interface RenameInfo extends IContextInfo
{
    destinationPath : Path
}
export interface PrivilegeManagerInfo extends IContextInfo { }
export interface ETagInfo extends IContextInfo { }
export interface AvailableLocksInfo extends IContextInfo { }
export interface LockManagerInfo extends IContextInfo { }
export interface PropertyManagerInfo extends IContextInfo { }
export interface ReadDirInfo extends IContextInfo { }
export interface CreationDateInfo extends IContextInfo { }
export interface LastModifiedDateInfo extends IContextInfo { }
export interface WebNameInfo extends IContextInfo { }
export interface DisplayNameInfo extends IContextInfo { }
export interface TypeInfo extends IContextInfo { }
