enum ErrorCode {
  Success = 0,
  UnexpectedError = 1,
  ConnectFailed = 2,
  PermissionDenied = 3,
  CollectionNotExists = 4,
  IllegalArgument = 5,
  IllegalDimension = 7,
  IllegalIndexType = 8,
  IllegalCollectionName = 9,
  IllegalTOPK = 10,
  IllegalRowRecord = 11,
  IllegalVectorID = 12,
  IllegalSearchResult = 13,
  FileNotFound = 14,
  MetaFailed = 15,
  CacheFailed = 16,
  CannotCreateFolder = 17,
  CannotCreateFile = 18,
  CannotDeleteFolder = 19,
  CannotDeleteFile = 20,
  BuildIndexError = 21,
  IllegalNLIST = 22,
  IllegalMetricType = 23,
  OutOfMemory = 24,
  IndexNotExist = 25,
  EmptyCollection = 26,
  UpdateImportTaskFailure = 27,
  CollectionNameNotFound = 28,
  CreateCredentialFailure = 29,
  UpdateCredentialFailure = 30,
  DeleteCredentialFailure = 31,
  GetCredentialFailure = 32,
  ListCredUsersFailure = 33,
  GetUserFailure = 34,
  CreateRoleFailure = 35,
  DropRoleFailure = 36,
  OperateUserRoleFailure = 37,
  SelectRoleFailure = 38,
  SelectUserFailure = 39,
  SelectResourceFailure = 40,
  OperatePrivilegeFailure = 41,
  SelectGrantFailure = 42,
  RefreshPolicyInfoCacheFailure = 43,
  ListPolicyFailure = 44,
  NotShardLeader = 45,
  NoReplicaAvailable = 46,
  SegmentNotFound = 47,
  ForceDeny = 48,
  RateLimit = 49,
  NodeIDNotMatch = 50,

  // Service availability.
  // NA: Not Available.
  DataCoordNA = 100,

  // internal error code.
  DDRequestRace = 1000,
}

export enum MetricType {
  GHOST = 0,
  // L2 euclidean distance
  L2 = 1,
  // IP inner product
  IP = 2,
  // HAMMING hamming distance
  HAMMING = 3,
  // JACCARD jaccard distance
  JACCARD = 4,
  // TANIMOTO tanimoto distance
  TANIMOTO = 5,
  // SUBSTRUCTURE substructure distance
  SUBSTRUCTURE = 6,
  // SUPERSTRUCTURE superstructure
  SUPERSTRUCTURE = 7,
}

export enum IndexType {
  // INVALID invald index type
  INVALID = 0,
  // FLAT flat
  FLAT = 1,
  // IVFFLAT ivfflat
  IVFFLAT = 2,
  // IVFSQ8 ivfsq8
  IVFSQ8 = 3,
  //RNSG rnsg
  RNSG = 4,
  // IVFSQ8H ivfsq8h
  IVFSQ8H = 5,
  // IVFPQ ivfpq
  IVFPQ = 6,
  // SPTAGKDT sptagkdt
  SPTAGKDT = 7,
  // SPTAGBKT sptagbkt
  SPTAGBKT = 8,
  // HNSW hnsw
  HNSW = 11,
  // ANNOY annoy
  ANNOY = 12,
}

export enum MsgType {
  Undefined = 0,
  /* DEFINITION REQUESTS: COLLECTION */
  CreateCollection = 100,
  DropCollection = 101,
  HasCollection = 102,
  DescribeCollection = 103,
  ShowCollections = 104,
  GetSystemConfigs = 105,
  LoadCollection = 106,
  ReleaseCollection = 107,
  CreateAlias = 108,
  DropAlias = 109,
  AlterAlias = 110,
  AlterCollection = 111,

  /* DEFINITION REQUESTS: PARTITION */
  CreatePartition = 200,
  DropPartition = 201,
  HasPartition = 202,
  DescribePartition = 203,
  ShowPartitions = 204,
  LoadPartitions = 205,
  ReleasePartitions = 206,

  /* DEFINE REQUESTS: SEGMENT */
  ShowSegments = 250,
  DescribeSegment = 251,
  LoadSegments = 252,
  ReleaseSegments = 253,
  HandoffSegments = 254,
  LoadBalanceSegments = 255,
  DescribeSegments = 256,

  /* DEFINITION REQUESTS: INDEX */
  CreateIndex = 300,
  DescribeIndex = 301,
  DropIndex = 302,

  /* MANIPULATION REQUESTS */
  Insert = 400,
  Delete = 401,
  Flush = 402,
  ResendSegmentStats = 403,

  /* QUERY */
  Search = 500,
  SearchResult = 501,
  GetIndexState = 502,
  GetIndexBuildProgress = 503,
  GetCollectionStatistics = 504,
  GetPartitionStatistics = 505,
  Retrieve = 506,
  RetrieveResult = 507,
  WatchDmChannels = 508,
  RemoveDmChannels = 509,
  WatchQueryChannels = 510,
  RemoveQueryChannels = 511,
  SealedSegmentsChangeInfo = 512,
  WatchDeltaChannels = 513,
  GetShardLeaders = 514,
  GetReplicas = 515,
  UnsubDmChannel = 516,
  GetDistribution = 517,
  SyncDistribution = 518,

  /* DATA SERVICE */
  SegmentInfo = 600,
  SystemInfo = 601,
  GetRecoveryInfo = 602,
  GetSegmentState = 603,

  /* SYSTEM CONTROL */
  TimeTick = 1200,
  QueryNodeStats = 1201, // GOOSE TODO: Remove kQueryNodeStats
  LoadIndex = 1202,
  RequestID = 1203,
  RequestTSO = 1204,
  AllocateSegment = 1205,
  SegmentStatistics = 1206,
  SegmentFlushDone = 1207,

  DataNodeTt = 1208,

  /* Credential */
  CreateCredential = 1500,
  GetCredential = 1501,
  DeleteCredential = 1502,
  UpdateCredential = 1503,
  ListCredUsernames = 1504,

  /* RBAC */
  CreateRole = 1600,
  DropRole = 1601,
  OperateUserRole = 1602,
  SelectRole = 1603,
  SelectUser = 1604,
  SelectResource = 1605,
  OperatePrivilege = 1606,
  SelectGrant = 1607,
  RefreshPolicyInfoCache = 1608,
  ListPolicy = 1609,
}

export interface MsgBase {
  base: {
    msg_type: MsgType; // required
  };
}

/**
 * @brief Field data type
 */
export enum DataType {
  None = 0,
  Bool = 1,
  Int8 = 2,
  Int16 = 3,
  Int32 = 4,
  Int64 = 5,

  Float = 10,
  Double = 11,

  String = 20,
  VarChar = 21, // variable-length strings with a specified maximum length

  BinaryVector = 100,
  FloatVector = 101,
}

export const DataTypeMap: { [x: string]: number } = {
  none: 0,
  bool: 1,
  int8: 2,
  int16: 3,
  int32: 4,
  int64: 5,
  float: 10,
  double: 11,
  string: 20,
  varchar: 21,
  binaryvector: 100,
  floatvector: 101,
};

export interface KeyValuePair {
  key: string;
  value: string | number;
}

export enum IndexState {
  IndexStateNone = 0,
  Unissued = 1,
  InProgress = 2,
  Finished = 3,
  Failed = 4,
}

export enum DslType {
  Dsl = 0,
  BoolExprV1 = 1,
}

interface NumberArray {
  data: Number[];
}

interface StringArray {
  data: String[];
}
export interface NumberArrayId {
  int_id: NumberArray;
}

export interface StringArrayId {
  str_id: StringArray;
}

export enum SegmentState {
  SegmentStateNone,
  NotExist,
  Growing,
  Sealed,
  Flushed = 'Flushed',
  Flushing = 'Flushing',
}

export enum CompactionState {
  UndefiedState = 0,
  Executing = 1,
  Completed = 2,
}

export interface GrpcTimeOut {
  timeout?: number;
}

export enum ConsistencyLevel {
  Strong = 0,
  Session = 1, // default in PyMilvus
  Bounded = 2,
  Eventually = 3,
  Customized = 4, // Users pass their own `guarantee_timestamp`.
}

export enum ImportState {
  ImportPending = 'ImportPending', // Task is in pending list
  ImportFailed = 'ImportFailed', // Task is failed, use state.infos["failed_reason"] to get the failed reason
  ImportStarted = 'ImportStarted', // Task is dispatched to data node, gonna to be executed.
  ImportPersisted = 'ImportPersisted', // New segments have been generated and persisted.
  ImportCompleted = 'ImportCompleted', // If the collection index has been specified, ImportCompleted indicates the new segments have been indexed successfully. Otherwise,  the task state will be directly converted from ImportPersisted to ImportCompleted.
  ImportFailedAndCleaned = 'ImportFailedAndCleaned', // The task is failed, and the temporary data generated by this task has been cleaned.
}

export enum ObjectType {
  Collection = 0,
  Global = 1,
  User = 2,
}

export enum ObjectPrivilege {
  PrivilegeAll = 0,
  PrivilegeCreateCollection = 1,
  PrivilegeDropCollection = 2,
  PrivilegeDescribeCollection = 3,
  PrivilegeShowCollections = 4,
  PrivilegeLoad = 5,
  PrivilegeRelease = 6,
  PrivilegeCompaction = 7,
  PrivilegeInsert = 8,
  PrivilegeDelete = 9,

  PrivilegeGetStatistics = 10,
  PrivilegeCreateIndex = 11,
  PrivilegeIndexDetail = 12,
  PrivilegeDropIndex = 13,
  PrivilegeSearch = 14,
  PrivilegeFlush = 15,
  PrivilegeQuery = 16,
  PrivilegeLoadBalance = 17,
  PrivilegeImport = 18,
  PrivilegeCreateOwnership = 19,
  PrivilegeUpdateUser = 20,
  PrivilegeDropOwnership = 21,
  PrivilegeSelectOwnership = 22,
  PrivilegeManageOwnership = 23,
  PrivilegeSelectUser = 24,
}

export enum StateCode {
  Initializing = 0,
  Healthy = 1,
  Abnormal = 2,
  StandBy = 3,
}
