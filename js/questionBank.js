const questionBank = [

/* ======================================================
SNOWFLAKE ARCHITECTURE
====================================================== */

{
id:1,
difficulty:"easy",
category:"architecture",
question:"What is the primary architectural advantage of Snowflake compared to traditional databases?",
options:[
"Separation of compute and storage",
"Use of indexes",
"Single node query engine",
"Local disk storage"
],
answer:0,
explanation:"Snowflake separates compute (virtual warehouses) from storage allowing independent scaling."
},

{
id:2,
difficulty:"easy",
category:"architecture",
question:"Which layer in Snowflake manages authentication, metadata, and query optimization?",
options:[
"Storage Layer",
"Cloud Services Layer",
"Compute Layer",
"Warehouse Layer"
],
answer:1,
explanation:"The Cloud Services layer handles authentication, infrastructure management, metadata, and query parsing."
},

{
id:3,
difficulty:"easy",
category:"architecture",
question:"Which Snowflake component executes SQL queries?",
options:[
"Virtual Warehouse",
"Database",
"Stage",
"Metadata Layer"
],
answer:0,
explanation:"Virtual warehouses are compute clusters responsible for executing queries."
},

{
id:4,
difficulty:"medium",
category:"architecture",
question:"Which layer stores compressed micro-partitions?",
options:[
"Cloud Services Layer",
"Storage Layer",
"Compute Layer",
"Warehouse Layer"
],
answer:1,
explanation:"The storage layer stores compressed micro-partitions for optimized storage."
},

{
id:5,
difficulty:"medium",
category:"architecture",
question:"What happens when multiple warehouses query the same table?",
options:[
"They compete for CPU resources",
"They share compute resources",
"They operate independently",
"They lock the table"
],
answer:2,
explanation:"Warehouses operate independently due to separation of compute and storage."
},

{
id:6,
difficulty:"hard",
category:"architecture",
question:"What component is responsible for query compilation?",
options:[
"Cloud Services",
"Virtual Warehouse",
"Storage Layer",
"Query Cache"
],
answer:0,
explanation:"Query compilation occurs in the Cloud Services layer."
},

/* ======================================================
VIRTUAL WAREHOUSES
====================================================== */

{
id:7,
difficulty:"easy",
category:"warehouse",
question:"What does a Snowflake Virtual Warehouse provide?",
options:[
"Data storage",
"Compute resources for queries",
"User authentication",
"Network security"
],
answer:1,
explanation:"Virtual warehouses provide compute resources used for executing SQL queries."
},

{
id:8,
difficulty:"easy",
category:"warehouse",
question:"What happens when AUTO_SUSPEND is enabled?",
options:[
"Warehouse shuts down after inactivity",
"Warehouse deletes cached results",
"Warehouse scales automatically",
"Warehouse stops queries"
],
answer:0,
explanation:"AUTO_SUSPEND automatically suspends a warehouse after a defined inactivity period."
},

{
id:9,
difficulty:"medium",
category:"warehouse",
question:"What Snowflake feature automatically adds clusters to support concurrency?",
options:[
"Auto Suspend",
"Multi-Cluster Warehouse",
"Result Cache",
"Snowpipe"
],
answer:1,
explanation:"Multi-cluster warehouses add compute clusters to handle concurrency spikes."
},

{
id:10,
difficulty:"medium",
category:"warehouse",
question:"Which parameter controls number of concurrent queries?",
options:[
"MAX_CLUSTER_COUNT",
"MAX_CONCURRENCY_LEVEL",
"AUTO_RESUME",
"STATEMENT_TIMEOUT"
],
answer:1,
explanation:"MAX_CONCURRENCY_LEVEL defines concurrency before queries queue."
},

{
id:11,
difficulty:"hard",
category:"warehouse",
question:"Which action will NOT interrupt running queries?",
options:[
"Resizing warehouse",
"Suspending warehouse",
"Dropping warehouse",
"Restarting account"
],
answer:0,
explanation:"Resizing warehouses affects only new queries."
},

/* ======================================================
DATA LOADING
====================================================== */

{
id:12,
difficulty:"easy",
category:"data_loading",
question:"Which command loads data into a Snowflake table?",
options:[
"COPY INTO",
"LOAD DATA",
"INSERT FILE",
"IMPORT DATA"
],
answer:0,
explanation:"COPY INTO is the primary command used to load data."
},

{
id:13,
difficulty:"easy",
category:"data_loading",
question:"Which Snowflake feature automatically loads new files from cloud storage?",
options:[
"Streams",
"Tasks",
"Snowpipe",
"External Tables"
],
answer:2,
explanation:"Snowpipe provides continuous automated ingestion."
},

{
id:14,
difficulty:"medium",
category:"data_loading",
question:"What is the optimal file size for Snowpipe ingestion?",
options:[
"5KB-100KB",
"5MB-100MB",
"1GB-5GB",
"10GB+"
],
answer:1,
explanation:"Snowflake recommends files between 5MB and 100MB."
},

{
id:15,
difficulty:"medium",
category:"data_loading",
question:"Which command uploads local files into an internal stage?",
options:[
"COPY",
"PUT",
"LOAD",
"STAGE"
],
answer:1,
explanation:"PUT uploads files from local systems into Snowflake stages."
},

{
id:16,
difficulty:"hard",
category:"data_loading",
question:"Which option removes the outer JSON array when loading files?",
options:[
"FLATTEN_ARRAY",
"STRIP_OUTER_ARRAY",
"REMOVE_ARRAY",
"ARRAY_TRIM"
],
answer:1,
explanation:"STRIP_OUTER_ARRAY removes the top-level JSON array."
},

/* ======================================================
CACHING
====================================================== */

{
id:17,
difficulty:"easy",
category:"performance",
question:"Which cache stores final query results?",
options:[
"Metadata Cache",
"Result Cache",
"Warehouse Cache",
"Local Cache"
],
answer:1,
explanation:"Result Cache stores final query output for 24 hours."
},

{
id:18,
difficulty:"medium",
category:"performance",
question:"When can result cache be reused?",
options:[
"When query text changes",
"When underlying data changes",
"When identical query is executed",
"When warehouse size changes"
],
answer:2,
explanation:"Queries must be identical and underlying data unchanged."
},

{
id:19,
difficulty:"hard",
category:"performance",
question:"Which cache requires an active warehouse?",
options:[
"Result Cache",
"Metadata Cache",
"Warehouse Cache",
"Cloud Cache"
],
answer:2,
explanation:"Warehouse cache stores local data and requires compute."
},

/* ======================================================
SECURITY
====================================================== */

{
id:20,
difficulty:"easy",
category:"security",
question:"Which Snowflake model controls permissions?",
options:[
"RBAC",
"ABAC",
"LDAP",
"ACL"
],
answer:0,
explanation:"Snowflake uses Role Based Access Control."
},

{
id:21,
difficulty:"medium",
category:"security",
question:"Which role can manage users and roles?",
options:[
"SYSADMIN",
"SECURITYADMIN",
"USERADMIN",
"ACCOUNTADMIN"
],
answer:1,
explanation:"SECURITYADMIN manages users, roles and privileges."
},

{
id:22,
difficulty:"medium",
category:"security",
question:"Which feature masks sensitive data dynamically?",
options:[
"Encryption",
"Masking Policy",
"Secure Views",
"Network Policy"
],
answer:1,
explanation:"Masking policies dynamically mask column data."
},

{
id:23,
difficulty:"hard",
category:"security",
question:"Which privilege allows viewing masked data?",
options:[
"UNMASK",
"ADMIN",
"SHOW DATA",
"VIEW DATA"
],
answer:0,
explanation:"UNMASK privilege allows viewing masked values."
},

/* ======================================================
TIME TRAVEL & FAILSAFE
====================================================== */

{
id:24,
difficulty:"easy",
category:"data_protection",
question:"How long is Fail-safe retention?",
options:[
"1 day",
"3 days",
"7 days",
"30 days"
],
answer:2,
explanation:"Fail-safe retention period is always 7 days."
},

{
id:25,
difficulty:"easy",
category:"data_protection",
question:"What feature allows querying historical data?",
options:[
"Fail-safe",
"Time Travel",
"Snapshot",
"Replication"
],
answer:1,
explanation:"Time Travel allows querying past data versions."
},

{
id:26,
difficulty:"medium",
category:"data_protection",
question:"What is maximum Time Travel retention for Enterprise edition?",
options:[
"1 day",
"7 days",
"30 days",
"90 days"
],
answer:3,
explanation:"Enterprise edition supports up to 90 days."
},

{
id:27,
difficulty:"hard",
category:"data_protection",
question:"Which tables do NOT support Time Travel?",
options:[
"Permanent tables",
"Transient tables",
"External tables",
"Temporary tables"
],
answer:2,
explanation:"External tables do not support Time Travel."
},

/* ======================================================
SEMI STRUCTURED DATA
====================================================== */

{
id:28,
difficulty:"easy",
category:"semi_structured",
question:"Which Snowflake data type stores JSON?",
options:[
"OBJECT",
"ARRAY",
"VARIANT",
"MAP"
],
answer:2,
explanation:"VARIANT stores semi-structured data like JSON."
},

{
id:29,
difficulty:"medium",
category:"semi_structured",
question:"Which function converts VARIANT to relational rows?",
options:[
"EXPLODE",
"FLATTEN",
"NORMALIZE",
"UNNEST"
],
answer:1,
explanation:"FLATTEN expands semi-structured arrays."
},

{
id:30,
difficulty:"hard",
category:"semi_structured",
question:"Which operator accesses JSON attributes?",
options:[
":",
".",
"->",
"::"
],
answer:0,
explanation:"The colon operator accesses JSON keys."
},

/* ======================================================
STREAMS & TASKS
====================================================== */

{
id:31,
difficulty:"easy",
category:"pipelines",
question:"What object tracks table changes?",
options:[
"Task",
"Stream",
"Pipe",
"Log"
],
answer:1,
explanation:"Streams track inserts, updates, and deletes."
},

{
id:32,
difficulty:"medium",
category:"pipelines",
question:"Which object schedules SQL execution?",
options:[
"Stream",
"Pipe",
"Task",
"Warehouse"
],
answer:2,
explanation:"Tasks schedule SQL statements."
},

{
id:33,
difficulty:"hard",
category:"pipelines",
question:"Which pipeline pattern uses Streams + Tasks?",
options:[
"CDC pipelines",
"Batch ETL",
"External ingestion",
"Warehouse scaling"
],
answer:0,
explanation:"Streams + Tasks implement Change Data Capture pipelines."
},

/* ======================================================
DATA SHARING
====================================================== */

{
id:34,
difficulty:"easy",
category:"sharing",
question:"What Snowflake feature shares data without copying?",
options:[
"Replication",
"Secure Data Sharing",
"Export",
"External Tables"
],
answer:1,
explanation:"Secure Data Sharing allows sharing without moving data."
},

{
id:35,
difficulty:"medium",
category:"sharing",
question:"Which object defines shared datasets?",
options:[
"Share",
"Replication Group",
"Warehouse",
"Database Role"
],
answer:0,
explanation:"Shares define objects available for sharing."
},

{
id:36,
difficulty:"hard",
category:"sharing",
question:"Which account type accesses shares without full license?",
options:[
"Reader Account",
"External Account",
"Guest Account",
"Partner Account"
],
answer:0,
explanation:"Reader accounts access shared data without full Snowflake license."
},

/* ======================================================
PERFORMANCE OPTIMIZATION
====================================================== */

{
id:37,
difficulty:"medium",
category:"performance",
question:"Which feature reorganizes large tables for filtering?",
options:[
"Clustering Key",
"Partition Index",
"Sort Key",
"Hash Key"
],
answer:0,
explanation:"Clustering keys optimize large tables."
},

{
id:38,
difficulty:"hard",
category:"performance",
question:"Which scenario benefits most from clustering?",
options:[
"Small lookup tables",
"Large range queries",
"Temporary tables",
"Query cache usage"
],
answer:1,
explanation:"Clustering benefits large tables with range filtering."
},

{
id:39,
difficulty:"medium",
category:"performance",
question:"Which tool analyzes query performance?",
options:[
"Query Profiler",
"Query Debugger",
"Execution Viewer",
"Warehouse Monitor"
],
answer:0,
explanation:"Query profiler visualizes execution steps."
},

/* ======================================================
SQL PRACTICE QUESTIONS
====================================================== */

{
id:40,
difficulty:"medium",
category:"sql",
question:"Which command shows all warehouses?",
options:[
"SHOW WAREHOUSES",
"LIST WAREHOUSES",
"DESCRIBE WAREHOUSES",
"SELECT * FROM WAREHOUSES"
],
answer:0,
explanation:"SHOW WAREHOUSES lists all virtual warehouses."
},

{
id:41,
difficulty:"medium",
category:"sql",
question:"Which command lists files in a stage?",
options:[
"SHOW FILES",
"LIST @stage",
"GET FILES",
"STAGE FILES"
],
answer:1,
explanation:"LIST @stage displays staged files."
},

{
id:42,
difficulty:"medium",
category:"sql",
question:"Which SQL command unloads table data?",
options:[
"COPY INTO stage",
"EXPORT TABLE",
"UNLOAD DATA",
"DUMP TABLE"
],
answer:0,
explanation:"COPY INTO stage unloads table data."
},

{
id:43,
difficulty:"hard",
category:"sql",
question:"Which function returns current role?",
options:[
"CURRENT_ROLE()",
"ROLE()",
"USER_ROLE()",
"GET_ROLE()"
],
answer:0,
explanation:"CURRENT_ROLE() returns active role."
},

{
id:44,
difficulty:"hard",
category:"sql",
question:"Which command displays grants for a role?",
options:[
"SHOW GRANTS TO ROLE",
"SHOW ROLE GRANTS",
"LIST GRANTS",
"DISPLAY GRANTS"
],
answer:0,
explanation:"SHOW GRANTS TO ROLE shows role privileges."
},

/* ======================================================
ADDITIONAL QUESTIONS
====================================================== */

{
id:45,
difficulty:"easy",
category:"file_formats",
question:"Default file format for COPY if none specified?",
options:[
"JSON",
"CSV",
"PARQUET",
"AVRO"
],
answer:1,
explanation:"CSV is the default format."
},

{
id:46,
difficulty:"medium",
category:"file_formats",
question:"Which format loads fastest?",
options:[
"CSV",
"JSON",
"PARQUET",
"XML"
],
answer:2,
explanation:"Columnar formats like Parquet load fastest."
},

{
id:47,
difficulty:"medium",
category:"metadata",
question:"Where are account metadata views stored?",
options:[
"ACCOUNT_USAGE",
"INFO_SCHEMA",
"METADATA_DB",
"SYS_TABLES"
],
answer:0,
explanation:"ACCOUNT_USAGE contains metadata views."
},

{
id:48,
difficulty:"hard",
category:"metadata",
question:"Query history retention?",
options:[
"7 days",
"14 days",
"90 days",
"365 days"
],
answer:2,
explanation:"ACCOUNT_USAGE retains 90 days."
},

{
id:49,
difficulty:"medium",
category:"security",
question:"Which feature restricts IP access?",
options:[
"Network Policy",
"Masking Policy",
"Access Policy",
"Security Policy"
],
answer:0,
explanation:"Network policies restrict login IP ranges."
},

{
id:50,
difficulty:"easy",
category:"data_types",
question:"Which type stores geospatial data?",
options:[
"GEO",
"GEOGRAPHY",
"LOCATION",
"MAP"
],
answer:1,
explanation:"GEOGRAPHY stores spatial data."
},

{
id:51,
difficulty:"medium",
category:"replication",
question:"Which feature replicates databases across regions?",
options:[
"Database Replication",
"Secure Share",
"Failover Groups",
"Mirror Tables"
],
answer:2,
explanation:"Failover groups replicate databases."
},

{
id:52,
difficulty:"hard",
category:"replication",
question:"What supports disaster recovery?",
options:[
"Failover Groups",
"Secure Views",
"Masking Policies",
"Streams"
],
answer:0,
explanation:"Failover groups support DR."
},

{
id:53,
difficulty:"medium",
category:"monitoring",
question:"Which view tracks warehouse load?",
options:[
"WAREHOUSE_LOAD_HISTORY",
"QUERY_HISTORY",
"WAREHOUSE_STATS",
"LOAD_MONITOR"
],
answer:0,
explanation:"WAREHOUSE_LOAD_HISTORY tracks load."
},

{
id:54,
difficulty:"medium",
category:"monitoring",
question:"Which table tracks logins?",
options:[
"LOGIN_HISTORY",
"USER_ACTIVITY",
"AUTH_LOG",
"ACCESS_HISTORY"
],
answer:0,
explanation:"LOGIN_HISTORY tracks user logins."
},

{
id:55,
difficulty:"hard",
category:"monitoring",
question:"Which view tracks access to objects?",
options:[
"ACCESS_HISTORY",
"QUERY_LOG",
"OBJECT_ACCESS",
"ROLE_HISTORY"
],
answer:0,
explanation:"ACCESS_HISTORY records object usage."
},

{
id:56,
difficulty:"medium",
category:"cost",
question:"What consumes Snowflake credits?",
options:[
"Storage",
"Compute warehouses",
"Metadata",
"Stages"
],
answer:1,
explanation:"Compute usage consumes credits."
},

{
id:57,
difficulty:"hard",
category:"cost",
question:"Which feature reduces compute cost?",
options:[
"Auto Suspend",
"Replication",
"Fail-safe",
"Materialized Views"
],
answer:0,
explanation:"Auto suspend stops compute billing."
},

{
id:58,
difficulty:"medium",
category:"security",
question:"Which authentication method is supported?",
options:[
"OAuth",
"Password",
"MFA",
"All of the above"
],
answer:3,
explanation:"Snowflake supports multiple auth methods."
},

{
id:59,
difficulty:"medium",
category:"stages",
question:"Which stage type is managed by Snowflake?",
options:[
"Internal Stage",
"External Stage",
"S3 Stage",
"Azure Stage"
],
answer:0,
explanation:"Internal stages are managed by Snowflake."
},

{
id:60,
difficulty:"hard",
category:"stages",
question:"Which command removes files from a stage?",
options:[
"REMOVE",
"DELETE",
"DROP FILE",
"PURGE"
],
answer:0,
explanation:"REMOVE deletes staged files."
}

];


/* ======================================================
UTILITIES
====================================================== */

function getRandomQuestions(count){
return questionBank
.sort(()=>0.5-Math.random())
.slice(0,count)
}

function getQuestionsByDifficulty(level){
return questionBank.filter(q=>q.difficulty===level)
}

function getQuestionsByCategory(category){
return questionBank.filter(q=>q.category===category)
}
