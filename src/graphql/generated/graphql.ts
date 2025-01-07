import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  name: { input: any; output: any };
  timestamptz: { input: any; output: any };
  uuid: { input: any; output: any };
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC',
}

/** columns and relationships of "geography_columns" */
export type Geography_Columns = {
  __typename?: 'geography_columns';
  coord_dimension?: Maybe<Scalars['Int']['output']>;
  f_geography_column?: Maybe<Scalars['name']['output']>;
  f_table_catalog?: Maybe<Scalars['name']['output']>;
  f_table_name?: Maybe<Scalars['name']['output']>;
  f_table_schema?: Maybe<Scalars['name']['output']>;
  srid?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "geography_columns" */
export type Geography_Columns_Aggregate = {
  __typename?: 'geography_columns_aggregate';
  aggregate?: Maybe<Geography_Columns_Aggregate_Fields>;
  nodes: Array<Geography_Columns>;
};

/** aggregate fields of "geography_columns" */
export type Geography_Columns_Aggregate_Fields = {
  __typename?: 'geography_columns_aggregate_fields';
  avg?: Maybe<Geography_Columns_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Geography_Columns_Max_Fields>;
  min?: Maybe<Geography_Columns_Min_Fields>;
  stddev?: Maybe<Geography_Columns_Stddev_Fields>;
  stddev_pop?: Maybe<Geography_Columns_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Geography_Columns_Stddev_Samp_Fields>;
  sum?: Maybe<Geography_Columns_Sum_Fields>;
  var_pop?: Maybe<Geography_Columns_Var_Pop_Fields>;
  var_samp?: Maybe<Geography_Columns_Var_Samp_Fields>;
  variance?: Maybe<Geography_Columns_Variance_Fields>;
};

/** aggregate fields of "geography_columns" */
export type Geography_Columns_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Geography_Columns_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Geography_Columns_Avg_Fields = {
  __typename?: 'geography_columns_avg_fields';
  coord_dimension?: Maybe<Scalars['Float']['output']>;
  srid?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "geography_columns". All fields are combined with a logical 'AND'. */
export type Geography_Columns_Bool_Exp = {
  _and?: InputMaybe<Array<Geography_Columns_Bool_Exp>>;
  _not?: InputMaybe<Geography_Columns_Bool_Exp>;
  _or?: InputMaybe<Array<Geography_Columns_Bool_Exp>>;
  coord_dimension?: InputMaybe<Int_Comparison_Exp>;
  f_geography_column?: InputMaybe<Name_Comparison_Exp>;
  f_table_catalog?: InputMaybe<Name_Comparison_Exp>;
  f_table_name?: InputMaybe<Name_Comparison_Exp>;
  f_table_schema?: InputMaybe<Name_Comparison_Exp>;
  srid?: InputMaybe<Int_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Geography_Columns_Max_Fields = {
  __typename?: 'geography_columns_max_fields';
  coord_dimension?: Maybe<Scalars['Int']['output']>;
  srid?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Geography_Columns_Min_Fields = {
  __typename?: 'geography_columns_min_fields';
  coord_dimension?: Maybe<Scalars['Int']['output']>;
  srid?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "geography_columns". */
export type Geography_Columns_Order_By = {
  coord_dimension?: InputMaybe<Order_By>;
  f_geography_column?: InputMaybe<Order_By>;
  f_table_catalog?: InputMaybe<Order_By>;
  f_table_name?: InputMaybe<Order_By>;
  f_table_schema?: InputMaybe<Order_By>;
  srid?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** select columns of table "geography_columns" */
export enum Geography_Columns_Select_Column {
  /** column name */
  CoordDimension = 'coord_dimension',
  /** column name */
  FGeographyColumn = 'f_geography_column',
  /** column name */
  FTableCatalog = 'f_table_catalog',
  /** column name */
  FTableName = 'f_table_name',
  /** column name */
  FTableSchema = 'f_table_schema',
  /** column name */
  Srid = 'srid',
  /** column name */
  Type = 'type',
}

/** aggregate stddev on columns */
export type Geography_Columns_Stddev_Fields = {
  __typename?: 'geography_columns_stddev_fields';
  coord_dimension?: Maybe<Scalars['Float']['output']>;
  srid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Geography_Columns_Stddev_Pop_Fields = {
  __typename?: 'geography_columns_stddev_pop_fields';
  coord_dimension?: Maybe<Scalars['Float']['output']>;
  srid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Geography_Columns_Stddev_Samp_Fields = {
  __typename?: 'geography_columns_stddev_samp_fields';
  coord_dimension?: Maybe<Scalars['Float']['output']>;
  srid?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "geography_columns" */
export type Geography_Columns_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Geography_Columns_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Geography_Columns_Stream_Cursor_Value_Input = {
  coord_dimension?: InputMaybe<Scalars['Int']['input']>;
  f_geography_column?: InputMaybe<Scalars['name']['input']>;
  f_table_catalog?: InputMaybe<Scalars['name']['input']>;
  f_table_name?: InputMaybe<Scalars['name']['input']>;
  f_table_schema?: InputMaybe<Scalars['name']['input']>;
  srid?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Geography_Columns_Sum_Fields = {
  __typename?: 'geography_columns_sum_fields';
  coord_dimension?: Maybe<Scalars['Int']['output']>;
  srid?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_pop on columns */
export type Geography_Columns_Var_Pop_Fields = {
  __typename?: 'geography_columns_var_pop_fields';
  coord_dimension?: Maybe<Scalars['Float']['output']>;
  srid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Geography_Columns_Var_Samp_Fields = {
  __typename?: 'geography_columns_var_samp_fields';
  coord_dimension?: Maybe<Scalars['Float']['output']>;
  srid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Geography_Columns_Variance_Fields = {
  __typename?: 'geography_columns_variance_fields';
  coord_dimension?: Maybe<Scalars['Float']['output']>;
  srid?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "geometry_columns" */
export type Geometry_Columns = {
  __typename?: 'geometry_columns';
  coord_dimension?: Maybe<Scalars['Int']['output']>;
  f_geometry_column?: Maybe<Scalars['name']['output']>;
  f_table_catalog?: Maybe<Scalars['String']['output']>;
  f_table_name?: Maybe<Scalars['name']['output']>;
  f_table_schema?: Maybe<Scalars['name']['output']>;
  srid?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "geometry_columns" */
export type Geometry_Columns_Aggregate = {
  __typename?: 'geometry_columns_aggregate';
  aggregate?: Maybe<Geometry_Columns_Aggregate_Fields>;
  nodes: Array<Geometry_Columns>;
};

/** aggregate fields of "geometry_columns" */
export type Geometry_Columns_Aggregate_Fields = {
  __typename?: 'geometry_columns_aggregate_fields';
  avg?: Maybe<Geometry_Columns_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Geometry_Columns_Max_Fields>;
  min?: Maybe<Geometry_Columns_Min_Fields>;
  stddev?: Maybe<Geometry_Columns_Stddev_Fields>;
  stddev_pop?: Maybe<Geometry_Columns_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Geometry_Columns_Stddev_Samp_Fields>;
  sum?: Maybe<Geometry_Columns_Sum_Fields>;
  var_pop?: Maybe<Geometry_Columns_Var_Pop_Fields>;
  var_samp?: Maybe<Geometry_Columns_Var_Samp_Fields>;
  variance?: Maybe<Geometry_Columns_Variance_Fields>;
};

/** aggregate fields of "geometry_columns" */
export type Geometry_Columns_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Geometry_Columns_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Geometry_Columns_Avg_Fields = {
  __typename?: 'geometry_columns_avg_fields';
  coord_dimension?: Maybe<Scalars['Float']['output']>;
  srid?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "geometry_columns". All fields are combined with a logical 'AND'. */
export type Geometry_Columns_Bool_Exp = {
  _and?: InputMaybe<Array<Geometry_Columns_Bool_Exp>>;
  _not?: InputMaybe<Geometry_Columns_Bool_Exp>;
  _or?: InputMaybe<Array<Geometry_Columns_Bool_Exp>>;
  coord_dimension?: InputMaybe<Int_Comparison_Exp>;
  f_geometry_column?: InputMaybe<Name_Comparison_Exp>;
  f_table_catalog?: InputMaybe<String_Comparison_Exp>;
  f_table_name?: InputMaybe<Name_Comparison_Exp>;
  f_table_schema?: InputMaybe<Name_Comparison_Exp>;
  srid?: InputMaybe<Int_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "geometry_columns" */
export type Geometry_Columns_Inc_Input = {
  coord_dimension?: InputMaybe<Scalars['Int']['input']>;
  srid?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "geometry_columns" */
export type Geometry_Columns_Insert_Input = {
  coord_dimension?: InputMaybe<Scalars['Int']['input']>;
  f_geometry_column?: InputMaybe<Scalars['name']['input']>;
  f_table_catalog?: InputMaybe<Scalars['String']['input']>;
  f_table_name?: InputMaybe<Scalars['name']['input']>;
  f_table_schema?: InputMaybe<Scalars['name']['input']>;
  srid?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Geometry_Columns_Max_Fields = {
  __typename?: 'geometry_columns_max_fields';
  coord_dimension?: Maybe<Scalars['Int']['output']>;
  f_table_catalog?: Maybe<Scalars['String']['output']>;
  srid?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Geometry_Columns_Min_Fields = {
  __typename?: 'geometry_columns_min_fields';
  coord_dimension?: Maybe<Scalars['Int']['output']>;
  f_table_catalog?: Maybe<Scalars['String']['output']>;
  srid?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "geometry_columns" */
export type Geometry_Columns_Mutation_Response = {
  __typename?: 'geometry_columns_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Geometry_Columns>;
};

/** Ordering options when selecting data from "geometry_columns". */
export type Geometry_Columns_Order_By = {
  coord_dimension?: InputMaybe<Order_By>;
  f_geometry_column?: InputMaybe<Order_By>;
  f_table_catalog?: InputMaybe<Order_By>;
  f_table_name?: InputMaybe<Order_By>;
  f_table_schema?: InputMaybe<Order_By>;
  srid?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** select columns of table "geometry_columns" */
export enum Geometry_Columns_Select_Column {
  /** column name */
  CoordDimension = 'coord_dimension',
  /** column name */
  FGeometryColumn = 'f_geometry_column',
  /** column name */
  FTableCatalog = 'f_table_catalog',
  /** column name */
  FTableName = 'f_table_name',
  /** column name */
  FTableSchema = 'f_table_schema',
  /** column name */
  Srid = 'srid',
  /** column name */
  Type = 'type',
}

/** input type for updating data in table "geometry_columns" */
export type Geometry_Columns_Set_Input = {
  coord_dimension?: InputMaybe<Scalars['Int']['input']>;
  f_geometry_column?: InputMaybe<Scalars['name']['input']>;
  f_table_catalog?: InputMaybe<Scalars['String']['input']>;
  f_table_name?: InputMaybe<Scalars['name']['input']>;
  f_table_schema?: InputMaybe<Scalars['name']['input']>;
  srid?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Geometry_Columns_Stddev_Fields = {
  __typename?: 'geometry_columns_stddev_fields';
  coord_dimension?: Maybe<Scalars['Float']['output']>;
  srid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Geometry_Columns_Stddev_Pop_Fields = {
  __typename?: 'geometry_columns_stddev_pop_fields';
  coord_dimension?: Maybe<Scalars['Float']['output']>;
  srid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Geometry_Columns_Stddev_Samp_Fields = {
  __typename?: 'geometry_columns_stddev_samp_fields';
  coord_dimension?: Maybe<Scalars['Float']['output']>;
  srid?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "geometry_columns" */
export type Geometry_Columns_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Geometry_Columns_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Geometry_Columns_Stream_Cursor_Value_Input = {
  coord_dimension?: InputMaybe<Scalars['Int']['input']>;
  f_geometry_column?: InputMaybe<Scalars['name']['input']>;
  f_table_catalog?: InputMaybe<Scalars['String']['input']>;
  f_table_name?: InputMaybe<Scalars['name']['input']>;
  f_table_schema?: InputMaybe<Scalars['name']['input']>;
  srid?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Geometry_Columns_Sum_Fields = {
  __typename?: 'geometry_columns_sum_fields';
  coord_dimension?: Maybe<Scalars['Int']['output']>;
  srid?: Maybe<Scalars['Int']['output']>;
};

export type Geometry_Columns_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Geometry_Columns_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Geometry_Columns_Set_Input>;
  /** filter the rows which have to be updated */
  where: Geometry_Columns_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Geometry_Columns_Var_Pop_Fields = {
  __typename?: 'geometry_columns_var_pop_fields';
  coord_dimension?: Maybe<Scalars['Float']['output']>;
  srid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Geometry_Columns_Var_Samp_Fields = {
  __typename?: 'geometry_columns_var_samp_fields';
  coord_dimension?: Maybe<Scalars['Float']['output']>;
  srid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Geometry_Columns_Variance_Fields = {
  __typename?: 'geometry_columns_variance_fields';
  coord_dimension?: Maybe<Scalars['Float']['output']>;
  srid?: Maybe<Scalars['Float']['output']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "geometry_columns" */
  delete_geometry_columns?: Maybe<Geometry_Columns_Mutation_Response>;
  /** delete data from the table: "spatial_ref_sys" */
  delete_spatial_ref_sys?: Maybe<Spatial_Ref_Sys_Mutation_Response>;
  /** delete single row from the table: "spatial_ref_sys" */
  delete_spatial_ref_sys_by_pk?: Maybe<Spatial_Ref_Sys>;
  /** delete data from the table: "user_wallets" */
  delete_user_wallets?: Maybe<User_Wallets_Mutation_Response>;
  /** delete single row from the table: "user_wallets" */
  delete_user_wallets_by_pk?: Maybe<User_Wallets>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "geometry_columns" */
  insert_geometry_columns?: Maybe<Geometry_Columns_Mutation_Response>;
  /** insert a single row into the table: "geometry_columns" */
  insert_geometry_columns_one?: Maybe<Geometry_Columns>;
  /** insert data into the table: "spatial_ref_sys" */
  insert_spatial_ref_sys?: Maybe<Spatial_Ref_Sys_Mutation_Response>;
  /** insert a single row into the table: "spatial_ref_sys" */
  insert_spatial_ref_sys_one?: Maybe<Spatial_Ref_Sys>;
  /** insert data into the table: "user_wallets" */
  insert_user_wallets?: Maybe<User_Wallets_Mutation_Response>;
  /** insert a single row into the table: "user_wallets" */
  insert_user_wallets_one?: Maybe<User_Wallets>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "geometry_columns" */
  update_geometry_columns?: Maybe<Geometry_Columns_Mutation_Response>;
  /** update multiples rows of table: "geometry_columns" */
  update_geometry_columns_many?: Maybe<
    Array<Maybe<Geometry_Columns_Mutation_Response>>
  >;
  /** update data of the table: "spatial_ref_sys" */
  update_spatial_ref_sys?: Maybe<Spatial_Ref_Sys_Mutation_Response>;
  /** update single row of the table: "spatial_ref_sys" */
  update_spatial_ref_sys_by_pk?: Maybe<Spatial_Ref_Sys>;
  /** update multiples rows of table: "spatial_ref_sys" */
  update_spatial_ref_sys_many?: Maybe<
    Array<Maybe<Spatial_Ref_Sys_Mutation_Response>>
  >;
  /** update data of the table: "user_wallets" */
  update_user_wallets?: Maybe<User_Wallets_Mutation_Response>;
  /** update single row of the table: "user_wallets" */
  update_user_wallets_by_pk?: Maybe<User_Wallets>;
  /** update multiples rows of table: "user_wallets" */
  update_user_wallets_many?: Maybe<
    Array<Maybe<User_Wallets_Mutation_Response>>
  >;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};

/** mutation root */
export type Mutation_RootDelete_Geometry_ColumnsArgs = {
  where: Geometry_Columns_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Spatial_Ref_SysArgs = {
  where: Spatial_Ref_Sys_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Spatial_Ref_Sys_By_PkArgs = {
  srid: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_User_WalletsArgs = {
  where: User_Wallets_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_User_Wallets_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String']['input'];
};

/** mutation root */
export type Mutation_RootInsert_Geometry_ColumnsArgs = {
  objects: Array<Geometry_Columns_Insert_Input>;
};

/** mutation root */
export type Mutation_RootInsert_Geometry_Columns_OneArgs = {
  object: Geometry_Columns_Insert_Input;
};

/** mutation root */
export type Mutation_RootInsert_Spatial_Ref_SysArgs = {
  objects: Array<Spatial_Ref_Sys_Insert_Input>;
  on_conflict?: InputMaybe<Spatial_Ref_Sys_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Spatial_Ref_Sys_OneArgs = {
  object: Spatial_Ref_Sys_Insert_Input;
  on_conflict?: InputMaybe<Spatial_Ref_Sys_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_WalletsArgs = {
  objects: Array<User_Wallets_Insert_Input>;
  on_conflict?: InputMaybe<User_Wallets_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_Wallets_OneArgs = {
  object: User_Wallets_Insert_Input;
  on_conflict?: InputMaybe<User_Wallets_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_Geometry_ColumnsArgs = {
  _inc?: InputMaybe<Geometry_Columns_Inc_Input>;
  _set?: InputMaybe<Geometry_Columns_Set_Input>;
  where: Geometry_Columns_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Geometry_Columns_ManyArgs = {
  updates: Array<Geometry_Columns_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Spatial_Ref_SysArgs = {
  _inc?: InputMaybe<Spatial_Ref_Sys_Inc_Input>;
  _set?: InputMaybe<Spatial_Ref_Sys_Set_Input>;
  where: Spatial_Ref_Sys_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Spatial_Ref_Sys_By_PkArgs = {
  _inc?: InputMaybe<Spatial_Ref_Sys_Inc_Input>;
  _set?: InputMaybe<Spatial_Ref_Sys_Set_Input>;
  pk_columns: Spatial_Ref_Sys_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Spatial_Ref_Sys_ManyArgs = {
  updates: Array<Spatial_Ref_Sys_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_User_WalletsArgs = {
  _set?: InputMaybe<User_Wallets_Set_Input>;
  where: User_Wallets_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_User_Wallets_By_PkArgs = {
  _set?: InputMaybe<User_Wallets_Set_Input>;
  pk_columns: User_Wallets_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_User_Wallets_ManyArgs = {
  updates: Array<User_Wallets_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** Boolean expression to compare columns of type "name". All fields are combined with logical 'AND'. */
export type Name_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['name']['input']>;
  _gt?: InputMaybe<Scalars['name']['input']>;
  _gte?: InputMaybe<Scalars['name']['input']>;
  _in?: InputMaybe<Array<Scalars['name']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['name']['input']>;
  _lte?: InputMaybe<Scalars['name']['input']>;
  _neq?: InputMaybe<Scalars['name']['input']>;
  _nin?: InputMaybe<Array<Scalars['name']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "geography_columns" */
  geography_columns: Array<Geography_Columns>;
  /** fetch aggregated fields from the table: "geography_columns" */
  geography_columns_aggregate: Geography_Columns_Aggregate;
  /** fetch data from the table: "geometry_columns" */
  geometry_columns: Array<Geometry_Columns>;
  /** fetch aggregated fields from the table: "geometry_columns" */
  geometry_columns_aggregate: Geometry_Columns_Aggregate;
  /** fetch data from the table: "spatial_ref_sys" */
  spatial_ref_sys: Array<Spatial_Ref_Sys>;
  /** fetch aggregated fields from the table: "spatial_ref_sys" */
  spatial_ref_sys_aggregate: Spatial_Ref_Sys_Aggregate;
  /** fetch data from the table: "spatial_ref_sys" using primary key columns */
  spatial_ref_sys_by_pk?: Maybe<Spatial_Ref_Sys>;
  /** fetch data from the table: "user_wallets" */
  user_wallets: Array<User_Wallets>;
  /** fetch aggregated fields from the table: "user_wallets" */
  user_wallets_aggregate: User_Wallets_Aggregate;
  /** fetch data from the table: "user_wallets" using primary key columns */
  user_wallets_by_pk?: Maybe<User_Wallets>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};

export type Query_RootGeography_ColumnsArgs = {
  distinct_on?: InputMaybe<Array<Geography_Columns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Geography_Columns_Order_By>>;
  where?: InputMaybe<Geography_Columns_Bool_Exp>;
};

export type Query_RootGeography_Columns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Geography_Columns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Geography_Columns_Order_By>>;
  where?: InputMaybe<Geography_Columns_Bool_Exp>;
};

export type Query_RootGeometry_ColumnsArgs = {
  distinct_on?: InputMaybe<Array<Geometry_Columns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Geometry_Columns_Order_By>>;
  where?: InputMaybe<Geometry_Columns_Bool_Exp>;
};

export type Query_RootGeometry_Columns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Geometry_Columns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Geometry_Columns_Order_By>>;
  where?: InputMaybe<Geometry_Columns_Bool_Exp>;
};

export type Query_RootSpatial_Ref_SysArgs = {
  distinct_on?: InputMaybe<Array<Spatial_Ref_Sys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Spatial_Ref_Sys_Order_By>>;
  where?: InputMaybe<Spatial_Ref_Sys_Bool_Exp>;
};

export type Query_RootSpatial_Ref_Sys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Spatial_Ref_Sys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Spatial_Ref_Sys_Order_By>>;
  where?: InputMaybe<Spatial_Ref_Sys_Bool_Exp>;
};

export type Query_RootSpatial_Ref_Sys_By_PkArgs = {
  srid: Scalars['Int']['input'];
};

export type Query_RootUser_WalletsArgs = {
  distinct_on?: InputMaybe<Array<User_Wallets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Wallets_Order_By>>;
  where?: InputMaybe<User_Wallets_Bool_Exp>;
};

export type Query_RootUser_Wallets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Wallets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Wallets_Order_By>>;
  where?: InputMaybe<User_Wallets_Bool_Exp>;
};

export type Query_RootUser_Wallets_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String']['input'];
};

/** columns and relationships of "spatial_ref_sys" */
export type Spatial_Ref_Sys = {
  __typename?: 'spatial_ref_sys';
  auth_name?: Maybe<Scalars['String']['output']>;
  auth_srid?: Maybe<Scalars['Int']['output']>;
  proj4text?: Maybe<Scalars['String']['output']>;
  srid: Scalars['Int']['output'];
  srtext?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "spatial_ref_sys" */
export type Spatial_Ref_Sys_Aggregate = {
  __typename?: 'spatial_ref_sys_aggregate';
  aggregate?: Maybe<Spatial_Ref_Sys_Aggregate_Fields>;
  nodes: Array<Spatial_Ref_Sys>;
};

/** aggregate fields of "spatial_ref_sys" */
export type Spatial_Ref_Sys_Aggregate_Fields = {
  __typename?: 'spatial_ref_sys_aggregate_fields';
  avg?: Maybe<Spatial_Ref_Sys_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Spatial_Ref_Sys_Max_Fields>;
  min?: Maybe<Spatial_Ref_Sys_Min_Fields>;
  stddev?: Maybe<Spatial_Ref_Sys_Stddev_Fields>;
  stddev_pop?: Maybe<Spatial_Ref_Sys_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Spatial_Ref_Sys_Stddev_Samp_Fields>;
  sum?: Maybe<Spatial_Ref_Sys_Sum_Fields>;
  var_pop?: Maybe<Spatial_Ref_Sys_Var_Pop_Fields>;
  var_samp?: Maybe<Spatial_Ref_Sys_Var_Samp_Fields>;
  variance?: Maybe<Spatial_Ref_Sys_Variance_Fields>;
};

/** aggregate fields of "spatial_ref_sys" */
export type Spatial_Ref_Sys_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Spatial_Ref_Sys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Spatial_Ref_Sys_Avg_Fields = {
  __typename?: 'spatial_ref_sys_avg_fields';
  auth_srid?: Maybe<Scalars['Float']['output']>;
  srid?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "spatial_ref_sys". All fields are combined with a logical 'AND'. */
export type Spatial_Ref_Sys_Bool_Exp = {
  _and?: InputMaybe<Array<Spatial_Ref_Sys_Bool_Exp>>;
  _not?: InputMaybe<Spatial_Ref_Sys_Bool_Exp>;
  _or?: InputMaybe<Array<Spatial_Ref_Sys_Bool_Exp>>;
  auth_name?: InputMaybe<String_Comparison_Exp>;
  auth_srid?: InputMaybe<Int_Comparison_Exp>;
  proj4text?: InputMaybe<String_Comparison_Exp>;
  srid?: InputMaybe<Int_Comparison_Exp>;
  srtext?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "spatial_ref_sys" */
export enum Spatial_Ref_Sys_Constraint {
  /** unique or primary key constraint on columns "srid" */
  SpatialRefSysPkey = 'spatial_ref_sys_pkey',
}

/** input type for incrementing numeric columns in table "spatial_ref_sys" */
export type Spatial_Ref_Sys_Inc_Input = {
  auth_srid?: InputMaybe<Scalars['Int']['input']>;
  srid?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "spatial_ref_sys" */
export type Spatial_Ref_Sys_Insert_Input = {
  auth_name?: InputMaybe<Scalars['String']['input']>;
  auth_srid?: InputMaybe<Scalars['Int']['input']>;
  proj4text?: InputMaybe<Scalars['String']['input']>;
  srid?: InputMaybe<Scalars['Int']['input']>;
  srtext?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Spatial_Ref_Sys_Max_Fields = {
  __typename?: 'spatial_ref_sys_max_fields';
  auth_name?: Maybe<Scalars['String']['output']>;
  auth_srid?: Maybe<Scalars['Int']['output']>;
  proj4text?: Maybe<Scalars['String']['output']>;
  srid?: Maybe<Scalars['Int']['output']>;
  srtext?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Spatial_Ref_Sys_Min_Fields = {
  __typename?: 'spatial_ref_sys_min_fields';
  auth_name?: Maybe<Scalars['String']['output']>;
  auth_srid?: Maybe<Scalars['Int']['output']>;
  proj4text?: Maybe<Scalars['String']['output']>;
  srid?: Maybe<Scalars['Int']['output']>;
  srtext?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "spatial_ref_sys" */
export type Spatial_Ref_Sys_Mutation_Response = {
  __typename?: 'spatial_ref_sys_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Spatial_Ref_Sys>;
};

/** on_conflict condition type for table "spatial_ref_sys" */
export type Spatial_Ref_Sys_On_Conflict = {
  constraint: Spatial_Ref_Sys_Constraint;
  update_columns?: Array<Spatial_Ref_Sys_Update_Column>;
  where?: InputMaybe<Spatial_Ref_Sys_Bool_Exp>;
};

/** Ordering options when selecting data from "spatial_ref_sys". */
export type Spatial_Ref_Sys_Order_By = {
  auth_name?: InputMaybe<Order_By>;
  auth_srid?: InputMaybe<Order_By>;
  proj4text?: InputMaybe<Order_By>;
  srid?: InputMaybe<Order_By>;
  srtext?: InputMaybe<Order_By>;
};

/** primary key columns input for table: spatial_ref_sys */
export type Spatial_Ref_Sys_Pk_Columns_Input = {
  srid: Scalars['Int']['input'];
};

/** select columns of table "spatial_ref_sys" */
export enum Spatial_Ref_Sys_Select_Column {
  /** column name */
  AuthName = 'auth_name',
  /** column name */
  AuthSrid = 'auth_srid',
  /** column name */
  Proj4text = 'proj4text',
  /** column name */
  Srid = 'srid',
  /** column name */
  Srtext = 'srtext',
}

/** input type for updating data in table "spatial_ref_sys" */
export type Spatial_Ref_Sys_Set_Input = {
  auth_name?: InputMaybe<Scalars['String']['input']>;
  auth_srid?: InputMaybe<Scalars['Int']['input']>;
  proj4text?: InputMaybe<Scalars['String']['input']>;
  srid?: InputMaybe<Scalars['Int']['input']>;
  srtext?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Spatial_Ref_Sys_Stddev_Fields = {
  __typename?: 'spatial_ref_sys_stddev_fields';
  auth_srid?: Maybe<Scalars['Float']['output']>;
  srid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Spatial_Ref_Sys_Stddev_Pop_Fields = {
  __typename?: 'spatial_ref_sys_stddev_pop_fields';
  auth_srid?: Maybe<Scalars['Float']['output']>;
  srid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Spatial_Ref_Sys_Stddev_Samp_Fields = {
  __typename?: 'spatial_ref_sys_stddev_samp_fields';
  auth_srid?: Maybe<Scalars['Float']['output']>;
  srid?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "spatial_ref_sys" */
export type Spatial_Ref_Sys_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Spatial_Ref_Sys_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Spatial_Ref_Sys_Stream_Cursor_Value_Input = {
  auth_name?: InputMaybe<Scalars['String']['input']>;
  auth_srid?: InputMaybe<Scalars['Int']['input']>;
  proj4text?: InputMaybe<Scalars['String']['input']>;
  srid?: InputMaybe<Scalars['Int']['input']>;
  srtext?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Spatial_Ref_Sys_Sum_Fields = {
  __typename?: 'spatial_ref_sys_sum_fields';
  auth_srid?: Maybe<Scalars['Int']['output']>;
  srid?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "spatial_ref_sys" */
export enum Spatial_Ref_Sys_Update_Column {
  /** column name */
  AuthName = 'auth_name',
  /** column name */
  AuthSrid = 'auth_srid',
  /** column name */
  Proj4text = 'proj4text',
  /** column name */
  Srid = 'srid',
  /** column name */
  Srtext = 'srtext',
}

export type Spatial_Ref_Sys_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Spatial_Ref_Sys_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Spatial_Ref_Sys_Set_Input>;
  /** filter the rows which have to be updated */
  where: Spatial_Ref_Sys_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Spatial_Ref_Sys_Var_Pop_Fields = {
  __typename?: 'spatial_ref_sys_var_pop_fields';
  auth_srid?: Maybe<Scalars['Float']['output']>;
  srid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Spatial_Ref_Sys_Var_Samp_Fields = {
  __typename?: 'spatial_ref_sys_var_samp_fields';
  auth_srid?: Maybe<Scalars['Float']['output']>;
  srid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Spatial_Ref_Sys_Variance_Fields = {
  __typename?: 'spatial_ref_sys_variance_fields';
  auth_srid?: Maybe<Scalars['Float']['output']>;
  srid?: Maybe<Scalars['Float']['output']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "geography_columns" */
  geography_columns: Array<Geography_Columns>;
  /** fetch aggregated fields from the table: "geography_columns" */
  geography_columns_aggregate: Geography_Columns_Aggregate;
  /** fetch data from the table in a streaming manner: "geography_columns" */
  geography_columns_stream: Array<Geography_Columns>;
  /** fetch data from the table: "geometry_columns" */
  geometry_columns: Array<Geometry_Columns>;
  /** fetch aggregated fields from the table: "geometry_columns" */
  geometry_columns_aggregate: Geometry_Columns_Aggregate;
  /** fetch data from the table in a streaming manner: "geometry_columns" */
  geometry_columns_stream: Array<Geometry_Columns>;
  /** fetch data from the table: "spatial_ref_sys" */
  spatial_ref_sys: Array<Spatial_Ref_Sys>;
  /** fetch aggregated fields from the table: "spatial_ref_sys" */
  spatial_ref_sys_aggregate: Spatial_Ref_Sys_Aggregate;
  /** fetch data from the table: "spatial_ref_sys" using primary key columns */
  spatial_ref_sys_by_pk?: Maybe<Spatial_Ref_Sys>;
  /** fetch data from the table in a streaming manner: "spatial_ref_sys" */
  spatial_ref_sys_stream: Array<Spatial_Ref_Sys>;
  /** fetch data from the table: "user_wallets" */
  user_wallets: Array<User_Wallets>;
  /** fetch aggregated fields from the table: "user_wallets" */
  user_wallets_aggregate: User_Wallets_Aggregate;
  /** fetch data from the table: "user_wallets" using primary key columns */
  user_wallets_by_pk?: Maybe<User_Wallets>;
  /** fetch data from the table in a streaming manner: "user_wallets" */
  user_wallets_stream: Array<User_Wallets>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};

export type Subscription_RootGeography_ColumnsArgs = {
  distinct_on?: InputMaybe<Array<Geography_Columns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Geography_Columns_Order_By>>;
  where?: InputMaybe<Geography_Columns_Bool_Exp>;
};

export type Subscription_RootGeography_Columns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Geography_Columns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Geography_Columns_Order_By>>;
  where?: InputMaybe<Geography_Columns_Bool_Exp>;
};

export type Subscription_RootGeography_Columns_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Geography_Columns_Stream_Cursor_Input>>;
  where?: InputMaybe<Geography_Columns_Bool_Exp>;
};

export type Subscription_RootGeometry_ColumnsArgs = {
  distinct_on?: InputMaybe<Array<Geometry_Columns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Geometry_Columns_Order_By>>;
  where?: InputMaybe<Geometry_Columns_Bool_Exp>;
};

export type Subscription_RootGeometry_Columns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Geometry_Columns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Geometry_Columns_Order_By>>;
  where?: InputMaybe<Geometry_Columns_Bool_Exp>;
};

export type Subscription_RootGeometry_Columns_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Geometry_Columns_Stream_Cursor_Input>>;
  where?: InputMaybe<Geometry_Columns_Bool_Exp>;
};

export type Subscription_RootSpatial_Ref_SysArgs = {
  distinct_on?: InputMaybe<Array<Spatial_Ref_Sys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Spatial_Ref_Sys_Order_By>>;
  where?: InputMaybe<Spatial_Ref_Sys_Bool_Exp>;
};

export type Subscription_RootSpatial_Ref_Sys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Spatial_Ref_Sys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Spatial_Ref_Sys_Order_By>>;
  where?: InputMaybe<Spatial_Ref_Sys_Bool_Exp>;
};

export type Subscription_RootSpatial_Ref_Sys_By_PkArgs = {
  srid: Scalars['Int']['input'];
};

export type Subscription_RootSpatial_Ref_Sys_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Spatial_Ref_Sys_Stream_Cursor_Input>>;
  where?: InputMaybe<Spatial_Ref_Sys_Bool_Exp>;
};

export type Subscription_RootUser_WalletsArgs = {
  distinct_on?: InputMaybe<Array<User_Wallets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Wallets_Order_By>>;
  where?: InputMaybe<User_Wallets_Bool_Exp>;
};

export type Subscription_RootUser_Wallets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Wallets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Wallets_Order_By>>;
  where?: InputMaybe<User_Wallets_Bool_Exp>;
};

export type Subscription_RootUser_Wallets_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

export type Subscription_RootUser_Wallets_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Wallets_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Wallets_Bool_Exp>;
};

export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String']['input'];
};

export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "user_wallets" */
export type User_Wallets = {
  __typename?: 'user_wallets';
  chain_type: Scalars['String']['output'];
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  is_primary?: Maybe<Scalars['Boolean']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
  wallet_address: Scalars['String']['output'];
};

/** aggregated selection of "user_wallets" */
export type User_Wallets_Aggregate = {
  __typename?: 'user_wallets_aggregate';
  aggregate?: Maybe<User_Wallets_Aggregate_Fields>;
  nodes: Array<User_Wallets>;
};

/** aggregate fields of "user_wallets" */
export type User_Wallets_Aggregate_Fields = {
  __typename?: 'user_wallets_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<User_Wallets_Max_Fields>;
  min?: Maybe<User_Wallets_Min_Fields>;
};

/** aggregate fields of "user_wallets" */
export type User_Wallets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Wallets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "user_wallets". All fields are combined with a logical 'AND'. */
export type User_Wallets_Bool_Exp = {
  _and?: InputMaybe<Array<User_Wallets_Bool_Exp>>;
  _not?: InputMaybe<User_Wallets_Bool_Exp>;
  _or?: InputMaybe<Array<User_Wallets_Bool_Exp>>;
  chain_type?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_primary?: InputMaybe<Boolean_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
  wallet_address?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_wallets" */
export enum User_Wallets_Constraint {
  /** unique or primary key constraint on columns "wallet_address" */
  UniqueWalletAddress = 'unique_wallet_address',
  /** unique or primary key constraint on columns "id" */
  UserWalletsPkey = 'user_wallets_pkey',
}

/** input type for inserting data into table "user_wallets" */
export type User_Wallets_Insert_Input = {
  chain_type?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_primary?: InputMaybe<Scalars['Boolean']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  wallet_address?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type User_Wallets_Max_Fields = {
  __typename?: 'user_wallets_max_fields';
  chain_type?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
  wallet_address?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type User_Wallets_Min_Fields = {
  __typename?: 'user_wallets_min_fields';
  chain_type?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
  wallet_address?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "user_wallets" */
export type User_Wallets_Mutation_Response = {
  __typename?: 'user_wallets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Wallets>;
};

/** on_conflict condition type for table "user_wallets" */
export type User_Wallets_On_Conflict = {
  constraint: User_Wallets_Constraint;
  update_columns?: Array<User_Wallets_Update_Column>;
  where?: InputMaybe<User_Wallets_Bool_Exp>;
};

/** Ordering options when selecting data from "user_wallets". */
export type User_Wallets_Order_By = {
  chain_type?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_primary?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  wallet_address?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_wallets */
export type User_Wallets_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "user_wallets" */
export enum User_Wallets_Select_Column {
  /** column name */
  ChainType = 'chain_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsPrimary = 'is_primary',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  WalletAddress = 'wallet_address',
}

/** input type for updating data in table "user_wallets" */
export type User_Wallets_Set_Input = {
  chain_type?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_primary?: InputMaybe<Scalars['Boolean']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  wallet_address?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "user_wallets" */
export type User_Wallets_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Wallets_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Wallets_Stream_Cursor_Value_Input = {
  chain_type?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_primary?: InputMaybe<Scalars['Boolean']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  wallet_address?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "user_wallets" */
export enum User_Wallets_Update_Column {
  /** column name */
  ChainType = 'chain_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsPrimary = 'is_primary',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  WalletAddress = 'wallet_address',
}

export type User_Wallets_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Wallets_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Wallets_Bool_Exp;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  last_seen?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey',
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersQuery = {
  __typename?: 'query_root';
  users: Array<{ __typename?: 'users'; id: string; email: string }>;
};

export const GetUsersDocument = gql`
  query GetUsers {
    users {
      id
      email
    }
  }
`;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options
  );
}
export function useGetUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUsersQuery,
    GetUsersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options
  );
}
export function useGetUsersSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options
  );
}
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<
  typeof useGetUsersLazyQuery
>;
export type GetUsersSuspenseQueryHookResult = ReturnType<
  typeof useGetUsersSuspenseQuery
>;
export type GetUsersQueryResult = Apollo.QueryResult<
  GetUsersQuery,
  GetUsersQueryVariables
>;

export type GetNearbyApartmentsQueryVariables = Exact<{
  coordinates: [number, number];
  radius: number;
  minPrice: number;
  maxPrice: number;
}>;

export type GetNearbyApartmentsQuery = {
  __typename?: 'query_root';
  apartments: Array<{
    __typename?: 'apartment';
    id: string;
    name: string;
    price: number;
    is_available: boolean;
    apartment_images: Array<{
      __typename?: 'apartment_image';
      image_url: string;
    }>;
    address: {
      city: string;
      street: string;
      country: string;
      postal_code: string;
      neighborhood: string;
    };
  }>;
};

export const GetNearbyApartmentsDocument = gql`
  query GetNearbyApartments(  
  $coordinates: point!,   
  $radius: Float!,   
  $minPrice: numeric,   
  $maxPrice: numeric  
  ) {  
    apartments(where: {  
      price: {  
        _gte: $minPrice,  
        _lte: $maxPrice  
      },  
      location_area: {  
        _st_d_within: {  
          distance: $radius,  
          from: {  
            type: "Point",  
            coordinates: $coordinates  
          }  
        }  
      }  
    }) {
      id
      name
      price
      is_available
      location_area
      coordinates
      apartment_images {
        image_url
      }
      apartment_images_aggregate {
        nodes {
          image_url
        }
      }
      address
    }
  }
`;

export function useGetNearbyApartmentsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetNearbyApartmentsQuery,
    GetNearbyApartmentsQueryVariables
  >
) {
  const options = { ...baseOptions };
  return Apollo.useQuery<
    GetNearbyApartmentsQuery,
    GetNearbyApartmentsQueryVariables
  >(GetNearbyApartmentsDocument, options);
}

export function useGetNearbyApartmentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetNearbyApartmentsQuery,
    GetNearbyApartmentsQueryVariables
  >
) {
  const options = { ...baseOptions };
  return Apollo.useLazyQuery<
    GetNearbyApartmentsQuery,
    GetNearbyApartmentsQueryVariables
  >(GetNearbyApartmentsDocument, options);
}

export function useGetNearbyApartmentsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetNearbyApartmentsQuery,
        GetNearbyApartmentsQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetNearbyApartmentsQuery,
    GetNearbyApartmentsQueryVariables
  >(GetNearbyApartmentsDocument, options);
}

export type GetNearbyApartmentsQueryHookResult = ReturnType<
  typeof useGetNearbyApartmentsQuery
>;
export type GetNearbyApartmentsLazyQueryHookResult = ReturnType<
  typeof useGetNearbyApartmentsLazyQuery
>;
export type GetNearbyApartmentsSuspenseQueryHookResult = ReturnType<
  typeof useGetNearbyApartmentsSuspenseQuery
>;
export type GetNearbyApartmentsQueryResult = Apollo.QueryResult<
  GetNearbyApartmentsQuery,
  GetNearbyApartmentsQueryVariables
>;
