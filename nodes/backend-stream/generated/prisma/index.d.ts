
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model calls
 * 
 */
export type calls = $Result.DefaultSelection<Prisma.$callsPayload>
/**
 * Model campaigns
 * 
 */
export type campaigns = $Result.DefaultSelection<Prisma.$campaignsPayload>
/**
 * Model models
 * 
 */
export type models = $Result.DefaultSelection<Prisma.$modelsPayload>
/**
 * Model leads
 * 
 */
export type leads = $Result.DefaultSelection<Prisma.$leadsPayload>
/**
 * Model refreshtoken
 * 
 */
export type refreshtoken = $Result.DefaultSelection<Prisma.$refreshtokenPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Calls
 * const calls = await prisma.calls.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Calls
   * const calls = await prisma.calls.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.calls`: Exposes CRUD operations for the **calls** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Calls
    * const calls = await prisma.calls.findMany()
    * ```
    */
  get calls(): Prisma.callsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaigns`: Exposes CRUD operations for the **campaigns** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaigns
    * const campaigns = await prisma.campaigns.findMany()
    * ```
    */
  get campaigns(): Prisma.campaignsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.models`: Exposes CRUD operations for the **models** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Models
    * const models = await prisma.models.findMany()
    * ```
    */
  get models(): Prisma.modelsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leads`: Exposes CRUD operations for the **leads** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leads
    * const leads = await prisma.leads.findMany()
    * ```
    */
  get leads(): Prisma.leadsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshtoken`: Exposes CRUD operations for the **refreshtoken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Refreshtokens
    * const refreshtokens = await prisma.refreshtoken.findMany()
    * ```
    */
  get refreshtoken(): Prisma.refreshtokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    calls: 'calls',
    campaigns: 'campaigns',
    models: 'models',
    leads: 'leads',
    refreshtoken: 'refreshtoken',
    user: 'user'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "calls" | "campaigns" | "models" | "leads" | "refreshtoken" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      calls: {
        payload: Prisma.$callsPayload<ExtArgs>
        fields: Prisma.callsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.callsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$callsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.callsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$callsPayload>
          }
          findFirst: {
            args: Prisma.callsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$callsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.callsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$callsPayload>
          }
          findMany: {
            args: Prisma.callsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$callsPayload>[]
          }
          create: {
            args: Prisma.callsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$callsPayload>
          }
          createMany: {
            args: Prisma.callsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.callsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$callsPayload>
          }
          update: {
            args: Prisma.callsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$callsPayload>
          }
          deleteMany: {
            args: Prisma.callsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.callsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.callsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$callsPayload>
          }
          aggregate: {
            args: Prisma.CallsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCalls>
          }
          groupBy: {
            args: Prisma.callsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CallsGroupByOutputType>[]
          }
          count: {
            args: Prisma.callsCountArgs<ExtArgs>
            result: $Utils.Optional<CallsCountAggregateOutputType> | number
          }
        }
      }
      campaigns: {
        payload: Prisma.$campaignsPayload<ExtArgs>
        fields: Prisma.campaignsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.campaignsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaignsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.campaignsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaignsPayload>
          }
          findFirst: {
            args: Prisma.campaignsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaignsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.campaignsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaignsPayload>
          }
          findMany: {
            args: Prisma.campaignsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaignsPayload>[]
          }
          create: {
            args: Prisma.campaignsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaignsPayload>
          }
          createMany: {
            args: Prisma.campaignsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.campaignsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaignsPayload>
          }
          update: {
            args: Prisma.campaignsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaignsPayload>
          }
          deleteMany: {
            args: Prisma.campaignsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.campaignsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.campaignsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaignsPayload>
          }
          aggregate: {
            args: Prisma.CampaignsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaigns>
          }
          groupBy: {
            args: Prisma.campaignsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignsGroupByOutputType>[]
          }
          count: {
            args: Prisma.campaignsCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignsCountAggregateOutputType> | number
          }
        }
      }
      models: {
        payload: Prisma.$modelsPayload<ExtArgs>
        fields: Prisma.modelsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.modelsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modelsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.modelsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modelsPayload>
          }
          findFirst: {
            args: Prisma.modelsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modelsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.modelsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modelsPayload>
          }
          findMany: {
            args: Prisma.modelsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modelsPayload>[]
          }
          create: {
            args: Prisma.modelsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modelsPayload>
          }
          createMany: {
            args: Prisma.modelsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.modelsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modelsPayload>
          }
          update: {
            args: Prisma.modelsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modelsPayload>
          }
          deleteMany: {
            args: Prisma.modelsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.modelsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.modelsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modelsPayload>
          }
          aggregate: {
            args: Prisma.ModelsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModels>
          }
          groupBy: {
            args: Prisma.modelsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModelsGroupByOutputType>[]
          }
          count: {
            args: Prisma.modelsCountArgs<ExtArgs>
            result: $Utils.Optional<ModelsCountAggregateOutputType> | number
          }
        }
      }
      leads: {
        payload: Prisma.$leadsPayload<ExtArgs>
        fields: Prisma.leadsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.leadsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.leadsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          findFirst: {
            args: Prisma.leadsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.leadsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          findMany: {
            args: Prisma.leadsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>[]
          }
          create: {
            args: Prisma.leadsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          createMany: {
            args: Prisma.leadsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.leadsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          update: {
            args: Prisma.leadsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          deleteMany: {
            args: Prisma.leadsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.leadsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.leadsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          aggregate: {
            args: Prisma.LeadsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeads>
          }
          groupBy: {
            args: Prisma.leadsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadsGroupByOutputType>[]
          }
          count: {
            args: Prisma.leadsCountArgs<ExtArgs>
            result: $Utils.Optional<LeadsCountAggregateOutputType> | number
          }
        }
      }
      refreshtoken: {
        payload: Prisma.$refreshtokenPayload<ExtArgs>
        fields: Prisma.refreshtokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.refreshtokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refreshtokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.refreshtokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refreshtokenPayload>
          }
          findFirst: {
            args: Prisma.refreshtokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refreshtokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.refreshtokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refreshtokenPayload>
          }
          findMany: {
            args: Prisma.refreshtokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refreshtokenPayload>[]
          }
          create: {
            args: Prisma.refreshtokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refreshtokenPayload>
          }
          createMany: {
            args: Prisma.refreshtokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.refreshtokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refreshtokenPayload>
          }
          update: {
            args: Prisma.refreshtokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refreshtokenPayload>
          }
          deleteMany: {
            args: Prisma.refreshtokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.refreshtokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.refreshtokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refreshtokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshtokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshtoken>
          }
          groupBy: {
            args: Prisma.refreshtokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshtokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.refreshtokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshtokenCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    calls?: callsOmit
    campaigns?: campaignsOmit
    models?: modelsOmit
    leads?: leadsOmit
    refreshtoken?: refreshtokenOmit
    user?: userOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CampaignsCountOutputType
   */

  export type CampaignsCountOutputType = {
    calls: number
    leads: number
  }

  export type CampaignsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calls?: boolean | CampaignsCountOutputTypeCountCallsArgs
    leads?: boolean | CampaignsCountOutputTypeCountLeadsArgs
  }

  // Custom InputTypes
  /**
   * CampaignsCountOutputType without action
   */
  export type CampaignsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignsCountOutputType
     */
    select?: CampaignsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampaignsCountOutputType without action
   */
  export type CampaignsCountOutputTypeCountCallsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: callsWhereInput
  }

  /**
   * CampaignsCountOutputType without action
   */
  export type CampaignsCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leadsWhereInput
  }


  /**
   * Count Type ModelsCountOutputType
   */

  export type ModelsCountOutputType = {
    campaigns: number
  }

  export type ModelsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | ModelsCountOutputTypeCountCampaignsArgs
  }

  // Custom InputTypes
  /**
   * ModelsCountOutputType without action
   */
  export type ModelsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelsCountOutputType
     */
    select?: ModelsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModelsCountOutputType without action
   */
  export type ModelsCountOutputTypeCountCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: campaignsWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    refreshtoken: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refreshtoken?: boolean | UserCountOutputTypeCountRefreshtokenArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshtokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: refreshtokenWhereInput
  }


  /**
   * Models
   */

  /**
   * Model calls
   */

  export type AggregateCalls = {
    _count: CallsCountAggregateOutputType | null
    _avg: CallsAvgAggregateOutputType | null
    _sum: CallsSumAggregateOutputType | null
    _min: CallsMinAggregateOutputType | null
    _max: CallsMaxAggregateOutputType | null
  }

  export type CallsAvgAggregateOutputType = {
    id: number | null
    campaignId: number | null
  }

  export type CallsSumAggregateOutputType = {
    id: number | null
    campaignId: number | null
  }

  export type CallsMinAggregateOutputType = {
    id: number | null
    campaignId: number | null
    contactName: string | null
    contactPhone: string | null
    callStatus: string | null
    createdAt: Date | null
    callSid: string | null
    recordingsLink: string | null
    transcriptionsLink: string | null
    BussinessName: string | null
    CallDuration: string | null
    From: string | null
  }

  export type CallsMaxAggregateOutputType = {
    id: number | null
    campaignId: number | null
    contactName: string | null
    contactPhone: string | null
    callStatus: string | null
    createdAt: Date | null
    callSid: string | null
    recordingsLink: string | null
    transcriptionsLink: string | null
    BussinessName: string | null
    CallDuration: string | null
    From: string | null
  }

  export type CallsCountAggregateOutputType = {
    id: number
    campaignId: number
    contactName: number
    contactPhone: number
    callStatus: number
    createdAt: number
    callSid: number
    recordingsLink: number
    transcriptionsLink: number
    BussinessName: number
    CallDuration: number
    From: number
    _all: number
  }


  export type CallsAvgAggregateInputType = {
    id?: true
    campaignId?: true
  }

  export type CallsSumAggregateInputType = {
    id?: true
    campaignId?: true
  }

  export type CallsMinAggregateInputType = {
    id?: true
    campaignId?: true
    contactName?: true
    contactPhone?: true
    callStatus?: true
    createdAt?: true
    callSid?: true
    recordingsLink?: true
    transcriptionsLink?: true
    BussinessName?: true
    CallDuration?: true
    From?: true
  }

  export type CallsMaxAggregateInputType = {
    id?: true
    campaignId?: true
    contactName?: true
    contactPhone?: true
    callStatus?: true
    createdAt?: true
    callSid?: true
    recordingsLink?: true
    transcriptionsLink?: true
    BussinessName?: true
    CallDuration?: true
    From?: true
  }

  export type CallsCountAggregateInputType = {
    id?: true
    campaignId?: true
    contactName?: true
    contactPhone?: true
    callStatus?: true
    createdAt?: true
    callSid?: true
    recordingsLink?: true
    transcriptionsLink?: true
    BussinessName?: true
    CallDuration?: true
    From?: true
    _all?: true
  }

  export type CallsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which calls to aggregate.
     */
    where?: callsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calls to fetch.
     */
    orderBy?: callsOrderByWithRelationInput | callsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: callsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned calls
    **/
    _count?: true | CallsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CallsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CallsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CallsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CallsMaxAggregateInputType
  }

  export type GetCallsAggregateType<T extends CallsAggregateArgs> = {
        [P in keyof T & keyof AggregateCalls]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCalls[P]>
      : GetScalarType<T[P], AggregateCalls[P]>
  }




  export type callsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: callsWhereInput
    orderBy?: callsOrderByWithAggregationInput | callsOrderByWithAggregationInput[]
    by: CallsScalarFieldEnum[] | CallsScalarFieldEnum
    having?: callsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CallsCountAggregateInputType | true
    _avg?: CallsAvgAggregateInputType
    _sum?: CallsSumAggregateInputType
    _min?: CallsMinAggregateInputType
    _max?: CallsMaxAggregateInputType
  }

  export type CallsGroupByOutputType = {
    id: number
    campaignId: number
    contactName: string
    contactPhone: string
    callStatus: string
    createdAt: Date
    callSid: string
    recordingsLink: string | null
    transcriptionsLink: string | null
    BussinessName: string
    CallDuration: string
    From: string
    _count: CallsCountAggregateOutputType | null
    _avg: CallsAvgAggregateOutputType | null
    _sum: CallsSumAggregateOutputType | null
    _min: CallsMinAggregateOutputType | null
    _max: CallsMaxAggregateOutputType | null
  }

  type GetCallsGroupByPayload<T extends callsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CallsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CallsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CallsGroupByOutputType[P]>
            : GetScalarType<T[P], CallsGroupByOutputType[P]>
        }
      >
    >


  export type callsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    contactName?: boolean
    contactPhone?: boolean
    callStatus?: boolean
    createdAt?: boolean
    callSid?: boolean
    recordingsLink?: boolean
    transcriptionsLink?: boolean
    BussinessName?: boolean
    CallDuration?: boolean
    From?: boolean
    campaigns?: boolean | campaignsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calls"]>



  export type callsSelectScalar = {
    id?: boolean
    campaignId?: boolean
    contactName?: boolean
    contactPhone?: boolean
    callStatus?: boolean
    createdAt?: boolean
    callSid?: boolean
    recordingsLink?: boolean
    transcriptionsLink?: boolean
    BussinessName?: boolean
    CallDuration?: boolean
    From?: boolean
  }

  export type callsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "campaignId" | "contactName" | "contactPhone" | "callStatus" | "createdAt" | "callSid" | "recordingsLink" | "transcriptionsLink" | "BussinessName" | "CallDuration" | "From", ExtArgs["result"]["calls"]>
  export type callsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | campaignsDefaultArgs<ExtArgs>
  }

  export type $callsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "calls"
    objects: {
      campaigns: Prisma.$campaignsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      campaignId: number
      contactName: string
      contactPhone: string
      callStatus: string
      createdAt: Date
      callSid: string
      recordingsLink: string | null
      transcriptionsLink: string | null
      BussinessName: string
      CallDuration: string
      From: string
    }, ExtArgs["result"]["calls"]>
    composites: {}
  }

  type callsGetPayload<S extends boolean | null | undefined | callsDefaultArgs> = $Result.GetResult<Prisma.$callsPayload, S>

  type callsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<callsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CallsCountAggregateInputType | true
    }

  export interface callsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['calls'], meta: { name: 'calls' } }
    /**
     * Find zero or one Calls that matches the filter.
     * @param {callsFindUniqueArgs} args - Arguments to find a Calls
     * @example
     * // Get one Calls
     * const calls = await prisma.calls.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends callsFindUniqueArgs>(args: SelectSubset<T, callsFindUniqueArgs<ExtArgs>>): Prisma__callsClient<$Result.GetResult<Prisma.$callsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Calls that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {callsFindUniqueOrThrowArgs} args - Arguments to find a Calls
     * @example
     * // Get one Calls
     * const calls = await prisma.calls.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends callsFindUniqueOrThrowArgs>(args: SelectSubset<T, callsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__callsClient<$Result.GetResult<Prisma.$callsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Calls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {callsFindFirstArgs} args - Arguments to find a Calls
     * @example
     * // Get one Calls
     * const calls = await prisma.calls.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends callsFindFirstArgs>(args?: SelectSubset<T, callsFindFirstArgs<ExtArgs>>): Prisma__callsClient<$Result.GetResult<Prisma.$callsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Calls that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {callsFindFirstOrThrowArgs} args - Arguments to find a Calls
     * @example
     * // Get one Calls
     * const calls = await prisma.calls.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends callsFindFirstOrThrowArgs>(args?: SelectSubset<T, callsFindFirstOrThrowArgs<ExtArgs>>): Prisma__callsClient<$Result.GetResult<Prisma.$callsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Calls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {callsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Calls
     * const calls = await prisma.calls.findMany()
     * 
     * // Get first 10 Calls
     * const calls = await prisma.calls.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const callsWithIdOnly = await prisma.calls.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends callsFindManyArgs>(args?: SelectSubset<T, callsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$callsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Calls.
     * @param {callsCreateArgs} args - Arguments to create a Calls.
     * @example
     * // Create one Calls
     * const Calls = await prisma.calls.create({
     *   data: {
     *     // ... data to create a Calls
     *   }
     * })
     * 
     */
    create<T extends callsCreateArgs>(args: SelectSubset<T, callsCreateArgs<ExtArgs>>): Prisma__callsClient<$Result.GetResult<Prisma.$callsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Calls.
     * @param {callsCreateManyArgs} args - Arguments to create many Calls.
     * @example
     * // Create many Calls
     * const calls = await prisma.calls.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends callsCreateManyArgs>(args?: SelectSubset<T, callsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Calls.
     * @param {callsDeleteArgs} args - Arguments to delete one Calls.
     * @example
     * // Delete one Calls
     * const Calls = await prisma.calls.delete({
     *   where: {
     *     // ... filter to delete one Calls
     *   }
     * })
     * 
     */
    delete<T extends callsDeleteArgs>(args: SelectSubset<T, callsDeleteArgs<ExtArgs>>): Prisma__callsClient<$Result.GetResult<Prisma.$callsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Calls.
     * @param {callsUpdateArgs} args - Arguments to update one Calls.
     * @example
     * // Update one Calls
     * const calls = await prisma.calls.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends callsUpdateArgs>(args: SelectSubset<T, callsUpdateArgs<ExtArgs>>): Prisma__callsClient<$Result.GetResult<Prisma.$callsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Calls.
     * @param {callsDeleteManyArgs} args - Arguments to filter Calls to delete.
     * @example
     * // Delete a few Calls
     * const { count } = await prisma.calls.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends callsDeleteManyArgs>(args?: SelectSubset<T, callsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Calls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {callsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Calls
     * const calls = await prisma.calls.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends callsUpdateManyArgs>(args: SelectSubset<T, callsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Calls.
     * @param {callsUpsertArgs} args - Arguments to update or create a Calls.
     * @example
     * // Update or create a Calls
     * const calls = await prisma.calls.upsert({
     *   create: {
     *     // ... data to create a Calls
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Calls we want to update
     *   }
     * })
     */
    upsert<T extends callsUpsertArgs>(args: SelectSubset<T, callsUpsertArgs<ExtArgs>>): Prisma__callsClient<$Result.GetResult<Prisma.$callsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Calls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {callsCountArgs} args - Arguments to filter Calls to count.
     * @example
     * // Count the number of Calls
     * const count = await prisma.calls.count({
     *   where: {
     *     // ... the filter for the Calls we want to count
     *   }
     * })
    **/
    count<T extends callsCountArgs>(
      args?: Subset<T, callsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CallsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Calls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CallsAggregateArgs>(args: Subset<T, CallsAggregateArgs>): Prisma.PrismaPromise<GetCallsAggregateType<T>>

    /**
     * Group by Calls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {callsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends callsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: callsGroupByArgs['orderBy'] }
        : { orderBy?: callsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, callsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCallsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the calls model
   */
  readonly fields: callsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for calls.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__callsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaigns<T extends campaignsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, campaignsDefaultArgs<ExtArgs>>): Prisma__campaignsClient<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the calls model
   */
  interface callsFieldRefs {
    readonly id: FieldRef<"calls", 'Int'>
    readonly campaignId: FieldRef<"calls", 'Int'>
    readonly contactName: FieldRef<"calls", 'String'>
    readonly contactPhone: FieldRef<"calls", 'String'>
    readonly callStatus: FieldRef<"calls", 'String'>
    readonly createdAt: FieldRef<"calls", 'DateTime'>
    readonly callSid: FieldRef<"calls", 'String'>
    readonly recordingsLink: FieldRef<"calls", 'String'>
    readonly transcriptionsLink: FieldRef<"calls", 'String'>
    readonly BussinessName: FieldRef<"calls", 'String'>
    readonly CallDuration: FieldRef<"calls", 'String'>
    readonly From: FieldRef<"calls", 'String'>
  }
    

  // Custom InputTypes
  /**
   * calls findUnique
   */
  export type callsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calls
     */
    select?: callsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calls
     */
    omit?: callsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: callsInclude<ExtArgs> | null
    /**
     * Filter, which calls to fetch.
     */
    where: callsWhereUniqueInput
  }

  /**
   * calls findUniqueOrThrow
   */
  export type callsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calls
     */
    select?: callsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calls
     */
    omit?: callsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: callsInclude<ExtArgs> | null
    /**
     * Filter, which calls to fetch.
     */
    where: callsWhereUniqueInput
  }

  /**
   * calls findFirst
   */
  export type callsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calls
     */
    select?: callsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calls
     */
    omit?: callsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: callsInclude<ExtArgs> | null
    /**
     * Filter, which calls to fetch.
     */
    where?: callsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calls to fetch.
     */
    orderBy?: callsOrderByWithRelationInput | callsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for calls.
     */
    cursor?: callsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of calls.
     */
    distinct?: CallsScalarFieldEnum | CallsScalarFieldEnum[]
  }

  /**
   * calls findFirstOrThrow
   */
  export type callsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calls
     */
    select?: callsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calls
     */
    omit?: callsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: callsInclude<ExtArgs> | null
    /**
     * Filter, which calls to fetch.
     */
    where?: callsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calls to fetch.
     */
    orderBy?: callsOrderByWithRelationInput | callsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for calls.
     */
    cursor?: callsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of calls.
     */
    distinct?: CallsScalarFieldEnum | CallsScalarFieldEnum[]
  }

  /**
   * calls findMany
   */
  export type callsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calls
     */
    select?: callsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calls
     */
    omit?: callsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: callsInclude<ExtArgs> | null
    /**
     * Filter, which calls to fetch.
     */
    where?: callsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calls to fetch.
     */
    orderBy?: callsOrderByWithRelationInput | callsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing calls.
     */
    cursor?: callsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calls.
     */
    skip?: number
    distinct?: CallsScalarFieldEnum | CallsScalarFieldEnum[]
  }

  /**
   * calls create
   */
  export type callsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calls
     */
    select?: callsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calls
     */
    omit?: callsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: callsInclude<ExtArgs> | null
    /**
     * The data needed to create a calls.
     */
    data: XOR<callsCreateInput, callsUncheckedCreateInput>
  }

  /**
   * calls createMany
   */
  export type callsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many calls.
     */
    data: callsCreateManyInput | callsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * calls update
   */
  export type callsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calls
     */
    select?: callsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calls
     */
    omit?: callsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: callsInclude<ExtArgs> | null
    /**
     * The data needed to update a calls.
     */
    data: XOR<callsUpdateInput, callsUncheckedUpdateInput>
    /**
     * Choose, which calls to update.
     */
    where: callsWhereUniqueInput
  }

  /**
   * calls updateMany
   */
  export type callsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update calls.
     */
    data: XOR<callsUpdateManyMutationInput, callsUncheckedUpdateManyInput>
    /**
     * Filter which calls to update
     */
    where?: callsWhereInput
    /**
     * Limit how many calls to update.
     */
    limit?: number
  }

  /**
   * calls upsert
   */
  export type callsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calls
     */
    select?: callsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calls
     */
    omit?: callsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: callsInclude<ExtArgs> | null
    /**
     * The filter to search for the calls to update in case it exists.
     */
    where: callsWhereUniqueInput
    /**
     * In case the calls found by the `where` argument doesn't exist, create a new calls with this data.
     */
    create: XOR<callsCreateInput, callsUncheckedCreateInput>
    /**
     * In case the calls was found with the provided `where` argument, update it with this data.
     */
    update: XOR<callsUpdateInput, callsUncheckedUpdateInput>
  }

  /**
   * calls delete
   */
  export type callsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calls
     */
    select?: callsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calls
     */
    omit?: callsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: callsInclude<ExtArgs> | null
    /**
     * Filter which calls to delete.
     */
    where: callsWhereUniqueInput
  }

  /**
   * calls deleteMany
   */
  export type callsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which calls to delete
     */
    where?: callsWhereInput
    /**
     * Limit how many calls to delete.
     */
    limit?: number
  }

  /**
   * calls without action
   */
  export type callsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calls
     */
    select?: callsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calls
     */
    omit?: callsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: callsInclude<ExtArgs> | null
  }


  /**
   * Model campaigns
   */

  export type AggregateCampaigns = {
    _count: CampaignsCountAggregateOutputType | null
    _avg: CampaignsAvgAggregateOutputType | null
    _sum: CampaignsSumAggregateOutputType | null
    _min: CampaignsMinAggregateOutputType | null
    _max: CampaignsMaxAggregateOutputType | null
  }

  export type CampaignsAvgAggregateOutputType = {
    id: number | null
    modelId: number | null
    lastContactIndex: number | null
  }

  export type CampaignsSumAggregateOutputType = {
    id: number | null
    modelId: number | null
    lastContactIndex: number | null
  }

  export type CampaignsMinAggregateOutputType = {
    id: number | null
    contacts: string | null
    modelId: number | null
    campaignName: string | null
    campaignDescription: string | null
    callScript: string | null
    status: string | null
    lastContactIndex: number | null
    createdAt: Date | null
  }

  export type CampaignsMaxAggregateOutputType = {
    id: number | null
    contacts: string | null
    modelId: number | null
    campaignName: string | null
    campaignDescription: string | null
    callScript: string | null
    status: string | null
    lastContactIndex: number | null
    createdAt: Date | null
  }

  export type CampaignsCountAggregateOutputType = {
    id: number
    contacts: number
    modelId: number
    campaignName: number
    campaignDescription: number
    callScript: number
    status: number
    lastContactIndex: number
    createdAt: number
    _all: number
  }


  export type CampaignsAvgAggregateInputType = {
    id?: true
    modelId?: true
    lastContactIndex?: true
  }

  export type CampaignsSumAggregateInputType = {
    id?: true
    modelId?: true
    lastContactIndex?: true
  }

  export type CampaignsMinAggregateInputType = {
    id?: true
    contacts?: true
    modelId?: true
    campaignName?: true
    campaignDescription?: true
    callScript?: true
    status?: true
    lastContactIndex?: true
    createdAt?: true
  }

  export type CampaignsMaxAggregateInputType = {
    id?: true
    contacts?: true
    modelId?: true
    campaignName?: true
    campaignDescription?: true
    callScript?: true
    status?: true
    lastContactIndex?: true
    createdAt?: true
  }

  export type CampaignsCountAggregateInputType = {
    id?: true
    contacts?: true
    modelId?: true
    campaignName?: true
    campaignDescription?: true
    callScript?: true
    status?: true
    lastContactIndex?: true
    createdAt?: true
    _all?: true
  }

  export type CampaignsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which campaigns to aggregate.
     */
    where?: campaignsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of campaigns to fetch.
     */
    orderBy?: campaignsOrderByWithRelationInput | campaignsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: campaignsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned campaigns
    **/
    _count?: true | CampaignsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampaignsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampaignsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignsMaxAggregateInputType
  }

  export type GetCampaignsAggregateType<T extends CampaignsAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaigns]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaigns[P]>
      : GetScalarType<T[P], AggregateCampaigns[P]>
  }




  export type campaignsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: campaignsWhereInput
    orderBy?: campaignsOrderByWithAggregationInput | campaignsOrderByWithAggregationInput[]
    by: CampaignsScalarFieldEnum[] | CampaignsScalarFieldEnum
    having?: campaignsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignsCountAggregateInputType | true
    _avg?: CampaignsAvgAggregateInputType
    _sum?: CampaignsSumAggregateInputType
    _min?: CampaignsMinAggregateInputType
    _max?: CampaignsMaxAggregateInputType
  }

  export type CampaignsGroupByOutputType = {
    id: number
    contacts: string
    modelId: number
    campaignName: string
    campaignDescription: string
    callScript: string
    status: string
    lastContactIndex: number
    createdAt: Date
    _count: CampaignsCountAggregateOutputType | null
    _avg: CampaignsAvgAggregateOutputType | null
    _sum: CampaignsSumAggregateOutputType | null
    _min: CampaignsMinAggregateOutputType | null
    _max: CampaignsMaxAggregateOutputType | null
  }

  type GetCampaignsGroupByPayload<T extends campaignsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignsGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignsGroupByOutputType[P]>
        }
      >
    >


  export type campaignsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contacts?: boolean
    modelId?: boolean
    campaignName?: boolean
    campaignDescription?: boolean
    callScript?: boolean
    status?: boolean
    lastContactIndex?: boolean
    createdAt?: boolean
    calls?: boolean | campaigns$callsArgs<ExtArgs>
    models?: boolean | modelsDefaultArgs<ExtArgs>
    leads?: boolean | campaigns$leadsArgs<ExtArgs>
    _count?: boolean | CampaignsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaigns"]>



  export type campaignsSelectScalar = {
    id?: boolean
    contacts?: boolean
    modelId?: boolean
    campaignName?: boolean
    campaignDescription?: boolean
    callScript?: boolean
    status?: boolean
    lastContactIndex?: boolean
    createdAt?: boolean
  }

  export type campaignsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contacts" | "modelId" | "campaignName" | "campaignDescription" | "callScript" | "status" | "lastContactIndex" | "createdAt", ExtArgs["result"]["campaigns"]>
  export type campaignsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calls?: boolean | campaigns$callsArgs<ExtArgs>
    models?: boolean | modelsDefaultArgs<ExtArgs>
    leads?: boolean | campaigns$leadsArgs<ExtArgs>
    _count?: boolean | CampaignsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $campaignsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "campaigns"
    objects: {
      calls: Prisma.$callsPayload<ExtArgs>[]
      models: Prisma.$modelsPayload<ExtArgs>
      leads: Prisma.$leadsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      contacts: string
      modelId: number
      campaignName: string
      campaignDescription: string
      callScript: string
      status: string
      lastContactIndex: number
      createdAt: Date
    }, ExtArgs["result"]["campaigns"]>
    composites: {}
  }

  type campaignsGetPayload<S extends boolean | null | undefined | campaignsDefaultArgs> = $Result.GetResult<Prisma.$campaignsPayload, S>

  type campaignsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<campaignsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignsCountAggregateInputType | true
    }

  export interface campaignsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['campaigns'], meta: { name: 'campaigns' } }
    /**
     * Find zero or one Campaigns that matches the filter.
     * @param {campaignsFindUniqueArgs} args - Arguments to find a Campaigns
     * @example
     * // Get one Campaigns
     * const campaigns = await prisma.campaigns.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends campaignsFindUniqueArgs>(args: SelectSubset<T, campaignsFindUniqueArgs<ExtArgs>>): Prisma__campaignsClient<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campaigns that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {campaignsFindUniqueOrThrowArgs} args - Arguments to find a Campaigns
     * @example
     * // Get one Campaigns
     * const campaigns = await prisma.campaigns.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends campaignsFindUniqueOrThrowArgs>(args: SelectSubset<T, campaignsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__campaignsClient<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {campaignsFindFirstArgs} args - Arguments to find a Campaigns
     * @example
     * // Get one Campaigns
     * const campaigns = await prisma.campaigns.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends campaignsFindFirstArgs>(args?: SelectSubset<T, campaignsFindFirstArgs<ExtArgs>>): Prisma__campaignsClient<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaigns that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {campaignsFindFirstOrThrowArgs} args - Arguments to find a Campaigns
     * @example
     * // Get one Campaigns
     * const campaigns = await prisma.campaigns.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends campaignsFindFirstOrThrowArgs>(args?: SelectSubset<T, campaignsFindFirstOrThrowArgs<ExtArgs>>): Prisma__campaignsClient<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {campaignsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaigns.findMany()
     * 
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaigns.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignsWithIdOnly = await prisma.campaigns.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends campaignsFindManyArgs>(args?: SelectSubset<T, campaignsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campaigns.
     * @param {campaignsCreateArgs} args - Arguments to create a Campaigns.
     * @example
     * // Create one Campaigns
     * const Campaigns = await prisma.campaigns.create({
     *   data: {
     *     // ... data to create a Campaigns
     *   }
     * })
     * 
     */
    create<T extends campaignsCreateArgs>(args: SelectSubset<T, campaignsCreateArgs<ExtArgs>>): Prisma__campaignsClient<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campaigns.
     * @param {campaignsCreateManyArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaigns = await prisma.campaigns.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends campaignsCreateManyArgs>(args?: SelectSubset<T, campaignsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Campaigns.
     * @param {campaignsDeleteArgs} args - Arguments to delete one Campaigns.
     * @example
     * // Delete one Campaigns
     * const Campaigns = await prisma.campaigns.delete({
     *   where: {
     *     // ... filter to delete one Campaigns
     *   }
     * })
     * 
     */
    delete<T extends campaignsDeleteArgs>(args: SelectSubset<T, campaignsDeleteArgs<ExtArgs>>): Prisma__campaignsClient<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campaigns.
     * @param {campaignsUpdateArgs} args - Arguments to update one Campaigns.
     * @example
     * // Update one Campaigns
     * const campaigns = await prisma.campaigns.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends campaignsUpdateArgs>(args: SelectSubset<T, campaignsUpdateArgs<ExtArgs>>): Prisma__campaignsClient<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campaigns.
     * @param {campaignsDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaigns.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends campaignsDeleteManyArgs>(args?: SelectSubset<T, campaignsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {campaignsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaigns = await prisma.campaigns.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends campaignsUpdateManyArgs>(args: SelectSubset<T, campaignsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Campaigns.
     * @param {campaignsUpsertArgs} args - Arguments to update or create a Campaigns.
     * @example
     * // Update or create a Campaigns
     * const campaigns = await prisma.campaigns.upsert({
     *   create: {
     *     // ... data to create a Campaigns
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaigns we want to update
     *   }
     * })
     */
    upsert<T extends campaignsUpsertArgs>(args: SelectSubset<T, campaignsUpsertArgs<ExtArgs>>): Prisma__campaignsClient<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {campaignsCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaigns.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
    **/
    count<T extends campaignsCountArgs>(
      args?: Subset<T, campaignsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CampaignsAggregateArgs>(args: Subset<T, CampaignsAggregateArgs>): Prisma.PrismaPromise<GetCampaignsAggregateType<T>>

    /**
     * Group by Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {campaignsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends campaignsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: campaignsGroupByArgs['orderBy'] }
        : { orderBy?: campaignsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, campaignsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the campaigns model
   */
  readonly fields: campaignsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for campaigns.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__campaignsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    calls<T extends campaigns$callsArgs<ExtArgs> = {}>(args?: Subset<T, campaigns$callsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$callsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    models<T extends modelsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, modelsDefaultArgs<ExtArgs>>): Prisma__modelsClient<$Result.GetResult<Prisma.$modelsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    leads<T extends campaigns$leadsArgs<ExtArgs> = {}>(args?: Subset<T, campaigns$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the campaigns model
   */
  interface campaignsFieldRefs {
    readonly id: FieldRef<"campaigns", 'Int'>
    readonly contacts: FieldRef<"campaigns", 'String'>
    readonly modelId: FieldRef<"campaigns", 'Int'>
    readonly campaignName: FieldRef<"campaigns", 'String'>
    readonly campaignDescription: FieldRef<"campaigns", 'String'>
    readonly callScript: FieldRef<"campaigns", 'String'>
    readonly status: FieldRef<"campaigns", 'String'>
    readonly lastContactIndex: FieldRef<"campaigns", 'Int'>
    readonly createdAt: FieldRef<"campaigns", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * campaigns findUnique
   */
  export type campaignsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaigns
     */
    select?: campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaigns
     */
    omit?: campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaignsInclude<ExtArgs> | null
    /**
     * Filter, which campaigns to fetch.
     */
    where: campaignsWhereUniqueInput
  }

  /**
   * campaigns findUniqueOrThrow
   */
  export type campaignsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaigns
     */
    select?: campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaigns
     */
    omit?: campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaignsInclude<ExtArgs> | null
    /**
     * Filter, which campaigns to fetch.
     */
    where: campaignsWhereUniqueInput
  }

  /**
   * campaigns findFirst
   */
  export type campaignsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaigns
     */
    select?: campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaigns
     */
    omit?: campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaignsInclude<ExtArgs> | null
    /**
     * Filter, which campaigns to fetch.
     */
    where?: campaignsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of campaigns to fetch.
     */
    orderBy?: campaignsOrderByWithRelationInput | campaignsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for campaigns.
     */
    cursor?: campaignsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of campaigns.
     */
    distinct?: CampaignsScalarFieldEnum | CampaignsScalarFieldEnum[]
  }

  /**
   * campaigns findFirstOrThrow
   */
  export type campaignsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaigns
     */
    select?: campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaigns
     */
    omit?: campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaignsInclude<ExtArgs> | null
    /**
     * Filter, which campaigns to fetch.
     */
    where?: campaignsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of campaigns to fetch.
     */
    orderBy?: campaignsOrderByWithRelationInput | campaignsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for campaigns.
     */
    cursor?: campaignsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of campaigns.
     */
    distinct?: CampaignsScalarFieldEnum | CampaignsScalarFieldEnum[]
  }

  /**
   * campaigns findMany
   */
  export type campaignsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaigns
     */
    select?: campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaigns
     */
    omit?: campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaignsInclude<ExtArgs> | null
    /**
     * Filter, which campaigns to fetch.
     */
    where?: campaignsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of campaigns to fetch.
     */
    orderBy?: campaignsOrderByWithRelationInput | campaignsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing campaigns.
     */
    cursor?: campaignsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` campaigns.
     */
    skip?: number
    distinct?: CampaignsScalarFieldEnum | CampaignsScalarFieldEnum[]
  }

  /**
   * campaigns create
   */
  export type campaignsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaigns
     */
    select?: campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaigns
     */
    omit?: campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaignsInclude<ExtArgs> | null
    /**
     * The data needed to create a campaigns.
     */
    data: XOR<campaignsCreateInput, campaignsUncheckedCreateInput>
  }

  /**
   * campaigns createMany
   */
  export type campaignsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many campaigns.
     */
    data: campaignsCreateManyInput | campaignsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * campaigns update
   */
  export type campaignsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaigns
     */
    select?: campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaigns
     */
    omit?: campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaignsInclude<ExtArgs> | null
    /**
     * The data needed to update a campaigns.
     */
    data: XOR<campaignsUpdateInput, campaignsUncheckedUpdateInput>
    /**
     * Choose, which campaigns to update.
     */
    where: campaignsWhereUniqueInput
  }

  /**
   * campaigns updateMany
   */
  export type campaignsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update campaigns.
     */
    data: XOR<campaignsUpdateManyMutationInput, campaignsUncheckedUpdateManyInput>
    /**
     * Filter which campaigns to update
     */
    where?: campaignsWhereInput
    /**
     * Limit how many campaigns to update.
     */
    limit?: number
  }

  /**
   * campaigns upsert
   */
  export type campaignsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaigns
     */
    select?: campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaigns
     */
    omit?: campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaignsInclude<ExtArgs> | null
    /**
     * The filter to search for the campaigns to update in case it exists.
     */
    where: campaignsWhereUniqueInput
    /**
     * In case the campaigns found by the `where` argument doesn't exist, create a new campaigns with this data.
     */
    create: XOR<campaignsCreateInput, campaignsUncheckedCreateInput>
    /**
     * In case the campaigns was found with the provided `where` argument, update it with this data.
     */
    update: XOR<campaignsUpdateInput, campaignsUncheckedUpdateInput>
  }

  /**
   * campaigns delete
   */
  export type campaignsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaigns
     */
    select?: campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaigns
     */
    omit?: campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaignsInclude<ExtArgs> | null
    /**
     * Filter which campaigns to delete.
     */
    where: campaignsWhereUniqueInput
  }

  /**
   * campaigns deleteMany
   */
  export type campaignsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which campaigns to delete
     */
    where?: campaignsWhereInput
    /**
     * Limit how many campaigns to delete.
     */
    limit?: number
  }

  /**
   * campaigns.calls
   */
  export type campaigns$callsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calls
     */
    select?: callsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calls
     */
    omit?: callsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: callsInclude<ExtArgs> | null
    where?: callsWhereInput
    orderBy?: callsOrderByWithRelationInput | callsOrderByWithRelationInput[]
    cursor?: callsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CallsScalarFieldEnum | CallsScalarFieldEnum[]
  }

  /**
   * campaigns.leads
   */
  export type campaigns$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leadsInclude<ExtArgs> | null
    where?: leadsWhereInput
    orderBy?: leadsOrderByWithRelationInput | leadsOrderByWithRelationInput[]
    cursor?: leadsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[]
  }

  /**
   * campaigns without action
   */
  export type campaignsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaigns
     */
    select?: campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaigns
     */
    omit?: campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaignsInclude<ExtArgs> | null
  }


  /**
   * Model models
   */

  export type AggregateModels = {
    _count: ModelsCountAggregateOutputType | null
    _avg: ModelsAvgAggregateOutputType | null
    _sum: ModelsSumAggregateOutputType | null
    _min: ModelsMinAggregateOutputType | null
    _max: ModelsMaxAggregateOutputType | null
  }

  export type ModelsAvgAggregateOutputType = {
    id: number | null
  }

  export type ModelsSumAggregateOutputType = {
    id: number | null
  }

  export type ModelsMinAggregateOutputType = {
    id: number | null
    modelName: string | null
    instructions: string | null
    trainingData: string | null
    createdAt: Date | null
  }

  export type ModelsMaxAggregateOutputType = {
    id: number | null
    modelName: string | null
    instructions: string | null
    trainingData: string | null
    createdAt: Date | null
  }

  export type ModelsCountAggregateOutputType = {
    id: number
    modelName: number
    instructions: number
    trainingData: number
    createdAt: number
    _all: number
  }


  export type ModelsAvgAggregateInputType = {
    id?: true
  }

  export type ModelsSumAggregateInputType = {
    id?: true
  }

  export type ModelsMinAggregateInputType = {
    id?: true
    modelName?: true
    instructions?: true
    trainingData?: true
    createdAt?: true
  }

  export type ModelsMaxAggregateInputType = {
    id?: true
    modelName?: true
    instructions?: true
    trainingData?: true
    createdAt?: true
  }

  export type ModelsCountAggregateInputType = {
    id?: true
    modelName?: true
    instructions?: true
    trainingData?: true
    createdAt?: true
    _all?: true
  }

  export type ModelsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which models to aggregate.
     */
    where?: modelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of models to fetch.
     */
    orderBy?: modelsOrderByWithRelationInput | modelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: modelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned models
    **/
    _count?: true | ModelsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModelsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModelsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModelsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModelsMaxAggregateInputType
  }

  export type GetModelsAggregateType<T extends ModelsAggregateArgs> = {
        [P in keyof T & keyof AggregateModels]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModels[P]>
      : GetScalarType<T[P], AggregateModels[P]>
  }




  export type modelsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: modelsWhereInput
    orderBy?: modelsOrderByWithAggregationInput | modelsOrderByWithAggregationInput[]
    by: ModelsScalarFieldEnum[] | ModelsScalarFieldEnum
    having?: modelsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModelsCountAggregateInputType | true
    _avg?: ModelsAvgAggregateInputType
    _sum?: ModelsSumAggregateInputType
    _min?: ModelsMinAggregateInputType
    _max?: ModelsMaxAggregateInputType
  }

  export type ModelsGroupByOutputType = {
    id: number
    modelName: string
    instructions: string
    trainingData: string
    createdAt: Date
    _count: ModelsCountAggregateOutputType | null
    _avg: ModelsAvgAggregateOutputType | null
    _sum: ModelsSumAggregateOutputType | null
    _min: ModelsMinAggregateOutputType | null
    _max: ModelsMaxAggregateOutputType | null
  }

  type GetModelsGroupByPayload<T extends modelsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModelsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModelsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModelsGroupByOutputType[P]>
            : GetScalarType<T[P], ModelsGroupByOutputType[P]>
        }
      >
    >


  export type modelsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelName?: boolean
    instructions?: boolean
    trainingData?: boolean
    createdAt?: boolean
    campaigns?: boolean | models$campaignsArgs<ExtArgs>
    _count?: boolean | ModelsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["models"]>



  export type modelsSelectScalar = {
    id?: boolean
    modelName?: boolean
    instructions?: boolean
    trainingData?: boolean
    createdAt?: boolean
  }

  export type modelsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "modelName" | "instructions" | "trainingData" | "createdAt", ExtArgs["result"]["models"]>
  export type modelsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | models$campaignsArgs<ExtArgs>
    _count?: boolean | ModelsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $modelsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "models"
    objects: {
      campaigns: Prisma.$campaignsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      modelName: string
      instructions: string
      trainingData: string
      createdAt: Date
    }, ExtArgs["result"]["models"]>
    composites: {}
  }

  type modelsGetPayload<S extends boolean | null | undefined | modelsDefaultArgs> = $Result.GetResult<Prisma.$modelsPayload, S>

  type modelsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<modelsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModelsCountAggregateInputType | true
    }

  export interface modelsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['models'], meta: { name: 'models' } }
    /**
     * Find zero or one Models that matches the filter.
     * @param {modelsFindUniqueArgs} args - Arguments to find a Models
     * @example
     * // Get one Models
     * const models = await prisma.models.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends modelsFindUniqueArgs>(args: SelectSubset<T, modelsFindUniqueArgs<ExtArgs>>): Prisma__modelsClient<$Result.GetResult<Prisma.$modelsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Models that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {modelsFindUniqueOrThrowArgs} args - Arguments to find a Models
     * @example
     * // Get one Models
     * const models = await prisma.models.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends modelsFindUniqueOrThrowArgs>(args: SelectSubset<T, modelsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__modelsClient<$Result.GetResult<Prisma.$modelsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Models that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modelsFindFirstArgs} args - Arguments to find a Models
     * @example
     * // Get one Models
     * const models = await prisma.models.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends modelsFindFirstArgs>(args?: SelectSubset<T, modelsFindFirstArgs<ExtArgs>>): Prisma__modelsClient<$Result.GetResult<Prisma.$modelsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Models that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modelsFindFirstOrThrowArgs} args - Arguments to find a Models
     * @example
     * // Get one Models
     * const models = await prisma.models.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends modelsFindFirstOrThrowArgs>(args?: SelectSubset<T, modelsFindFirstOrThrowArgs<ExtArgs>>): Prisma__modelsClient<$Result.GetResult<Prisma.$modelsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Models that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modelsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Models
     * const models = await prisma.models.findMany()
     * 
     * // Get first 10 Models
     * const models = await prisma.models.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modelsWithIdOnly = await prisma.models.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends modelsFindManyArgs>(args?: SelectSubset<T, modelsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$modelsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Models.
     * @param {modelsCreateArgs} args - Arguments to create a Models.
     * @example
     * // Create one Models
     * const Models = await prisma.models.create({
     *   data: {
     *     // ... data to create a Models
     *   }
     * })
     * 
     */
    create<T extends modelsCreateArgs>(args: SelectSubset<T, modelsCreateArgs<ExtArgs>>): Prisma__modelsClient<$Result.GetResult<Prisma.$modelsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Models.
     * @param {modelsCreateManyArgs} args - Arguments to create many Models.
     * @example
     * // Create many Models
     * const models = await prisma.models.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends modelsCreateManyArgs>(args?: SelectSubset<T, modelsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Models.
     * @param {modelsDeleteArgs} args - Arguments to delete one Models.
     * @example
     * // Delete one Models
     * const Models = await prisma.models.delete({
     *   where: {
     *     // ... filter to delete one Models
     *   }
     * })
     * 
     */
    delete<T extends modelsDeleteArgs>(args: SelectSubset<T, modelsDeleteArgs<ExtArgs>>): Prisma__modelsClient<$Result.GetResult<Prisma.$modelsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Models.
     * @param {modelsUpdateArgs} args - Arguments to update one Models.
     * @example
     * // Update one Models
     * const models = await prisma.models.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends modelsUpdateArgs>(args: SelectSubset<T, modelsUpdateArgs<ExtArgs>>): Prisma__modelsClient<$Result.GetResult<Prisma.$modelsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Models.
     * @param {modelsDeleteManyArgs} args - Arguments to filter Models to delete.
     * @example
     * // Delete a few Models
     * const { count } = await prisma.models.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends modelsDeleteManyArgs>(args?: SelectSubset<T, modelsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modelsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Models
     * const models = await prisma.models.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends modelsUpdateManyArgs>(args: SelectSubset<T, modelsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Models.
     * @param {modelsUpsertArgs} args - Arguments to update or create a Models.
     * @example
     * // Update or create a Models
     * const models = await prisma.models.upsert({
     *   create: {
     *     // ... data to create a Models
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Models we want to update
     *   }
     * })
     */
    upsert<T extends modelsUpsertArgs>(args: SelectSubset<T, modelsUpsertArgs<ExtArgs>>): Prisma__modelsClient<$Result.GetResult<Prisma.$modelsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modelsCountArgs} args - Arguments to filter Models to count.
     * @example
     * // Count the number of Models
     * const count = await prisma.models.count({
     *   where: {
     *     // ... the filter for the Models we want to count
     *   }
     * })
    **/
    count<T extends modelsCountArgs>(
      args?: Subset<T, modelsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModelsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModelsAggregateArgs>(args: Subset<T, ModelsAggregateArgs>): Prisma.PrismaPromise<GetModelsAggregateType<T>>

    /**
     * Group by Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modelsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends modelsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: modelsGroupByArgs['orderBy'] }
        : { orderBy?: modelsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, modelsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModelsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the models model
   */
  readonly fields: modelsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for models.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__modelsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaigns<T extends models$campaignsArgs<ExtArgs> = {}>(args?: Subset<T, models$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the models model
   */
  interface modelsFieldRefs {
    readonly id: FieldRef<"models", 'Int'>
    readonly modelName: FieldRef<"models", 'String'>
    readonly instructions: FieldRef<"models", 'String'>
    readonly trainingData: FieldRef<"models", 'String'>
    readonly createdAt: FieldRef<"models", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * models findUnique
   */
  export type modelsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the models
     */
    select?: modelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the models
     */
    omit?: modelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modelsInclude<ExtArgs> | null
    /**
     * Filter, which models to fetch.
     */
    where: modelsWhereUniqueInput
  }

  /**
   * models findUniqueOrThrow
   */
  export type modelsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the models
     */
    select?: modelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the models
     */
    omit?: modelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modelsInclude<ExtArgs> | null
    /**
     * Filter, which models to fetch.
     */
    where: modelsWhereUniqueInput
  }

  /**
   * models findFirst
   */
  export type modelsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the models
     */
    select?: modelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the models
     */
    omit?: modelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modelsInclude<ExtArgs> | null
    /**
     * Filter, which models to fetch.
     */
    where?: modelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of models to fetch.
     */
    orderBy?: modelsOrderByWithRelationInput | modelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for models.
     */
    cursor?: modelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of models.
     */
    distinct?: ModelsScalarFieldEnum | ModelsScalarFieldEnum[]
  }

  /**
   * models findFirstOrThrow
   */
  export type modelsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the models
     */
    select?: modelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the models
     */
    omit?: modelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modelsInclude<ExtArgs> | null
    /**
     * Filter, which models to fetch.
     */
    where?: modelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of models to fetch.
     */
    orderBy?: modelsOrderByWithRelationInput | modelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for models.
     */
    cursor?: modelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of models.
     */
    distinct?: ModelsScalarFieldEnum | ModelsScalarFieldEnum[]
  }

  /**
   * models findMany
   */
  export type modelsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the models
     */
    select?: modelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the models
     */
    omit?: modelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modelsInclude<ExtArgs> | null
    /**
     * Filter, which models to fetch.
     */
    where?: modelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of models to fetch.
     */
    orderBy?: modelsOrderByWithRelationInput | modelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing models.
     */
    cursor?: modelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` models.
     */
    skip?: number
    distinct?: ModelsScalarFieldEnum | ModelsScalarFieldEnum[]
  }

  /**
   * models create
   */
  export type modelsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the models
     */
    select?: modelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the models
     */
    omit?: modelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modelsInclude<ExtArgs> | null
    /**
     * The data needed to create a models.
     */
    data: XOR<modelsCreateInput, modelsUncheckedCreateInput>
  }

  /**
   * models createMany
   */
  export type modelsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many models.
     */
    data: modelsCreateManyInput | modelsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * models update
   */
  export type modelsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the models
     */
    select?: modelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the models
     */
    omit?: modelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modelsInclude<ExtArgs> | null
    /**
     * The data needed to update a models.
     */
    data: XOR<modelsUpdateInput, modelsUncheckedUpdateInput>
    /**
     * Choose, which models to update.
     */
    where: modelsWhereUniqueInput
  }

  /**
   * models updateMany
   */
  export type modelsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update models.
     */
    data: XOR<modelsUpdateManyMutationInput, modelsUncheckedUpdateManyInput>
    /**
     * Filter which models to update
     */
    where?: modelsWhereInput
    /**
     * Limit how many models to update.
     */
    limit?: number
  }

  /**
   * models upsert
   */
  export type modelsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the models
     */
    select?: modelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the models
     */
    omit?: modelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modelsInclude<ExtArgs> | null
    /**
     * The filter to search for the models to update in case it exists.
     */
    where: modelsWhereUniqueInput
    /**
     * In case the models found by the `where` argument doesn't exist, create a new models with this data.
     */
    create: XOR<modelsCreateInput, modelsUncheckedCreateInput>
    /**
     * In case the models was found with the provided `where` argument, update it with this data.
     */
    update: XOR<modelsUpdateInput, modelsUncheckedUpdateInput>
  }

  /**
   * models delete
   */
  export type modelsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the models
     */
    select?: modelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the models
     */
    omit?: modelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modelsInclude<ExtArgs> | null
    /**
     * Filter which models to delete.
     */
    where: modelsWhereUniqueInput
  }

  /**
   * models deleteMany
   */
  export type modelsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which models to delete
     */
    where?: modelsWhereInput
    /**
     * Limit how many models to delete.
     */
    limit?: number
  }

  /**
   * models.campaigns
   */
  export type models$campaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaigns
     */
    select?: campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaigns
     */
    omit?: campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaignsInclude<ExtArgs> | null
    where?: campaignsWhereInput
    orderBy?: campaignsOrderByWithRelationInput | campaignsOrderByWithRelationInput[]
    cursor?: campaignsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignsScalarFieldEnum | CampaignsScalarFieldEnum[]
  }

  /**
   * models without action
   */
  export type modelsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the models
     */
    select?: modelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the models
     */
    omit?: modelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modelsInclude<ExtArgs> | null
  }


  /**
   * Model leads
   */

  export type AggregateLeads = {
    _count: LeadsCountAggregateOutputType | null
    _avg: LeadsAvgAggregateOutputType | null
    _sum: LeadsSumAggregateOutputType | null
    _min: LeadsMinAggregateOutputType | null
    _max: LeadsMaxAggregateOutputType | null
  }

  export type LeadsAvgAggregateOutputType = {
    id: number | null
    campaignId: number | null
  }

  export type LeadsSumAggregateOutputType = {
    id: number | null
    campaignId: number | null
  }

  export type LeadsMinAggregateOutputType = {
    id: number | null
    campaignId: number | null
    createdAt: Date | null
    email: string | null
    name: string | null
    businessName: string | null
    contactName: string | null
    contactPhone: string | null
  }

  export type LeadsMaxAggregateOutputType = {
    id: number | null
    campaignId: number | null
    createdAt: Date | null
    email: string | null
    name: string | null
    businessName: string | null
    contactName: string | null
    contactPhone: string | null
  }

  export type LeadsCountAggregateOutputType = {
    id: number
    campaignId: number
    createdAt: number
    email: number
    name: number
    businessName: number
    contactName: number
    contactPhone: number
    _all: number
  }


  export type LeadsAvgAggregateInputType = {
    id?: true
    campaignId?: true
  }

  export type LeadsSumAggregateInputType = {
    id?: true
    campaignId?: true
  }

  export type LeadsMinAggregateInputType = {
    id?: true
    campaignId?: true
    createdAt?: true
    email?: true
    name?: true
    businessName?: true
    contactName?: true
    contactPhone?: true
  }

  export type LeadsMaxAggregateInputType = {
    id?: true
    campaignId?: true
    createdAt?: true
    email?: true
    name?: true
    businessName?: true
    contactName?: true
    contactPhone?: true
  }

  export type LeadsCountAggregateInputType = {
    id?: true
    campaignId?: true
    createdAt?: true
    email?: true
    name?: true
    businessName?: true
    contactName?: true
    contactPhone?: true
    _all?: true
  }

  export type LeadsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leads to aggregate.
     */
    where?: leadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leads to fetch.
     */
    orderBy?: leadsOrderByWithRelationInput | leadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: leadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned leads
    **/
    _count?: true | LeadsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeadsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeadsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadsMaxAggregateInputType
  }

  export type GetLeadsAggregateType<T extends LeadsAggregateArgs> = {
        [P in keyof T & keyof AggregateLeads]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeads[P]>
      : GetScalarType<T[P], AggregateLeads[P]>
  }




  export type leadsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leadsWhereInput
    orderBy?: leadsOrderByWithAggregationInput | leadsOrderByWithAggregationInput[]
    by: LeadsScalarFieldEnum[] | LeadsScalarFieldEnum
    having?: leadsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadsCountAggregateInputType | true
    _avg?: LeadsAvgAggregateInputType
    _sum?: LeadsSumAggregateInputType
    _min?: LeadsMinAggregateInputType
    _max?: LeadsMaxAggregateInputType
  }

  export type LeadsGroupByOutputType = {
    id: number
    campaignId: number
    createdAt: Date
    email: string
    name: string
    businessName: string
    contactName: string
    contactPhone: string
    _count: LeadsCountAggregateOutputType | null
    _avg: LeadsAvgAggregateOutputType | null
    _sum: LeadsSumAggregateOutputType | null
    _min: LeadsMinAggregateOutputType | null
    _max: LeadsMaxAggregateOutputType | null
  }

  type GetLeadsGroupByPayload<T extends leadsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadsGroupByOutputType[P]>
            : GetScalarType<T[P], LeadsGroupByOutputType[P]>
        }
      >
    >


  export type leadsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    createdAt?: boolean
    email?: boolean
    name?: boolean
    businessName?: boolean
    contactName?: boolean
    contactPhone?: boolean
    campaigns?: boolean | campaignsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leads"]>



  export type leadsSelectScalar = {
    id?: boolean
    campaignId?: boolean
    createdAt?: boolean
    email?: boolean
    name?: boolean
    businessName?: boolean
    contactName?: boolean
    contactPhone?: boolean
  }

  export type leadsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "campaignId" | "createdAt" | "email" | "name" | "businessName" | "contactName" | "contactPhone", ExtArgs["result"]["leads"]>
  export type leadsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | campaignsDefaultArgs<ExtArgs>
  }

  export type $leadsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "leads"
    objects: {
      campaigns: Prisma.$campaignsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      campaignId: number
      createdAt: Date
      email: string
      name: string
      businessName: string
      contactName: string
      contactPhone: string
    }, ExtArgs["result"]["leads"]>
    composites: {}
  }

  type leadsGetPayload<S extends boolean | null | undefined | leadsDefaultArgs> = $Result.GetResult<Prisma.$leadsPayload, S>

  type leadsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<leadsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeadsCountAggregateInputType | true
    }

  export interface leadsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['leads'], meta: { name: 'leads' } }
    /**
     * Find zero or one Leads that matches the filter.
     * @param {leadsFindUniqueArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends leadsFindUniqueArgs>(args: SelectSubset<T, leadsFindUniqueArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Leads that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {leadsFindUniqueOrThrowArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends leadsFindUniqueOrThrowArgs>(args: SelectSubset<T, leadsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsFindFirstArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends leadsFindFirstArgs>(args?: SelectSubset<T, leadsFindFirstArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leads that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsFindFirstOrThrowArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends leadsFindFirstOrThrowArgs>(args?: SelectSubset<T, leadsFindFirstOrThrowArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leads
     * const leads = await prisma.leads.findMany()
     * 
     * // Get first 10 Leads
     * const leads = await prisma.leads.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadsWithIdOnly = await prisma.leads.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends leadsFindManyArgs>(args?: SelectSubset<T, leadsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Leads.
     * @param {leadsCreateArgs} args - Arguments to create a Leads.
     * @example
     * // Create one Leads
     * const Leads = await prisma.leads.create({
     *   data: {
     *     // ... data to create a Leads
     *   }
     * })
     * 
     */
    create<T extends leadsCreateArgs>(args: SelectSubset<T, leadsCreateArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leads.
     * @param {leadsCreateManyArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const leads = await prisma.leads.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends leadsCreateManyArgs>(args?: SelectSubset<T, leadsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Leads.
     * @param {leadsDeleteArgs} args - Arguments to delete one Leads.
     * @example
     * // Delete one Leads
     * const Leads = await prisma.leads.delete({
     *   where: {
     *     // ... filter to delete one Leads
     *   }
     * })
     * 
     */
    delete<T extends leadsDeleteArgs>(args: SelectSubset<T, leadsDeleteArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Leads.
     * @param {leadsUpdateArgs} args - Arguments to update one Leads.
     * @example
     * // Update one Leads
     * const leads = await prisma.leads.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends leadsUpdateArgs>(args: SelectSubset<T, leadsUpdateArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leads.
     * @param {leadsDeleteManyArgs} args - Arguments to filter Leads to delete.
     * @example
     * // Delete a few Leads
     * const { count } = await prisma.leads.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends leadsDeleteManyArgs>(args?: SelectSubset<T, leadsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leads
     * const leads = await prisma.leads.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends leadsUpdateManyArgs>(args: SelectSubset<T, leadsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Leads.
     * @param {leadsUpsertArgs} args - Arguments to update or create a Leads.
     * @example
     * // Update or create a Leads
     * const leads = await prisma.leads.upsert({
     *   create: {
     *     // ... data to create a Leads
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leads we want to update
     *   }
     * })
     */
    upsert<T extends leadsUpsertArgs>(args: SelectSubset<T, leadsUpsertArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsCountArgs} args - Arguments to filter Leads to count.
     * @example
     * // Count the number of Leads
     * const count = await prisma.leads.count({
     *   where: {
     *     // ... the filter for the Leads we want to count
     *   }
     * })
    **/
    count<T extends leadsCountArgs>(
      args?: Subset<T, leadsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeadsAggregateArgs>(args: Subset<T, LeadsAggregateArgs>): Prisma.PrismaPromise<GetLeadsAggregateType<T>>

    /**
     * Group by Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends leadsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: leadsGroupByArgs['orderBy'] }
        : { orderBy?: leadsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, leadsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the leads model
   */
  readonly fields: leadsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for leads.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__leadsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaigns<T extends campaignsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, campaignsDefaultArgs<ExtArgs>>): Prisma__campaignsClient<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the leads model
   */
  interface leadsFieldRefs {
    readonly id: FieldRef<"leads", 'Int'>
    readonly campaignId: FieldRef<"leads", 'Int'>
    readonly createdAt: FieldRef<"leads", 'DateTime'>
    readonly email: FieldRef<"leads", 'String'>
    readonly name: FieldRef<"leads", 'String'>
    readonly businessName: FieldRef<"leads", 'String'>
    readonly contactName: FieldRef<"leads", 'String'>
    readonly contactPhone: FieldRef<"leads", 'String'>
  }
    

  // Custom InputTypes
  /**
   * leads findUnique
   */
  export type leadsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leadsInclude<ExtArgs> | null
    /**
     * Filter, which leads to fetch.
     */
    where: leadsWhereUniqueInput
  }

  /**
   * leads findUniqueOrThrow
   */
  export type leadsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leadsInclude<ExtArgs> | null
    /**
     * Filter, which leads to fetch.
     */
    where: leadsWhereUniqueInput
  }

  /**
   * leads findFirst
   */
  export type leadsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leadsInclude<ExtArgs> | null
    /**
     * Filter, which leads to fetch.
     */
    where?: leadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leads to fetch.
     */
    orderBy?: leadsOrderByWithRelationInput | leadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for leads.
     */
    cursor?: leadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of leads.
     */
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[]
  }

  /**
   * leads findFirstOrThrow
   */
  export type leadsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leadsInclude<ExtArgs> | null
    /**
     * Filter, which leads to fetch.
     */
    where?: leadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leads to fetch.
     */
    orderBy?: leadsOrderByWithRelationInput | leadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for leads.
     */
    cursor?: leadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of leads.
     */
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[]
  }

  /**
   * leads findMany
   */
  export type leadsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leadsInclude<ExtArgs> | null
    /**
     * Filter, which leads to fetch.
     */
    where?: leadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leads to fetch.
     */
    orderBy?: leadsOrderByWithRelationInput | leadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing leads.
     */
    cursor?: leadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leads.
     */
    skip?: number
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[]
  }

  /**
   * leads create
   */
  export type leadsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leadsInclude<ExtArgs> | null
    /**
     * The data needed to create a leads.
     */
    data: XOR<leadsCreateInput, leadsUncheckedCreateInput>
  }

  /**
   * leads createMany
   */
  export type leadsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many leads.
     */
    data: leadsCreateManyInput | leadsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * leads update
   */
  export type leadsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leadsInclude<ExtArgs> | null
    /**
     * The data needed to update a leads.
     */
    data: XOR<leadsUpdateInput, leadsUncheckedUpdateInput>
    /**
     * Choose, which leads to update.
     */
    where: leadsWhereUniqueInput
  }

  /**
   * leads updateMany
   */
  export type leadsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update leads.
     */
    data: XOR<leadsUpdateManyMutationInput, leadsUncheckedUpdateManyInput>
    /**
     * Filter which leads to update
     */
    where?: leadsWhereInput
    /**
     * Limit how many leads to update.
     */
    limit?: number
  }

  /**
   * leads upsert
   */
  export type leadsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leadsInclude<ExtArgs> | null
    /**
     * The filter to search for the leads to update in case it exists.
     */
    where: leadsWhereUniqueInput
    /**
     * In case the leads found by the `where` argument doesn't exist, create a new leads with this data.
     */
    create: XOR<leadsCreateInput, leadsUncheckedCreateInput>
    /**
     * In case the leads was found with the provided `where` argument, update it with this data.
     */
    update: XOR<leadsUpdateInput, leadsUncheckedUpdateInput>
  }

  /**
   * leads delete
   */
  export type leadsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leadsInclude<ExtArgs> | null
    /**
     * Filter which leads to delete.
     */
    where: leadsWhereUniqueInput
  }

  /**
   * leads deleteMany
   */
  export type leadsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leads to delete
     */
    where?: leadsWhereInput
    /**
     * Limit how many leads to delete.
     */
    limit?: number
  }

  /**
   * leads without action
   */
  export type leadsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leadsInclude<ExtArgs> | null
  }


  /**
   * Model refreshtoken
   */

  export type AggregateRefreshtoken = {
    _count: RefreshtokenCountAggregateOutputType | null
    _min: RefreshtokenMinAggregateOutputType | null
    _max: RefreshtokenMaxAggregateOutputType | null
  }

  export type RefreshtokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type RefreshtokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type RefreshtokenCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type RefreshtokenMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type RefreshtokenMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type RefreshtokenCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type RefreshtokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which refreshtoken to aggregate.
     */
    where?: refreshtokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refreshtokens to fetch.
     */
    orderBy?: refreshtokenOrderByWithRelationInput | refreshtokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: refreshtokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refreshtokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refreshtokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned refreshtokens
    **/
    _count?: true | RefreshtokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshtokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshtokenMaxAggregateInputType
  }

  export type GetRefreshtokenAggregateType<T extends RefreshtokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshtoken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshtoken[P]>
      : GetScalarType<T[P], AggregateRefreshtoken[P]>
  }




  export type refreshtokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: refreshtokenWhereInput
    orderBy?: refreshtokenOrderByWithAggregationInput | refreshtokenOrderByWithAggregationInput[]
    by: RefreshtokenScalarFieldEnum[] | RefreshtokenScalarFieldEnum
    having?: refreshtokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshtokenCountAggregateInputType | true
    _min?: RefreshtokenMinAggregateInputType
    _max?: RefreshtokenMaxAggregateInputType
  }

  export type RefreshtokenGroupByOutputType = {
    id: string
    token: string
    userId: string
    expiresAt: Date
    createdAt: Date
    _count: RefreshtokenCountAggregateOutputType | null
    _min: RefreshtokenMinAggregateOutputType | null
    _max: RefreshtokenMaxAggregateOutputType | null
  }

  type GetRefreshtokenGroupByPayload<T extends refreshtokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshtokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshtokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshtokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshtokenGroupByOutputType[P]>
        }
      >
    >


  export type refreshtokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshtoken"]>



  export type refreshtokenSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type refreshtokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "userId" | "expiresAt" | "createdAt", ExtArgs["result"]["refreshtoken"]>
  export type refreshtokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $refreshtokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "refreshtoken"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      userId: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["refreshtoken"]>
    composites: {}
  }

  type refreshtokenGetPayload<S extends boolean | null | undefined | refreshtokenDefaultArgs> = $Result.GetResult<Prisma.$refreshtokenPayload, S>

  type refreshtokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<refreshtokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshtokenCountAggregateInputType | true
    }

  export interface refreshtokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['refreshtoken'], meta: { name: 'refreshtoken' } }
    /**
     * Find zero or one Refreshtoken that matches the filter.
     * @param {refreshtokenFindUniqueArgs} args - Arguments to find a Refreshtoken
     * @example
     * // Get one Refreshtoken
     * const refreshtoken = await prisma.refreshtoken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends refreshtokenFindUniqueArgs>(args: SelectSubset<T, refreshtokenFindUniqueArgs<ExtArgs>>): Prisma__refreshtokenClient<$Result.GetResult<Prisma.$refreshtokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Refreshtoken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {refreshtokenFindUniqueOrThrowArgs} args - Arguments to find a Refreshtoken
     * @example
     * // Get one Refreshtoken
     * const refreshtoken = await prisma.refreshtoken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends refreshtokenFindUniqueOrThrowArgs>(args: SelectSubset<T, refreshtokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__refreshtokenClient<$Result.GetResult<Prisma.$refreshtokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Refreshtoken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refreshtokenFindFirstArgs} args - Arguments to find a Refreshtoken
     * @example
     * // Get one Refreshtoken
     * const refreshtoken = await prisma.refreshtoken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends refreshtokenFindFirstArgs>(args?: SelectSubset<T, refreshtokenFindFirstArgs<ExtArgs>>): Prisma__refreshtokenClient<$Result.GetResult<Prisma.$refreshtokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Refreshtoken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refreshtokenFindFirstOrThrowArgs} args - Arguments to find a Refreshtoken
     * @example
     * // Get one Refreshtoken
     * const refreshtoken = await prisma.refreshtoken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends refreshtokenFindFirstOrThrowArgs>(args?: SelectSubset<T, refreshtokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__refreshtokenClient<$Result.GetResult<Prisma.$refreshtokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Refreshtokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refreshtokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Refreshtokens
     * const refreshtokens = await prisma.refreshtoken.findMany()
     * 
     * // Get first 10 Refreshtokens
     * const refreshtokens = await prisma.refreshtoken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshtokenWithIdOnly = await prisma.refreshtoken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends refreshtokenFindManyArgs>(args?: SelectSubset<T, refreshtokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$refreshtokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Refreshtoken.
     * @param {refreshtokenCreateArgs} args - Arguments to create a Refreshtoken.
     * @example
     * // Create one Refreshtoken
     * const Refreshtoken = await prisma.refreshtoken.create({
     *   data: {
     *     // ... data to create a Refreshtoken
     *   }
     * })
     * 
     */
    create<T extends refreshtokenCreateArgs>(args: SelectSubset<T, refreshtokenCreateArgs<ExtArgs>>): Prisma__refreshtokenClient<$Result.GetResult<Prisma.$refreshtokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Refreshtokens.
     * @param {refreshtokenCreateManyArgs} args - Arguments to create many Refreshtokens.
     * @example
     * // Create many Refreshtokens
     * const refreshtoken = await prisma.refreshtoken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends refreshtokenCreateManyArgs>(args?: SelectSubset<T, refreshtokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Refreshtoken.
     * @param {refreshtokenDeleteArgs} args - Arguments to delete one Refreshtoken.
     * @example
     * // Delete one Refreshtoken
     * const Refreshtoken = await prisma.refreshtoken.delete({
     *   where: {
     *     // ... filter to delete one Refreshtoken
     *   }
     * })
     * 
     */
    delete<T extends refreshtokenDeleteArgs>(args: SelectSubset<T, refreshtokenDeleteArgs<ExtArgs>>): Prisma__refreshtokenClient<$Result.GetResult<Prisma.$refreshtokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Refreshtoken.
     * @param {refreshtokenUpdateArgs} args - Arguments to update one Refreshtoken.
     * @example
     * // Update one Refreshtoken
     * const refreshtoken = await prisma.refreshtoken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends refreshtokenUpdateArgs>(args: SelectSubset<T, refreshtokenUpdateArgs<ExtArgs>>): Prisma__refreshtokenClient<$Result.GetResult<Prisma.$refreshtokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Refreshtokens.
     * @param {refreshtokenDeleteManyArgs} args - Arguments to filter Refreshtokens to delete.
     * @example
     * // Delete a few Refreshtokens
     * const { count } = await prisma.refreshtoken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends refreshtokenDeleteManyArgs>(args?: SelectSubset<T, refreshtokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Refreshtokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refreshtokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Refreshtokens
     * const refreshtoken = await prisma.refreshtoken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends refreshtokenUpdateManyArgs>(args: SelectSubset<T, refreshtokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Refreshtoken.
     * @param {refreshtokenUpsertArgs} args - Arguments to update or create a Refreshtoken.
     * @example
     * // Update or create a Refreshtoken
     * const refreshtoken = await prisma.refreshtoken.upsert({
     *   create: {
     *     // ... data to create a Refreshtoken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Refreshtoken we want to update
     *   }
     * })
     */
    upsert<T extends refreshtokenUpsertArgs>(args: SelectSubset<T, refreshtokenUpsertArgs<ExtArgs>>): Prisma__refreshtokenClient<$Result.GetResult<Prisma.$refreshtokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Refreshtokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refreshtokenCountArgs} args - Arguments to filter Refreshtokens to count.
     * @example
     * // Count the number of Refreshtokens
     * const count = await prisma.refreshtoken.count({
     *   where: {
     *     // ... the filter for the Refreshtokens we want to count
     *   }
     * })
    **/
    count<T extends refreshtokenCountArgs>(
      args?: Subset<T, refreshtokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshtokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Refreshtoken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshtokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefreshtokenAggregateArgs>(args: Subset<T, RefreshtokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshtokenAggregateType<T>>

    /**
     * Group by Refreshtoken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refreshtokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends refreshtokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: refreshtokenGroupByArgs['orderBy'] }
        : { orderBy?: refreshtokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, refreshtokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshtokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the refreshtoken model
   */
  readonly fields: refreshtokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for refreshtoken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__refreshtokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the refreshtoken model
   */
  interface refreshtokenFieldRefs {
    readonly id: FieldRef<"refreshtoken", 'String'>
    readonly token: FieldRef<"refreshtoken", 'String'>
    readonly userId: FieldRef<"refreshtoken", 'String'>
    readonly expiresAt: FieldRef<"refreshtoken", 'DateTime'>
    readonly createdAt: FieldRef<"refreshtoken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * refreshtoken findUnique
   */
  export type refreshtokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refreshtoken
     */
    select?: refreshtokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refreshtoken
     */
    omit?: refreshtokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refreshtokenInclude<ExtArgs> | null
    /**
     * Filter, which refreshtoken to fetch.
     */
    where: refreshtokenWhereUniqueInput
  }

  /**
   * refreshtoken findUniqueOrThrow
   */
  export type refreshtokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refreshtoken
     */
    select?: refreshtokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refreshtoken
     */
    omit?: refreshtokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refreshtokenInclude<ExtArgs> | null
    /**
     * Filter, which refreshtoken to fetch.
     */
    where: refreshtokenWhereUniqueInput
  }

  /**
   * refreshtoken findFirst
   */
  export type refreshtokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refreshtoken
     */
    select?: refreshtokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refreshtoken
     */
    omit?: refreshtokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refreshtokenInclude<ExtArgs> | null
    /**
     * Filter, which refreshtoken to fetch.
     */
    where?: refreshtokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refreshtokens to fetch.
     */
    orderBy?: refreshtokenOrderByWithRelationInput | refreshtokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for refreshtokens.
     */
    cursor?: refreshtokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refreshtokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refreshtokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of refreshtokens.
     */
    distinct?: RefreshtokenScalarFieldEnum | RefreshtokenScalarFieldEnum[]
  }

  /**
   * refreshtoken findFirstOrThrow
   */
  export type refreshtokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refreshtoken
     */
    select?: refreshtokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refreshtoken
     */
    omit?: refreshtokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refreshtokenInclude<ExtArgs> | null
    /**
     * Filter, which refreshtoken to fetch.
     */
    where?: refreshtokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refreshtokens to fetch.
     */
    orderBy?: refreshtokenOrderByWithRelationInput | refreshtokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for refreshtokens.
     */
    cursor?: refreshtokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refreshtokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refreshtokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of refreshtokens.
     */
    distinct?: RefreshtokenScalarFieldEnum | RefreshtokenScalarFieldEnum[]
  }

  /**
   * refreshtoken findMany
   */
  export type refreshtokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refreshtoken
     */
    select?: refreshtokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refreshtoken
     */
    omit?: refreshtokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refreshtokenInclude<ExtArgs> | null
    /**
     * Filter, which refreshtokens to fetch.
     */
    where?: refreshtokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refreshtokens to fetch.
     */
    orderBy?: refreshtokenOrderByWithRelationInput | refreshtokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing refreshtokens.
     */
    cursor?: refreshtokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refreshtokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refreshtokens.
     */
    skip?: number
    distinct?: RefreshtokenScalarFieldEnum | RefreshtokenScalarFieldEnum[]
  }

  /**
   * refreshtoken create
   */
  export type refreshtokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refreshtoken
     */
    select?: refreshtokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refreshtoken
     */
    omit?: refreshtokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refreshtokenInclude<ExtArgs> | null
    /**
     * The data needed to create a refreshtoken.
     */
    data: XOR<refreshtokenCreateInput, refreshtokenUncheckedCreateInput>
  }

  /**
   * refreshtoken createMany
   */
  export type refreshtokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many refreshtokens.
     */
    data: refreshtokenCreateManyInput | refreshtokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * refreshtoken update
   */
  export type refreshtokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refreshtoken
     */
    select?: refreshtokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refreshtoken
     */
    omit?: refreshtokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refreshtokenInclude<ExtArgs> | null
    /**
     * The data needed to update a refreshtoken.
     */
    data: XOR<refreshtokenUpdateInput, refreshtokenUncheckedUpdateInput>
    /**
     * Choose, which refreshtoken to update.
     */
    where: refreshtokenWhereUniqueInput
  }

  /**
   * refreshtoken updateMany
   */
  export type refreshtokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update refreshtokens.
     */
    data: XOR<refreshtokenUpdateManyMutationInput, refreshtokenUncheckedUpdateManyInput>
    /**
     * Filter which refreshtokens to update
     */
    where?: refreshtokenWhereInput
    /**
     * Limit how many refreshtokens to update.
     */
    limit?: number
  }

  /**
   * refreshtoken upsert
   */
  export type refreshtokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refreshtoken
     */
    select?: refreshtokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refreshtoken
     */
    omit?: refreshtokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refreshtokenInclude<ExtArgs> | null
    /**
     * The filter to search for the refreshtoken to update in case it exists.
     */
    where: refreshtokenWhereUniqueInput
    /**
     * In case the refreshtoken found by the `where` argument doesn't exist, create a new refreshtoken with this data.
     */
    create: XOR<refreshtokenCreateInput, refreshtokenUncheckedCreateInput>
    /**
     * In case the refreshtoken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<refreshtokenUpdateInput, refreshtokenUncheckedUpdateInput>
  }

  /**
   * refreshtoken delete
   */
  export type refreshtokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refreshtoken
     */
    select?: refreshtokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refreshtoken
     */
    omit?: refreshtokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refreshtokenInclude<ExtArgs> | null
    /**
     * Filter which refreshtoken to delete.
     */
    where: refreshtokenWhereUniqueInput
  }

  /**
   * refreshtoken deleteMany
   */
  export type refreshtokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which refreshtokens to delete
     */
    where?: refreshtokenWhereInput
    /**
     * Limit how many refreshtokens to delete.
     */
    limit?: number
  }

  /**
   * refreshtoken without action
   */
  export type refreshtokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refreshtoken
     */
    select?: refreshtokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refreshtoken
     */
    omit?: refreshtokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refreshtokenInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    refreshtoken?: boolean | user$refreshtokenArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refreshtoken?: boolean | user$refreshtokenArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      refreshtoken: Prisma.$refreshtokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    refreshtoken<T extends user$refreshtokenArgs<ExtArgs> = {}>(args?: Subset<T, user$refreshtokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$refreshtokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.refreshtoken
   */
  export type user$refreshtokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refreshtoken
     */
    select?: refreshtokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refreshtoken
     */
    omit?: refreshtokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refreshtokenInclude<ExtArgs> | null
    where?: refreshtokenWhereInput
    orderBy?: refreshtokenOrderByWithRelationInput | refreshtokenOrderByWithRelationInput[]
    cursor?: refreshtokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshtokenScalarFieldEnum | RefreshtokenScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CallsScalarFieldEnum: {
    id: 'id',
    campaignId: 'campaignId',
    contactName: 'contactName',
    contactPhone: 'contactPhone',
    callStatus: 'callStatus',
    createdAt: 'createdAt',
    callSid: 'callSid',
    recordingsLink: 'recordingsLink',
    transcriptionsLink: 'transcriptionsLink',
    BussinessName: 'BussinessName',
    CallDuration: 'CallDuration',
    From: 'From'
  };

  export type CallsScalarFieldEnum = (typeof CallsScalarFieldEnum)[keyof typeof CallsScalarFieldEnum]


  export const CampaignsScalarFieldEnum: {
    id: 'id',
    contacts: 'contacts',
    modelId: 'modelId',
    campaignName: 'campaignName',
    campaignDescription: 'campaignDescription',
    callScript: 'callScript',
    status: 'status',
    lastContactIndex: 'lastContactIndex',
    createdAt: 'createdAt'
  };

  export type CampaignsScalarFieldEnum = (typeof CampaignsScalarFieldEnum)[keyof typeof CampaignsScalarFieldEnum]


  export const ModelsScalarFieldEnum: {
    id: 'id',
    modelName: 'modelName',
    instructions: 'instructions',
    trainingData: 'trainingData',
    createdAt: 'createdAt'
  };

  export type ModelsScalarFieldEnum = (typeof ModelsScalarFieldEnum)[keyof typeof ModelsScalarFieldEnum]


  export const LeadsScalarFieldEnum: {
    id: 'id',
    campaignId: 'campaignId',
    createdAt: 'createdAt',
    email: 'email',
    name: 'name',
    businessName: 'businessName',
    contactName: 'contactName',
    contactPhone: 'contactPhone'
  };

  export type LeadsScalarFieldEnum = (typeof LeadsScalarFieldEnum)[keyof typeof LeadsScalarFieldEnum]


  export const RefreshtokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type RefreshtokenScalarFieldEnum = (typeof RefreshtokenScalarFieldEnum)[keyof typeof RefreshtokenScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const callsOrderByRelevanceFieldEnum: {
    contactName: 'contactName',
    contactPhone: 'contactPhone',
    callStatus: 'callStatus',
    callSid: 'callSid',
    recordingsLink: 'recordingsLink',
    transcriptionsLink: 'transcriptionsLink',
    BussinessName: 'BussinessName',
    CallDuration: 'CallDuration',
    From: 'From'
  };

  export type callsOrderByRelevanceFieldEnum = (typeof callsOrderByRelevanceFieldEnum)[keyof typeof callsOrderByRelevanceFieldEnum]


  export const campaignsOrderByRelevanceFieldEnum: {
    contacts: 'contacts',
    campaignName: 'campaignName',
    campaignDescription: 'campaignDescription',
    callScript: 'callScript',
    status: 'status'
  };

  export type campaignsOrderByRelevanceFieldEnum = (typeof campaignsOrderByRelevanceFieldEnum)[keyof typeof campaignsOrderByRelevanceFieldEnum]


  export const modelsOrderByRelevanceFieldEnum: {
    modelName: 'modelName',
    instructions: 'instructions',
    trainingData: 'trainingData'
  };

  export type modelsOrderByRelevanceFieldEnum = (typeof modelsOrderByRelevanceFieldEnum)[keyof typeof modelsOrderByRelevanceFieldEnum]


  export const leadsOrderByRelevanceFieldEnum: {
    email: 'email',
    name: 'name',
    businessName: 'businessName',
    contactName: 'contactName',
    contactPhone: 'contactPhone'
  };

  export type leadsOrderByRelevanceFieldEnum = (typeof leadsOrderByRelevanceFieldEnum)[keyof typeof leadsOrderByRelevanceFieldEnum]


  export const refreshtokenOrderByRelevanceFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId'
  };

  export type refreshtokenOrderByRelevanceFieldEnum = (typeof refreshtokenOrderByRelevanceFieldEnum)[keyof typeof refreshtokenOrderByRelevanceFieldEnum]


  export const userOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type callsWhereInput = {
    AND?: callsWhereInput | callsWhereInput[]
    OR?: callsWhereInput[]
    NOT?: callsWhereInput | callsWhereInput[]
    id?: IntFilter<"calls"> | number
    campaignId?: IntFilter<"calls"> | number
    contactName?: StringFilter<"calls"> | string
    contactPhone?: StringFilter<"calls"> | string
    callStatus?: StringFilter<"calls"> | string
    createdAt?: DateTimeFilter<"calls"> | Date | string
    callSid?: StringFilter<"calls"> | string
    recordingsLink?: StringNullableFilter<"calls"> | string | null
    transcriptionsLink?: StringNullableFilter<"calls"> | string | null
    BussinessName?: StringFilter<"calls"> | string
    CallDuration?: StringFilter<"calls"> | string
    From?: StringFilter<"calls"> | string
    campaigns?: XOR<CampaignsScalarRelationFilter, campaignsWhereInput>
  }

  export type callsOrderByWithRelationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    contactName?: SortOrder
    contactPhone?: SortOrder
    callStatus?: SortOrder
    createdAt?: SortOrder
    callSid?: SortOrder
    recordingsLink?: SortOrderInput | SortOrder
    transcriptionsLink?: SortOrderInput | SortOrder
    BussinessName?: SortOrder
    CallDuration?: SortOrder
    From?: SortOrder
    campaigns?: campaignsOrderByWithRelationInput
    _relevance?: callsOrderByRelevanceInput
  }

  export type callsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    callSid?: string
    AND?: callsWhereInput | callsWhereInput[]
    OR?: callsWhereInput[]
    NOT?: callsWhereInput | callsWhereInput[]
    campaignId?: IntFilter<"calls"> | number
    contactName?: StringFilter<"calls"> | string
    contactPhone?: StringFilter<"calls"> | string
    callStatus?: StringFilter<"calls"> | string
    createdAt?: DateTimeFilter<"calls"> | Date | string
    recordingsLink?: StringNullableFilter<"calls"> | string | null
    transcriptionsLink?: StringNullableFilter<"calls"> | string | null
    BussinessName?: StringFilter<"calls"> | string
    CallDuration?: StringFilter<"calls"> | string
    From?: StringFilter<"calls"> | string
    campaigns?: XOR<CampaignsScalarRelationFilter, campaignsWhereInput>
  }, "id" | "callSid">

  export type callsOrderByWithAggregationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    contactName?: SortOrder
    contactPhone?: SortOrder
    callStatus?: SortOrder
    createdAt?: SortOrder
    callSid?: SortOrder
    recordingsLink?: SortOrderInput | SortOrder
    transcriptionsLink?: SortOrderInput | SortOrder
    BussinessName?: SortOrder
    CallDuration?: SortOrder
    From?: SortOrder
    _count?: callsCountOrderByAggregateInput
    _avg?: callsAvgOrderByAggregateInput
    _max?: callsMaxOrderByAggregateInput
    _min?: callsMinOrderByAggregateInput
    _sum?: callsSumOrderByAggregateInput
  }

  export type callsScalarWhereWithAggregatesInput = {
    AND?: callsScalarWhereWithAggregatesInput | callsScalarWhereWithAggregatesInput[]
    OR?: callsScalarWhereWithAggregatesInput[]
    NOT?: callsScalarWhereWithAggregatesInput | callsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"calls"> | number
    campaignId?: IntWithAggregatesFilter<"calls"> | number
    contactName?: StringWithAggregatesFilter<"calls"> | string
    contactPhone?: StringWithAggregatesFilter<"calls"> | string
    callStatus?: StringWithAggregatesFilter<"calls"> | string
    createdAt?: DateTimeWithAggregatesFilter<"calls"> | Date | string
    callSid?: StringWithAggregatesFilter<"calls"> | string
    recordingsLink?: StringNullableWithAggregatesFilter<"calls"> | string | null
    transcriptionsLink?: StringNullableWithAggregatesFilter<"calls"> | string | null
    BussinessName?: StringWithAggregatesFilter<"calls"> | string
    CallDuration?: StringWithAggregatesFilter<"calls"> | string
    From?: StringWithAggregatesFilter<"calls"> | string
  }

  export type campaignsWhereInput = {
    AND?: campaignsWhereInput | campaignsWhereInput[]
    OR?: campaignsWhereInput[]
    NOT?: campaignsWhereInput | campaignsWhereInput[]
    id?: IntFilter<"campaigns"> | number
    contacts?: StringFilter<"campaigns"> | string
    modelId?: IntFilter<"campaigns"> | number
    campaignName?: StringFilter<"campaigns"> | string
    campaignDescription?: StringFilter<"campaigns"> | string
    callScript?: StringFilter<"campaigns"> | string
    status?: StringFilter<"campaigns"> | string
    lastContactIndex?: IntFilter<"campaigns"> | number
    createdAt?: DateTimeFilter<"campaigns"> | Date | string
    calls?: CallsListRelationFilter
    models?: XOR<ModelsScalarRelationFilter, modelsWhereInput>
    leads?: LeadsListRelationFilter
  }

  export type campaignsOrderByWithRelationInput = {
    id?: SortOrder
    contacts?: SortOrder
    modelId?: SortOrder
    campaignName?: SortOrder
    campaignDescription?: SortOrder
    callScript?: SortOrder
    status?: SortOrder
    lastContactIndex?: SortOrder
    createdAt?: SortOrder
    calls?: callsOrderByRelationAggregateInput
    models?: modelsOrderByWithRelationInput
    leads?: leadsOrderByRelationAggregateInput
    _relevance?: campaignsOrderByRelevanceInput
  }

  export type campaignsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: campaignsWhereInput | campaignsWhereInput[]
    OR?: campaignsWhereInput[]
    NOT?: campaignsWhereInput | campaignsWhereInput[]
    contacts?: StringFilter<"campaigns"> | string
    modelId?: IntFilter<"campaigns"> | number
    campaignName?: StringFilter<"campaigns"> | string
    campaignDescription?: StringFilter<"campaigns"> | string
    callScript?: StringFilter<"campaigns"> | string
    status?: StringFilter<"campaigns"> | string
    lastContactIndex?: IntFilter<"campaigns"> | number
    createdAt?: DateTimeFilter<"campaigns"> | Date | string
    calls?: CallsListRelationFilter
    models?: XOR<ModelsScalarRelationFilter, modelsWhereInput>
    leads?: LeadsListRelationFilter
  }, "id">

  export type campaignsOrderByWithAggregationInput = {
    id?: SortOrder
    contacts?: SortOrder
    modelId?: SortOrder
    campaignName?: SortOrder
    campaignDescription?: SortOrder
    callScript?: SortOrder
    status?: SortOrder
    lastContactIndex?: SortOrder
    createdAt?: SortOrder
    _count?: campaignsCountOrderByAggregateInput
    _avg?: campaignsAvgOrderByAggregateInput
    _max?: campaignsMaxOrderByAggregateInput
    _min?: campaignsMinOrderByAggregateInput
    _sum?: campaignsSumOrderByAggregateInput
  }

  export type campaignsScalarWhereWithAggregatesInput = {
    AND?: campaignsScalarWhereWithAggregatesInput | campaignsScalarWhereWithAggregatesInput[]
    OR?: campaignsScalarWhereWithAggregatesInput[]
    NOT?: campaignsScalarWhereWithAggregatesInput | campaignsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"campaigns"> | number
    contacts?: StringWithAggregatesFilter<"campaigns"> | string
    modelId?: IntWithAggregatesFilter<"campaigns"> | number
    campaignName?: StringWithAggregatesFilter<"campaigns"> | string
    campaignDescription?: StringWithAggregatesFilter<"campaigns"> | string
    callScript?: StringWithAggregatesFilter<"campaigns"> | string
    status?: StringWithAggregatesFilter<"campaigns"> | string
    lastContactIndex?: IntWithAggregatesFilter<"campaigns"> | number
    createdAt?: DateTimeWithAggregatesFilter<"campaigns"> | Date | string
  }

  export type modelsWhereInput = {
    AND?: modelsWhereInput | modelsWhereInput[]
    OR?: modelsWhereInput[]
    NOT?: modelsWhereInput | modelsWhereInput[]
    id?: IntFilter<"models"> | number
    modelName?: StringFilter<"models"> | string
    instructions?: StringFilter<"models"> | string
    trainingData?: StringFilter<"models"> | string
    createdAt?: DateTimeFilter<"models"> | Date | string
    campaigns?: CampaignsListRelationFilter
  }

  export type modelsOrderByWithRelationInput = {
    id?: SortOrder
    modelName?: SortOrder
    instructions?: SortOrder
    trainingData?: SortOrder
    createdAt?: SortOrder
    campaigns?: campaignsOrderByRelationAggregateInput
    _relevance?: modelsOrderByRelevanceInput
  }

  export type modelsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: modelsWhereInput | modelsWhereInput[]
    OR?: modelsWhereInput[]
    NOT?: modelsWhereInput | modelsWhereInput[]
    modelName?: StringFilter<"models"> | string
    instructions?: StringFilter<"models"> | string
    trainingData?: StringFilter<"models"> | string
    createdAt?: DateTimeFilter<"models"> | Date | string
    campaigns?: CampaignsListRelationFilter
  }, "id">

  export type modelsOrderByWithAggregationInput = {
    id?: SortOrder
    modelName?: SortOrder
    instructions?: SortOrder
    trainingData?: SortOrder
    createdAt?: SortOrder
    _count?: modelsCountOrderByAggregateInput
    _avg?: modelsAvgOrderByAggregateInput
    _max?: modelsMaxOrderByAggregateInput
    _min?: modelsMinOrderByAggregateInput
    _sum?: modelsSumOrderByAggregateInput
  }

  export type modelsScalarWhereWithAggregatesInput = {
    AND?: modelsScalarWhereWithAggregatesInput | modelsScalarWhereWithAggregatesInput[]
    OR?: modelsScalarWhereWithAggregatesInput[]
    NOT?: modelsScalarWhereWithAggregatesInput | modelsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"models"> | number
    modelName?: StringWithAggregatesFilter<"models"> | string
    instructions?: StringWithAggregatesFilter<"models"> | string
    trainingData?: StringWithAggregatesFilter<"models"> | string
    createdAt?: DateTimeWithAggregatesFilter<"models"> | Date | string
  }

  export type leadsWhereInput = {
    AND?: leadsWhereInput | leadsWhereInput[]
    OR?: leadsWhereInput[]
    NOT?: leadsWhereInput | leadsWhereInput[]
    id?: IntFilter<"leads"> | number
    campaignId?: IntFilter<"leads"> | number
    createdAt?: DateTimeFilter<"leads"> | Date | string
    email?: StringFilter<"leads"> | string
    name?: StringFilter<"leads"> | string
    businessName?: StringFilter<"leads"> | string
    contactName?: StringFilter<"leads"> | string
    contactPhone?: StringFilter<"leads"> | string
    campaigns?: XOR<CampaignsScalarRelationFilter, campaignsWhereInput>
  }

  export type leadsOrderByWithRelationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    businessName?: SortOrder
    contactName?: SortOrder
    contactPhone?: SortOrder
    campaigns?: campaignsOrderByWithRelationInput
    _relevance?: leadsOrderByRelevanceInput
  }

  export type leadsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: leadsWhereInput | leadsWhereInput[]
    OR?: leadsWhereInput[]
    NOT?: leadsWhereInput | leadsWhereInput[]
    campaignId?: IntFilter<"leads"> | number
    createdAt?: DateTimeFilter<"leads"> | Date | string
    email?: StringFilter<"leads"> | string
    name?: StringFilter<"leads"> | string
    businessName?: StringFilter<"leads"> | string
    contactName?: StringFilter<"leads"> | string
    contactPhone?: StringFilter<"leads"> | string
    campaigns?: XOR<CampaignsScalarRelationFilter, campaignsWhereInput>
  }, "id">

  export type leadsOrderByWithAggregationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    businessName?: SortOrder
    contactName?: SortOrder
    contactPhone?: SortOrder
    _count?: leadsCountOrderByAggregateInput
    _avg?: leadsAvgOrderByAggregateInput
    _max?: leadsMaxOrderByAggregateInput
    _min?: leadsMinOrderByAggregateInput
    _sum?: leadsSumOrderByAggregateInput
  }

  export type leadsScalarWhereWithAggregatesInput = {
    AND?: leadsScalarWhereWithAggregatesInput | leadsScalarWhereWithAggregatesInput[]
    OR?: leadsScalarWhereWithAggregatesInput[]
    NOT?: leadsScalarWhereWithAggregatesInput | leadsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"leads"> | number
    campaignId?: IntWithAggregatesFilter<"leads"> | number
    createdAt?: DateTimeWithAggregatesFilter<"leads"> | Date | string
    email?: StringWithAggregatesFilter<"leads"> | string
    name?: StringWithAggregatesFilter<"leads"> | string
    businessName?: StringWithAggregatesFilter<"leads"> | string
    contactName?: StringWithAggregatesFilter<"leads"> | string
    contactPhone?: StringWithAggregatesFilter<"leads"> | string
  }

  export type refreshtokenWhereInput = {
    AND?: refreshtokenWhereInput | refreshtokenWhereInput[]
    OR?: refreshtokenWhereInput[]
    NOT?: refreshtokenWhereInput | refreshtokenWhereInput[]
    id?: StringFilter<"refreshtoken"> | string
    token?: StringFilter<"refreshtoken"> | string
    userId?: StringFilter<"refreshtoken"> | string
    expiresAt?: DateTimeFilter<"refreshtoken"> | Date | string
    createdAt?: DateTimeFilter<"refreshtoken"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type refreshtokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: userOrderByWithRelationInput
    _relevance?: refreshtokenOrderByRelevanceInput
  }

  export type refreshtokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: refreshtokenWhereInput | refreshtokenWhereInput[]
    OR?: refreshtokenWhereInput[]
    NOT?: refreshtokenWhereInput | refreshtokenWhereInput[]
    userId?: StringFilter<"refreshtoken"> | string
    expiresAt?: DateTimeFilter<"refreshtoken"> | Date | string
    createdAt?: DateTimeFilter<"refreshtoken"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id" | "token">

  export type refreshtokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: refreshtokenCountOrderByAggregateInput
    _max?: refreshtokenMaxOrderByAggregateInput
    _min?: refreshtokenMinOrderByAggregateInput
  }

  export type refreshtokenScalarWhereWithAggregatesInput = {
    AND?: refreshtokenScalarWhereWithAggregatesInput | refreshtokenScalarWhereWithAggregatesInput[]
    OR?: refreshtokenScalarWhereWithAggregatesInput[]
    NOT?: refreshtokenScalarWhereWithAggregatesInput | refreshtokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"refreshtoken"> | string
    token?: StringWithAggregatesFilter<"refreshtoken"> | string
    userId?: StringWithAggregatesFilter<"refreshtoken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"refreshtoken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"refreshtoken"> | Date | string
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    refreshtoken?: RefreshtokenListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    refreshtoken?: refreshtokenOrderByRelationAggregateInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    password?: StringFilter<"user"> | string
    refreshtoken?: RefreshtokenListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
  }

  export type callsCreateInput = {
    contactName: string
    contactPhone: string
    callStatus: string
    createdAt?: Date | string
    callSid: string
    recordingsLink?: string | null
    transcriptionsLink?: string | null
    BussinessName: string
    CallDuration: string
    From: string
    campaigns: campaignsCreateNestedOneWithoutCallsInput
  }

  export type callsUncheckedCreateInput = {
    id?: number
    campaignId: number
    contactName: string
    contactPhone: string
    callStatus: string
    createdAt?: Date | string
    callSid: string
    recordingsLink?: string | null
    transcriptionsLink?: string | null
    BussinessName: string
    CallDuration: string
    From: string
  }

  export type callsUpdateInput = {
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    callStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    callSid?: StringFieldUpdateOperationsInput | string
    recordingsLink?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptionsLink?: NullableStringFieldUpdateOperationsInput | string | null
    BussinessName?: StringFieldUpdateOperationsInput | string
    CallDuration?: StringFieldUpdateOperationsInput | string
    From?: StringFieldUpdateOperationsInput | string
    campaigns?: campaignsUpdateOneRequiredWithoutCallsNestedInput
  }

  export type callsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    callStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    callSid?: StringFieldUpdateOperationsInput | string
    recordingsLink?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptionsLink?: NullableStringFieldUpdateOperationsInput | string | null
    BussinessName?: StringFieldUpdateOperationsInput | string
    CallDuration?: StringFieldUpdateOperationsInput | string
    From?: StringFieldUpdateOperationsInput | string
  }

  export type callsCreateManyInput = {
    id?: number
    campaignId: number
    contactName: string
    contactPhone: string
    callStatus: string
    createdAt?: Date | string
    callSid: string
    recordingsLink?: string | null
    transcriptionsLink?: string | null
    BussinessName: string
    CallDuration: string
    From: string
  }

  export type callsUpdateManyMutationInput = {
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    callStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    callSid?: StringFieldUpdateOperationsInput | string
    recordingsLink?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptionsLink?: NullableStringFieldUpdateOperationsInput | string | null
    BussinessName?: StringFieldUpdateOperationsInput | string
    CallDuration?: StringFieldUpdateOperationsInput | string
    From?: StringFieldUpdateOperationsInput | string
  }

  export type callsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    callStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    callSid?: StringFieldUpdateOperationsInput | string
    recordingsLink?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptionsLink?: NullableStringFieldUpdateOperationsInput | string | null
    BussinessName?: StringFieldUpdateOperationsInput | string
    CallDuration?: StringFieldUpdateOperationsInput | string
    From?: StringFieldUpdateOperationsInput | string
  }

  export type campaignsCreateInput = {
    contacts: string
    campaignName: string
    campaignDescription: string
    callScript: string
    status?: string
    lastContactIndex?: number
    createdAt?: Date | string
    calls?: callsCreateNestedManyWithoutCampaignsInput
    models: modelsCreateNestedOneWithoutCampaignsInput
    leads?: leadsCreateNestedManyWithoutCampaignsInput
  }

  export type campaignsUncheckedCreateInput = {
    id?: number
    contacts: string
    modelId: number
    campaignName: string
    campaignDescription: string
    callScript: string
    status?: string
    lastContactIndex?: number
    createdAt?: Date | string
    calls?: callsUncheckedCreateNestedManyWithoutCampaignsInput
    leads?: leadsUncheckedCreateNestedManyWithoutCampaignsInput
  }

  export type campaignsUpdateInput = {
    contacts?: StringFieldUpdateOperationsInput | string
    campaignName?: StringFieldUpdateOperationsInput | string
    campaignDescription?: StringFieldUpdateOperationsInput | string
    callScript?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastContactIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calls?: callsUpdateManyWithoutCampaignsNestedInput
    models?: modelsUpdateOneRequiredWithoutCampaignsNestedInput
    leads?: leadsUpdateManyWithoutCampaignsNestedInput
  }

  export type campaignsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    contacts?: StringFieldUpdateOperationsInput | string
    modelId?: IntFieldUpdateOperationsInput | number
    campaignName?: StringFieldUpdateOperationsInput | string
    campaignDescription?: StringFieldUpdateOperationsInput | string
    callScript?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastContactIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calls?: callsUncheckedUpdateManyWithoutCampaignsNestedInput
    leads?: leadsUncheckedUpdateManyWithoutCampaignsNestedInput
  }

  export type campaignsCreateManyInput = {
    id?: number
    contacts: string
    modelId: number
    campaignName: string
    campaignDescription: string
    callScript: string
    status?: string
    lastContactIndex?: number
    createdAt?: Date | string
  }

  export type campaignsUpdateManyMutationInput = {
    contacts?: StringFieldUpdateOperationsInput | string
    campaignName?: StringFieldUpdateOperationsInput | string
    campaignDescription?: StringFieldUpdateOperationsInput | string
    callScript?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastContactIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type campaignsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    contacts?: StringFieldUpdateOperationsInput | string
    modelId?: IntFieldUpdateOperationsInput | number
    campaignName?: StringFieldUpdateOperationsInput | string
    campaignDescription?: StringFieldUpdateOperationsInput | string
    callScript?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastContactIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type modelsCreateInput = {
    modelName: string
    instructions: string
    trainingData: string
    createdAt?: Date | string
    campaigns?: campaignsCreateNestedManyWithoutModelsInput
  }

  export type modelsUncheckedCreateInput = {
    id?: number
    modelName: string
    instructions: string
    trainingData: string
    createdAt?: Date | string
    campaigns?: campaignsUncheckedCreateNestedManyWithoutModelsInput
  }

  export type modelsUpdateInput = {
    modelName?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    trainingData?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: campaignsUpdateManyWithoutModelsNestedInput
  }

  export type modelsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelName?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    trainingData?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: campaignsUncheckedUpdateManyWithoutModelsNestedInput
  }

  export type modelsCreateManyInput = {
    id?: number
    modelName: string
    instructions: string
    trainingData: string
    createdAt?: Date | string
  }

  export type modelsUpdateManyMutationInput = {
    modelName?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    trainingData?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type modelsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelName?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    trainingData?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type leadsCreateInput = {
    createdAt?: Date | string
    email: string
    name: string
    businessName: string
    contactName: string
    contactPhone: string
    campaigns: campaignsCreateNestedOneWithoutLeadsInput
  }

  export type leadsUncheckedCreateInput = {
    id?: number
    campaignId: number
    createdAt?: Date | string
    email: string
    name: string
    businessName: string
    contactName: string
    contactPhone: string
  }

  export type leadsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    campaigns?: campaignsUpdateOneRequiredWithoutLeadsNestedInput
  }

  export type leadsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
  }

  export type leadsCreateManyInput = {
    id?: number
    campaignId: number
    createdAt?: Date | string
    email: string
    name: string
    businessName: string
    contactName: string
    contactPhone: string
  }

  export type leadsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
  }

  export type leadsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
  }

  export type refreshtokenCreateInput = {
    id: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: userCreateNestedOneWithoutRefreshtokenInput
  }

  export type refreshtokenUncheckedCreateInput = {
    id: string
    token: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type refreshtokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutRefreshtokenNestedInput
  }

  export type refreshtokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type refreshtokenCreateManyInput = {
    id: string
    token: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type refreshtokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type refreshtokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userCreateInput = {
    id: string
    email: string
    password: string
    refreshtoken?: refreshtokenCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id: string
    email: string
    password: string
    refreshtoken?: refreshtokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshtoken?: refreshtokenUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshtoken?: refreshtokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id: string
    email: string
    password: string
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CampaignsScalarRelationFilter = {
    is?: campaignsWhereInput
    isNot?: campaignsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type callsOrderByRelevanceInput = {
    fields: callsOrderByRelevanceFieldEnum | callsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type callsCountOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    contactName?: SortOrder
    contactPhone?: SortOrder
    callStatus?: SortOrder
    createdAt?: SortOrder
    callSid?: SortOrder
    recordingsLink?: SortOrder
    transcriptionsLink?: SortOrder
    BussinessName?: SortOrder
    CallDuration?: SortOrder
    From?: SortOrder
  }

  export type callsAvgOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
  }

  export type callsMaxOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    contactName?: SortOrder
    contactPhone?: SortOrder
    callStatus?: SortOrder
    createdAt?: SortOrder
    callSid?: SortOrder
    recordingsLink?: SortOrder
    transcriptionsLink?: SortOrder
    BussinessName?: SortOrder
    CallDuration?: SortOrder
    From?: SortOrder
  }

  export type callsMinOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    contactName?: SortOrder
    contactPhone?: SortOrder
    callStatus?: SortOrder
    createdAt?: SortOrder
    callSid?: SortOrder
    recordingsLink?: SortOrder
    transcriptionsLink?: SortOrder
    BussinessName?: SortOrder
    CallDuration?: SortOrder
    From?: SortOrder
  }

  export type callsSumOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CallsListRelationFilter = {
    every?: callsWhereInput
    some?: callsWhereInput
    none?: callsWhereInput
  }

  export type ModelsScalarRelationFilter = {
    is?: modelsWhereInput
    isNot?: modelsWhereInput
  }

  export type LeadsListRelationFilter = {
    every?: leadsWhereInput
    some?: leadsWhereInput
    none?: leadsWhereInput
  }

  export type callsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type leadsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type campaignsOrderByRelevanceInput = {
    fields: campaignsOrderByRelevanceFieldEnum | campaignsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type campaignsCountOrderByAggregateInput = {
    id?: SortOrder
    contacts?: SortOrder
    modelId?: SortOrder
    campaignName?: SortOrder
    campaignDescription?: SortOrder
    callScript?: SortOrder
    status?: SortOrder
    lastContactIndex?: SortOrder
    createdAt?: SortOrder
  }

  export type campaignsAvgOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    lastContactIndex?: SortOrder
  }

  export type campaignsMaxOrderByAggregateInput = {
    id?: SortOrder
    contacts?: SortOrder
    modelId?: SortOrder
    campaignName?: SortOrder
    campaignDescription?: SortOrder
    callScript?: SortOrder
    status?: SortOrder
    lastContactIndex?: SortOrder
    createdAt?: SortOrder
  }

  export type campaignsMinOrderByAggregateInput = {
    id?: SortOrder
    contacts?: SortOrder
    modelId?: SortOrder
    campaignName?: SortOrder
    campaignDescription?: SortOrder
    callScript?: SortOrder
    status?: SortOrder
    lastContactIndex?: SortOrder
    createdAt?: SortOrder
  }

  export type campaignsSumOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    lastContactIndex?: SortOrder
  }

  export type CampaignsListRelationFilter = {
    every?: campaignsWhereInput
    some?: campaignsWhereInput
    none?: campaignsWhereInput
  }

  export type campaignsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type modelsOrderByRelevanceInput = {
    fields: modelsOrderByRelevanceFieldEnum | modelsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type modelsCountOrderByAggregateInput = {
    id?: SortOrder
    modelName?: SortOrder
    instructions?: SortOrder
    trainingData?: SortOrder
    createdAt?: SortOrder
  }

  export type modelsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type modelsMaxOrderByAggregateInput = {
    id?: SortOrder
    modelName?: SortOrder
    instructions?: SortOrder
    trainingData?: SortOrder
    createdAt?: SortOrder
  }

  export type modelsMinOrderByAggregateInput = {
    id?: SortOrder
    modelName?: SortOrder
    instructions?: SortOrder
    trainingData?: SortOrder
    createdAt?: SortOrder
  }

  export type modelsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type leadsOrderByRelevanceInput = {
    fields: leadsOrderByRelevanceFieldEnum | leadsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type leadsCountOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    businessName?: SortOrder
    contactName?: SortOrder
    contactPhone?: SortOrder
  }

  export type leadsAvgOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
  }

  export type leadsMaxOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    businessName?: SortOrder
    contactName?: SortOrder
    contactPhone?: SortOrder
  }

  export type leadsMinOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    businessName?: SortOrder
    contactName?: SortOrder
    contactPhone?: SortOrder
  }

  export type leadsSumOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type refreshtokenOrderByRelevanceInput = {
    fields: refreshtokenOrderByRelevanceFieldEnum | refreshtokenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type refreshtokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type refreshtokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type refreshtokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshtokenListRelationFilter = {
    every?: refreshtokenWhereInput
    some?: refreshtokenWhereInput
    none?: refreshtokenWhereInput
  }

  export type refreshtokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type campaignsCreateNestedOneWithoutCallsInput = {
    create?: XOR<campaignsCreateWithoutCallsInput, campaignsUncheckedCreateWithoutCallsInput>
    connectOrCreate?: campaignsCreateOrConnectWithoutCallsInput
    connect?: campaignsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type campaignsUpdateOneRequiredWithoutCallsNestedInput = {
    create?: XOR<campaignsCreateWithoutCallsInput, campaignsUncheckedCreateWithoutCallsInput>
    connectOrCreate?: campaignsCreateOrConnectWithoutCallsInput
    upsert?: campaignsUpsertWithoutCallsInput
    connect?: campaignsWhereUniqueInput
    update?: XOR<XOR<campaignsUpdateToOneWithWhereWithoutCallsInput, campaignsUpdateWithoutCallsInput>, campaignsUncheckedUpdateWithoutCallsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type callsCreateNestedManyWithoutCampaignsInput = {
    create?: XOR<callsCreateWithoutCampaignsInput, callsUncheckedCreateWithoutCampaignsInput> | callsCreateWithoutCampaignsInput[] | callsUncheckedCreateWithoutCampaignsInput[]
    connectOrCreate?: callsCreateOrConnectWithoutCampaignsInput | callsCreateOrConnectWithoutCampaignsInput[]
    createMany?: callsCreateManyCampaignsInputEnvelope
    connect?: callsWhereUniqueInput | callsWhereUniqueInput[]
  }

  export type modelsCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<modelsCreateWithoutCampaignsInput, modelsUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: modelsCreateOrConnectWithoutCampaignsInput
    connect?: modelsWhereUniqueInput
  }

  export type leadsCreateNestedManyWithoutCampaignsInput = {
    create?: XOR<leadsCreateWithoutCampaignsInput, leadsUncheckedCreateWithoutCampaignsInput> | leadsCreateWithoutCampaignsInput[] | leadsUncheckedCreateWithoutCampaignsInput[]
    connectOrCreate?: leadsCreateOrConnectWithoutCampaignsInput | leadsCreateOrConnectWithoutCampaignsInput[]
    createMany?: leadsCreateManyCampaignsInputEnvelope
    connect?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
  }

  export type callsUncheckedCreateNestedManyWithoutCampaignsInput = {
    create?: XOR<callsCreateWithoutCampaignsInput, callsUncheckedCreateWithoutCampaignsInput> | callsCreateWithoutCampaignsInput[] | callsUncheckedCreateWithoutCampaignsInput[]
    connectOrCreate?: callsCreateOrConnectWithoutCampaignsInput | callsCreateOrConnectWithoutCampaignsInput[]
    createMany?: callsCreateManyCampaignsInputEnvelope
    connect?: callsWhereUniqueInput | callsWhereUniqueInput[]
  }

  export type leadsUncheckedCreateNestedManyWithoutCampaignsInput = {
    create?: XOR<leadsCreateWithoutCampaignsInput, leadsUncheckedCreateWithoutCampaignsInput> | leadsCreateWithoutCampaignsInput[] | leadsUncheckedCreateWithoutCampaignsInput[]
    connectOrCreate?: leadsCreateOrConnectWithoutCampaignsInput | leadsCreateOrConnectWithoutCampaignsInput[]
    createMany?: leadsCreateManyCampaignsInputEnvelope
    connect?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
  }

  export type callsUpdateManyWithoutCampaignsNestedInput = {
    create?: XOR<callsCreateWithoutCampaignsInput, callsUncheckedCreateWithoutCampaignsInput> | callsCreateWithoutCampaignsInput[] | callsUncheckedCreateWithoutCampaignsInput[]
    connectOrCreate?: callsCreateOrConnectWithoutCampaignsInput | callsCreateOrConnectWithoutCampaignsInput[]
    upsert?: callsUpsertWithWhereUniqueWithoutCampaignsInput | callsUpsertWithWhereUniqueWithoutCampaignsInput[]
    createMany?: callsCreateManyCampaignsInputEnvelope
    set?: callsWhereUniqueInput | callsWhereUniqueInput[]
    disconnect?: callsWhereUniqueInput | callsWhereUniqueInput[]
    delete?: callsWhereUniqueInput | callsWhereUniqueInput[]
    connect?: callsWhereUniqueInput | callsWhereUniqueInput[]
    update?: callsUpdateWithWhereUniqueWithoutCampaignsInput | callsUpdateWithWhereUniqueWithoutCampaignsInput[]
    updateMany?: callsUpdateManyWithWhereWithoutCampaignsInput | callsUpdateManyWithWhereWithoutCampaignsInput[]
    deleteMany?: callsScalarWhereInput | callsScalarWhereInput[]
  }

  export type modelsUpdateOneRequiredWithoutCampaignsNestedInput = {
    create?: XOR<modelsCreateWithoutCampaignsInput, modelsUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: modelsCreateOrConnectWithoutCampaignsInput
    upsert?: modelsUpsertWithoutCampaignsInput
    connect?: modelsWhereUniqueInput
    update?: XOR<XOR<modelsUpdateToOneWithWhereWithoutCampaignsInput, modelsUpdateWithoutCampaignsInput>, modelsUncheckedUpdateWithoutCampaignsInput>
  }

  export type leadsUpdateManyWithoutCampaignsNestedInput = {
    create?: XOR<leadsCreateWithoutCampaignsInput, leadsUncheckedCreateWithoutCampaignsInput> | leadsCreateWithoutCampaignsInput[] | leadsUncheckedCreateWithoutCampaignsInput[]
    connectOrCreate?: leadsCreateOrConnectWithoutCampaignsInput | leadsCreateOrConnectWithoutCampaignsInput[]
    upsert?: leadsUpsertWithWhereUniqueWithoutCampaignsInput | leadsUpsertWithWhereUniqueWithoutCampaignsInput[]
    createMany?: leadsCreateManyCampaignsInputEnvelope
    set?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    disconnect?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    delete?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    connect?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    update?: leadsUpdateWithWhereUniqueWithoutCampaignsInput | leadsUpdateWithWhereUniqueWithoutCampaignsInput[]
    updateMany?: leadsUpdateManyWithWhereWithoutCampaignsInput | leadsUpdateManyWithWhereWithoutCampaignsInput[]
    deleteMany?: leadsScalarWhereInput | leadsScalarWhereInput[]
  }

  export type callsUncheckedUpdateManyWithoutCampaignsNestedInput = {
    create?: XOR<callsCreateWithoutCampaignsInput, callsUncheckedCreateWithoutCampaignsInput> | callsCreateWithoutCampaignsInput[] | callsUncheckedCreateWithoutCampaignsInput[]
    connectOrCreate?: callsCreateOrConnectWithoutCampaignsInput | callsCreateOrConnectWithoutCampaignsInput[]
    upsert?: callsUpsertWithWhereUniqueWithoutCampaignsInput | callsUpsertWithWhereUniqueWithoutCampaignsInput[]
    createMany?: callsCreateManyCampaignsInputEnvelope
    set?: callsWhereUniqueInput | callsWhereUniqueInput[]
    disconnect?: callsWhereUniqueInput | callsWhereUniqueInput[]
    delete?: callsWhereUniqueInput | callsWhereUniqueInput[]
    connect?: callsWhereUniqueInput | callsWhereUniqueInput[]
    update?: callsUpdateWithWhereUniqueWithoutCampaignsInput | callsUpdateWithWhereUniqueWithoutCampaignsInput[]
    updateMany?: callsUpdateManyWithWhereWithoutCampaignsInput | callsUpdateManyWithWhereWithoutCampaignsInput[]
    deleteMany?: callsScalarWhereInput | callsScalarWhereInput[]
  }

  export type leadsUncheckedUpdateManyWithoutCampaignsNestedInput = {
    create?: XOR<leadsCreateWithoutCampaignsInput, leadsUncheckedCreateWithoutCampaignsInput> | leadsCreateWithoutCampaignsInput[] | leadsUncheckedCreateWithoutCampaignsInput[]
    connectOrCreate?: leadsCreateOrConnectWithoutCampaignsInput | leadsCreateOrConnectWithoutCampaignsInput[]
    upsert?: leadsUpsertWithWhereUniqueWithoutCampaignsInput | leadsUpsertWithWhereUniqueWithoutCampaignsInput[]
    createMany?: leadsCreateManyCampaignsInputEnvelope
    set?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    disconnect?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    delete?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    connect?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    update?: leadsUpdateWithWhereUniqueWithoutCampaignsInput | leadsUpdateWithWhereUniqueWithoutCampaignsInput[]
    updateMany?: leadsUpdateManyWithWhereWithoutCampaignsInput | leadsUpdateManyWithWhereWithoutCampaignsInput[]
    deleteMany?: leadsScalarWhereInput | leadsScalarWhereInput[]
  }

  export type campaignsCreateNestedManyWithoutModelsInput = {
    create?: XOR<campaignsCreateWithoutModelsInput, campaignsUncheckedCreateWithoutModelsInput> | campaignsCreateWithoutModelsInput[] | campaignsUncheckedCreateWithoutModelsInput[]
    connectOrCreate?: campaignsCreateOrConnectWithoutModelsInput | campaignsCreateOrConnectWithoutModelsInput[]
    createMany?: campaignsCreateManyModelsInputEnvelope
    connect?: campaignsWhereUniqueInput | campaignsWhereUniqueInput[]
  }

  export type campaignsUncheckedCreateNestedManyWithoutModelsInput = {
    create?: XOR<campaignsCreateWithoutModelsInput, campaignsUncheckedCreateWithoutModelsInput> | campaignsCreateWithoutModelsInput[] | campaignsUncheckedCreateWithoutModelsInput[]
    connectOrCreate?: campaignsCreateOrConnectWithoutModelsInput | campaignsCreateOrConnectWithoutModelsInput[]
    createMany?: campaignsCreateManyModelsInputEnvelope
    connect?: campaignsWhereUniqueInput | campaignsWhereUniqueInput[]
  }

  export type campaignsUpdateManyWithoutModelsNestedInput = {
    create?: XOR<campaignsCreateWithoutModelsInput, campaignsUncheckedCreateWithoutModelsInput> | campaignsCreateWithoutModelsInput[] | campaignsUncheckedCreateWithoutModelsInput[]
    connectOrCreate?: campaignsCreateOrConnectWithoutModelsInput | campaignsCreateOrConnectWithoutModelsInput[]
    upsert?: campaignsUpsertWithWhereUniqueWithoutModelsInput | campaignsUpsertWithWhereUniqueWithoutModelsInput[]
    createMany?: campaignsCreateManyModelsInputEnvelope
    set?: campaignsWhereUniqueInput | campaignsWhereUniqueInput[]
    disconnect?: campaignsWhereUniqueInput | campaignsWhereUniqueInput[]
    delete?: campaignsWhereUniqueInput | campaignsWhereUniqueInput[]
    connect?: campaignsWhereUniqueInput | campaignsWhereUniqueInput[]
    update?: campaignsUpdateWithWhereUniqueWithoutModelsInput | campaignsUpdateWithWhereUniqueWithoutModelsInput[]
    updateMany?: campaignsUpdateManyWithWhereWithoutModelsInput | campaignsUpdateManyWithWhereWithoutModelsInput[]
    deleteMany?: campaignsScalarWhereInput | campaignsScalarWhereInput[]
  }

  export type campaignsUncheckedUpdateManyWithoutModelsNestedInput = {
    create?: XOR<campaignsCreateWithoutModelsInput, campaignsUncheckedCreateWithoutModelsInput> | campaignsCreateWithoutModelsInput[] | campaignsUncheckedCreateWithoutModelsInput[]
    connectOrCreate?: campaignsCreateOrConnectWithoutModelsInput | campaignsCreateOrConnectWithoutModelsInput[]
    upsert?: campaignsUpsertWithWhereUniqueWithoutModelsInput | campaignsUpsertWithWhereUniqueWithoutModelsInput[]
    createMany?: campaignsCreateManyModelsInputEnvelope
    set?: campaignsWhereUniqueInput | campaignsWhereUniqueInput[]
    disconnect?: campaignsWhereUniqueInput | campaignsWhereUniqueInput[]
    delete?: campaignsWhereUniqueInput | campaignsWhereUniqueInput[]
    connect?: campaignsWhereUniqueInput | campaignsWhereUniqueInput[]
    update?: campaignsUpdateWithWhereUniqueWithoutModelsInput | campaignsUpdateWithWhereUniqueWithoutModelsInput[]
    updateMany?: campaignsUpdateManyWithWhereWithoutModelsInput | campaignsUpdateManyWithWhereWithoutModelsInput[]
    deleteMany?: campaignsScalarWhereInput | campaignsScalarWhereInput[]
  }

  export type campaignsCreateNestedOneWithoutLeadsInput = {
    create?: XOR<campaignsCreateWithoutLeadsInput, campaignsUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: campaignsCreateOrConnectWithoutLeadsInput
    connect?: campaignsWhereUniqueInput
  }

  export type campaignsUpdateOneRequiredWithoutLeadsNestedInput = {
    create?: XOR<campaignsCreateWithoutLeadsInput, campaignsUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: campaignsCreateOrConnectWithoutLeadsInput
    upsert?: campaignsUpsertWithoutLeadsInput
    connect?: campaignsWhereUniqueInput
    update?: XOR<XOR<campaignsUpdateToOneWithWhereWithoutLeadsInput, campaignsUpdateWithoutLeadsInput>, campaignsUncheckedUpdateWithoutLeadsInput>
  }

  export type userCreateNestedOneWithoutRefreshtokenInput = {
    create?: XOR<userCreateWithoutRefreshtokenInput, userUncheckedCreateWithoutRefreshtokenInput>
    connectOrCreate?: userCreateOrConnectWithoutRefreshtokenInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutRefreshtokenNestedInput = {
    create?: XOR<userCreateWithoutRefreshtokenInput, userUncheckedCreateWithoutRefreshtokenInput>
    connectOrCreate?: userCreateOrConnectWithoutRefreshtokenInput
    upsert?: userUpsertWithoutRefreshtokenInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutRefreshtokenInput, userUpdateWithoutRefreshtokenInput>, userUncheckedUpdateWithoutRefreshtokenInput>
  }

  export type refreshtokenCreateNestedManyWithoutUserInput = {
    create?: XOR<refreshtokenCreateWithoutUserInput, refreshtokenUncheckedCreateWithoutUserInput> | refreshtokenCreateWithoutUserInput[] | refreshtokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: refreshtokenCreateOrConnectWithoutUserInput | refreshtokenCreateOrConnectWithoutUserInput[]
    createMany?: refreshtokenCreateManyUserInputEnvelope
    connect?: refreshtokenWhereUniqueInput | refreshtokenWhereUniqueInput[]
  }

  export type refreshtokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<refreshtokenCreateWithoutUserInput, refreshtokenUncheckedCreateWithoutUserInput> | refreshtokenCreateWithoutUserInput[] | refreshtokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: refreshtokenCreateOrConnectWithoutUserInput | refreshtokenCreateOrConnectWithoutUserInput[]
    createMany?: refreshtokenCreateManyUserInputEnvelope
    connect?: refreshtokenWhereUniqueInput | refreshtokenWhereUniqueInput[]
  }

  export type refreshtokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<refreshtokenCreateWithoutUserInput, refreshtokenUncheckedCreateWithoutUserInput> | refreshtokenCreateWithoutUserInput[] | refreshtokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: refreshtokenCreateOrConnectWithoutUserInput | refreshtokenCreateOrConnectWithoutUserInput[]
    upsert?: refreshtokenUpsertWithWhereUniqueWithoutUserInput | refreshtokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: refreshtokenCreateManyUserInputEnvelope
    set?: refreshtokenWhereUniqueInput | refreshtokenWhereUniqueInput[]
    disconnect?: refreshtokenWhereUniqueInput | refreshtokenWhereUniqueInput[]
    delete?: refreshtokenWhereUniqueInput | refreshtokenWhereUniqueInput[]
    connect?: refreshtokenWhereUniqueInput | refreshtokenWhereUniqueInput[]
    update?: refreshtokenUpdateWithWhereUniqueWithoutUserInput | refreshtokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: refreshtokenUpdateManyWithWhereWithoutUserInput | refreshtokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: refreshtokenScalarWhereInput | refreshtokenScalarWhereInput[]
  }

  export type refreshtokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<refreshtokenCreateWithoutUserInput, refreshtokenUncheckedCreateWithoutUserInput> | refreshtokenCreateWithoutUserInput[] | refreshtokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: refreshtokenCreateOrConnectWithoutUserInput | refreshtokenCreateOrConnectWithoutUserInput[]
    upsert?: refreshtokenUpsertWithWhereUniqueWithoutUserInput | refreshtokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: refreshtokenCreateManyUserInputEnvelope
    set?: refreshtokenWhereUniqueInput | refreshtokenWhereUniqueInput[]
    disconnect?: refreshtokenWhereUniqueInput | refreshtokenWhereUniqueInput[]
    delete?: refreshtokenWhereUniqueInput | refreshtokenWhereUniqueInput[]
    connect?: refreshtokenWhereUniqueInput | refreshtokenWhereUniqueInput[]
    update?: refreshtokenUpdateWithWhereUniqueWithoutUserInput | refreshtokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: refreshtokenUpdateManyWithWhereWithoutUserInput | refreshtokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: refreshtokenScalarWhereInput | refreshtokenScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type campaignsCreateWithoutCallsInput = {
    contacts: string
    campaignName: string
    campaignDescription: string
    callScript: string
    status?: string
    lastContactIndex?: number
    createdAt?: Date | string
    models: modelsCreateNestedOneWithoutCampaignsInput
    leads?: leadsCreateNestedManyWithoutCampaignsInput
  }

  export type campaignsUncheckedCreateWithoutCallsInput = {
    id?: number
    contacts: string
    modelId: number
    campaignName: string
    campaignDescription: string
    callScript: string
    status?: string
    lastContactIndex?: number
    createdAt?: Date | string
    leads?: leadsUncheckedCreateNestedManyWithoutCampaignsInput
  }

  export type campaignsCreateOrConnectWithoutCallsInput = {
    where: campaignsWhereUniqueInput
    create: XOR<campaignsCreateWithoutCallsInput, campaignsUncheckedCreateWithoutCallsInput>
  }

  export type campaignsUpsertWithoutCallsInput = {
    update: XOR<campaignsUpdateWithoutCallsInput, campaignsUncheckedUpdateWithoutCallsInput>
    create: XOR<campaignsCreateWithoutCallsInput, campaignsUncheckedCreateWithoutCallsInput>
    where?: campaignsWhereInput
  }

  export type campaignsUpdateToOneWithWhereWithoutCallsInput = {
    where?: campaignsWhereInput
    data: XOR<campaignsUpdateWithoutCallsInput, campaignsUncheckedUpdateWithoutCallsInput>
  }

  export type campaignsUpdateWithoutCallsInput = {
    contacts?: StringFieldUpdateOperationsInput | string
    campaignName?: StringFieldUpdateOperationsInput | string
    campaignDescription?: StringFieldUpdateOperationsInput | string
    callScript?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastContactIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    models?: modelsUpdateOneRequiredWithoutCampaignsNestedInput
    leads?: leadsUpdateManyWithoutCampaignsNestedInput
  }

  export type campaignsUncheckedUpdateWithoutCallsInput = {
    id?: IntFieldUpdateOperationsInput | number
    contacts?: StringFieldUpdateOperationsInput | string
    modelId?: IntFieldUpdateOperationsInput | number
    campaignName?: StringFieldUpdateOperationsInput | string
    campaignDescription?: StringFieldUpdateOperationsInput | string
    callScript?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastContactIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: leadsUncheckedUpdateManyWithoutCampaignsNestedInput
  }

  export type callsCreateWithoutCampaignsInput = {
    contactName: string
    contactPhone: string
    callStatus: string
    createdAt?: Date | string
    callSid: string
    recordingsLink?: string | null
    transcriptionsLink?: string | null
    BussinessName: string
    CallDuration: string
    From: string
  }

  export type callsUncheckedCreateWithoutCampaignsInput = {
    id?: number
    contactName: string
    contactPhone: string
    callStatus: string
    createdAt?: Date | string
    callSid: string
    recordingsLink?: string | null
    transcriptionsLink?: string | null
    BussinessName: string
    CallDuration: string
    From: string
  }

  export type callsCreateOrConnectWithoutCampaignsInput = {
    where: callsWhereUniqueInput
    create: XOR<callsCreateWithoutCampaignsInput, callsUncheckedCreateWithoutCampaignsInput>
  }

  export type callsCreateManyCampaignsInputEnvelope = {
    data: callsCreateManyCampaignsInput | callsCreateManyCampaignsInput[]
    skipDuplicates?: boolean
  }

  export type modelsCreateWithoutCampaignsInput = {
    modelName: string
    instructions: string
    trainingData: string
    createdAt?: Date | string
  }

  export type modelsUncheckedCreateWithoutCampaignsInput = {
    id?: number
    modelName: string
    instructions: string
    trainingData: string
    createdAt?: Date | string
  }

  export type modelsCreateOrConnectWithoutCampaignsInput = {
    where: modelsWhereUniqueInput
    create: XOR<modelsCreateWithoutCampaignsInput, modelsUncheckedCreateWithoutCampaignsInput>
  }

  export type leadsCreateWithoutCampaignsInput = {
    createdAt?: Date | string
    email: string
    name: string
    businessName: string
    contactName: string
    contactPhone: string
  }

  export type leadsUncheckedCreateWithoutCampaignsInput = {
    id?: number
    createdAt?: Date | string
    email: string
    name: string
    businessName: string
    contactName: string
    contactPhone: string
  }

  export type leadsCreateOrConnectWithoutCampaignsInput = {
    where: leadsWhereUniqueInput
    create: XOR<leadsCreateWithoutCampaignsInput, leadsUncheckedCreateWithoutCampaignsInput>
  }

  export type leadsCreateManyCampaignsInputEnvelope = {
    data: leadsCreateManyCampaignsInput | leadsCreateManyCampaignsInput[]
    skipDuplicates?: boolean
  }

  export type callsUpsertWithWhereUniqueWithoutCampaignsInput = {
    where: callsWhereUniqueInput
    update: XOR<callsUpdateWithoutCampaignsInput, callsUncheckedUpdateWithoutCampaignsInput>
    create: XOR<callsCreateWithoutCampaignsInput, callsUncheckedCreateWithoutCampaignsInput>
  }

  export type callsUpdateWithWhereUniqueWithoutCampaignsInput = {
    where: callsWhereUniqueInput
    data: XOR<callsUpdateWithoutCampaignsInput, callsUncheckedUpdateWithoutCampaignsInput>
  }

  export type callsUpdateManyWithWhereWithoutCampaignsInput = {
    where: callsScalarWhereInput
    data: XOR<callsUpdateManyMutationInput, callsUncheckedUpdateManyWithoutCampaignsInput>
  }

  export type callsScalarWhereInput = {
    AND?: callsScalarWhereInput | callsScalarWhereInput[]
    OR?: callsScalarWhereInput[]
    NOT?: callsScalarWhereInput | callsScalarWhereInput[]
    id?: IntFilter<"calls"> | number
    campaignId?: IntFilter<"calls"> | number
    contactName?: StringFilter<"calls"> | string
    contactPhone?: StringFilter<"calls"> | string
    callStatus?: StringFilter<"calls"> | string
    createdAt?: DateTimeFilter<"calls"> | Date | string
    callSid?: StringFilter<"calls"> | string
    recordingsLink?: StringNullableFilter<"calls"> | string | null
    transcriptionsLink?: StringNullableFilter<"calls"> | string | null
    BussinessName?: StringFilter<"calls"> | string
    CallDuration?: StringFilter<"calls"> | string
    From?: StringFilter<"calls"> | string
  }

  export type modelsUpsertWithoutCampaignsInput = {
    update: XOR<modelsUpdateWithoutCampaignsInput, modelsUncheckedUpdateWithoutCampaignsInput>
    create: XOR<modelsCreateWithoutCampaignsInput, modelsUncheckedCreateWithoutCampaignsInput>
    where?: modelsWhereInput
  }

  export type modelsUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: modelsWhereInput
    data: XOR<modelsUpdateWithoutCampaignsInput, modelsUncheckedUpdateWithoutCampaignsInput>
  }

  export type modelsUpdateWithoutCampaignsInput = {
    modelName?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    trainingData?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type modelsUncheckedUpdateWithoutCampaignsInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelName?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    trainingData?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type leadsUpsertWithWhereUniqueWithoutCampaignsInput = {
    where: leadsWhereUniqueInput
    update: XOR<leadsUpdateWithoutCampaignsInput, leadsUncheckedUpdateWithoutCampaignsInput>
    create: XOR<leadsCreateWithoutCampaignsInput, leadsUncheckedCreateWithoutCampaignsInput>
  }

  export type leadsUpdateWithWhereUniqueWithoutCampaignsInput = {
    where: leadsWhereUniqueInput
    data: XOR<leadsUpdateWithoutCampaignsInput, leadsUncheckedUpdateWithoutCampaignsInput>
  }

  export type leadsUpdateManyWithWhereWithoutCampaignsInput = {
    where: leadsScalarWhereInput
    data: XOR<leadsUpdateManyMutationInput, leadsUncheckedUpdateManyWithoutCampaignsInput>
  }

  export type leadsScalarWhereInput = {
    AND?: leadsScalarWhereInput | leadsScalarWhereInput[]
    OR?: leadsScalarWhereInput[]
    NOT?: leadsScalarWhereInput | leadsScalarWhereInput[]
    id?: IntFilter<"leads"> | number
    campaignId?: IntFilter<"leads"> | number
    createdAt?: DateTimeFilter<"leads"> | Date | string
    email?: StringFilter<"leads"> | string
    name?: StringFilter<"leads"> | string
    businessName?: StringFilter<"leads"> | string
    contactName?: StringFilter<"leads"> | string
    contactPhone?: StringFilter<"leads"> | string
  }

  export type campaignsCreateWithoutModelsInput = {
    contacts: string
    campaignName: string
    campaignDescription: string
    callScript: string
    status?: string
    lastContactIndex?: number
    createdAt?: Date | string
    calls?: callsCreateNestedManyWithoutCampaignsInput
    leads?: leadsCreateNestedManyWithoutCampaignsInput
  }

  export type campaignsUncheckedCreateWithoutModelsInput = {
    id?: number
    contacts: string
    campaignName: string
    campaignDescription: string
    callScript: string
    status?: string
    lastContactIndex?: number
    createdAt?: Date | string
    calls?: callsUncheckedCreateNestedManyWithoutCampaignsInput
    leads?: leadsUncheckedCreateNestedManyWithoutCampaignsInput
  }

  export type campaignsCreateOrConnectWithoutModelsInput = {
    where: campaignsWhereUniqueInput
    create: XOR<campaignsCreateWithoutModelsInput, campaignsUncheckedCreateWithoutModelsInput>
  }

  export type campaignsCreateManyModelsInputEnvelope = {
    data: campaignsCreateManyModelsInput | campaignsCreateManyModelsInput[]
    skipDuplicates?: boolean
  }

  export type campaignsUpsertWithWhereUniqueWithoutModelsInput = {
    where: campaignsWhereUniqueInput
    update: XOR<campaignsUpdateWithoutModelsInput, campaignsUncheckedUpdateWithoutModelsInput>
    create: XOR<campaignsCreateWithoutModelsInput, campaignsUncheckedCreateWithoutModelsInput>
  }

  export type campaignsUpdateWithWhereUniqueWithoutModelsInput = {
    where: campaignsWhereUniqueInput
    data: XOR<campaignsUpdateWithoutModelsInput, campaignsUncheckedUpdateWithoutModelsInput>
  }

  export type campaignsUpdateManyWithWhereWithoutModelsInput = {
    where: campaignsScalarWhereInput
    data: XOR<campaignsUpdateManyMutationInput, campaignsUncheckedUpdateManyWithoutModelsInput>
  }

  export type campaignsScalarWhereInput = {
    AND?: campaignsScalarWhereInput | campaignsScalarWhereInput[]
    OR?: campaignsScalarWhereInput[]
    NOT?: campaignsScalarWhereInput | campaignsScalarWhereInput[]
    id?: IntFilter<"campaigns"> | number
    contacts?: StringFilter<"campaigns"> | string
    modelId?: IntFilter<"campaigns"> | number
    campaignName?: StringFilter<"campaigns"> | string
    campaignDescription?: StringFilter<"campaigns"> | string
    callScript?: StringFilter<"campaigns"> | string
    status?: StringFilter<"campaigns"> | string
    lastContactIndex?: IntFilter<"campaigns"> | number
    createdAt?: DateTimeFilter<"campaigns"> | Date | string
  }

  export type campaignsCreateWithoutLeadsInput = {
    contacts: string
    campaignName: string
    campaignDescription: string
    callScript: string
    status?: string
    lastContactIndex?: number
    createdAt?: Date | string
    calls?: callsCreateNestedManyWithoutCampaignsInput
    models: modelsCreateNestedOneWithoutCampaignsInput
  }

  export type campaignsUncheckedCreateWithoutLeadsInput = {
    id?: number
    contacts: string
    modelId: number
    campaignName: string
    campaignDescription: string
    callScript: string
    status?: string
    lastContactIndex?: number
    createdAt?: Date | string
    calls?: callsUncheckedCreateNestedManyWithoutCampaignsInput
  }

  export type campaignsCreateOrConnectWithoutLeadsInput = {
    where: campaignsWhereUniqueInput
    create: XOR<campaignsCreateWithoutLeadsInput, campaignsUncheckedCreateWithoutLeadsInput>
  }

  export type campaignsUpsertWithoutLeadsInput = {
    update: XOR<campaignsUpdateWithoutLeadsInput, campaignsUncheckedUpdateWithoutLeadsInput>
    create: XOR<campaignsCreateWithoutLeadsInput, campaignsUncheckedCreateWithoutLeadsInput>
    where?: campaignsWhereInput
  }

  export type campaignsUpdateToOneWithWhereWithoutLeadsInput = {
    where?: campaignsWhereInput
    data: XOR<campaignsUpdateWithoutLeadsInput, campaignsUncheckedUpdateWithoutLeadsInput>
  }

  export type campaignsUpdateWithoutLeadsInput = {
    contacts?: StringFieldUpdateOperationsInput | string
    campaignName?: StringFieldUpdateOperationsInput | string
    campaignDescription?: StringFieldUpdateOperationsInput | string
    callScript?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastContactIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calls?: callsUpdateManyWithoutCampaignsNestedInput
    models?: modelsUpdateOneRequiredWithoutCampaignsNestedInput
  }

  export type campaignsUncheckedUpdateWithoutLeadsInput = {
    id?: IntFieldUpdateOperationsInput | number
    contacts?: StringFieldUpdateOperationsInput | string
    modelId?: IntFieldUpdateOperationsInput | number
    campaignName?: StringFieldUpdateOperationsInput | string
    campaignDescription?: StringFieldUpdateOperationsInput | string
    callScript?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastContactIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calls?: callsUncheckedUpdateManyWithoutCampaignsNestedInput
  }

  export type userCreateWithoutRefreshtokenInput = {
    id: string
    email: string
    password: string
  }

  export type userUncheckedCreateWithoutRefreshtokenInput = {
    id: string
    email: string
    password: string
  }

  export type userCreateOrConnectWithoutRefreshtokenInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutRefreshtokenInput, userUncheckedCreateWithoutRefreshtokenInput>
  }

  export type userUpsertWithoutRefreshtokenInput = {
    update: XOR<userUpdateWithoutRefreshtokenInput, userUncheckedUpdateWithoutRefreshtokenInput>
    create: XOR<userCreateWithoutRefreshtokenInput, userUncheckedCreateWithoutRefreshtokenInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutRefreshtokenInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutRefreshtokenInput, userUncheckedUpdateWithoutRefreshtokenInput>
  }

  export type userUpdateWithoutRefreshtokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateWithoutRefreshtokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type refreshtokenCreateWithoutUserInput = {
    id: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type refreshtokenUncheckedCreateWithoutUserInput = {
    id: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type refreshtokenCreateOrConnectWithoutUserInput = {
    where: refreshtokenWhereUniqueInput
    create: XOR<refreshtokenCreateWithoutUserInput, refreshtokenUncheckedCreateWithoutUserInput>
  }

  export type refreshtokenCreateManyUserInputEnvelope = {
    data: refreshtokenCreateManyUserInput | refreshtokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type refreshtokenUpsertWithWhereUniqueWithoutUserInput = {
    where: refreshtokenWhereUniqueInput
    update: XOR<refreshtokenUpdateWithoutUserInput, refreshtokenUncheckedUpdateWithoutUserInput>
    create: XOR<refreshtokenCreateWithoutUserInput, refreshtokenUncheckedCreateWithoutUserInput>
  }

  export type refreshtokenUpdateWithWhereUniqueWithoutUserInput = {
    where: refreshtokenWhereUniqueInput
    data: XOR<refreshtokenUpdateWithoutUserInput, refreshtokenUncheckedUpdateWithoutUserInput>
  }

  export type refreshtokenUpdateManyWithWhereWithoutUserInput = {
    where: refreshtokenScalarWhereInput
    data: XOR<refreshtokenUpdateManyMutationInput, refreshtokenUncheckedUpdateManyWithoutUserInput>
  }

  export type refreshtokenScalarWhereInput = {
    AND?: refreshtokenScalarWhereInput | refreshtokenScalarWhereInput[]
    OR?: refreshtokenScalarWhereInput[]
    NOT?: refreshtokenScalarWhereInput | refreshtokenScalarWhereInput[]
    id?: StringFilter<"refreshtoken"> | string
    token?: StringFilter<"refreshtoken"> | string
    userId?: StringFilter<"refreshtoken"> | string
    expiresAt?: DateTimeFilter<"refreshtoken"> | Date | string
    createdAt?: DateTimeFilter<"refreshtoken"> | Date | string
  }

  export type callsCreateManyCampaignsInput = {
    id?: number
    contactName: string
    contactPhone: string
    callStatus: string
    createdAt?: Date | string
    callSid: string
    recordingsLink?: string | null
    transcriptionsLink?: string | null
    BussinessName: string
    CallDuration: string
    From: string
  }

  export type leadsCreateManyCampaignsInput = {
    id?: number
    createdAt?: Date | string
    email: string
    name: string
    businessName: string
    contactName: string
    contactPhone: string
  }

  export type callsUpdateWithoutCampaignsInput = {
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    callStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    callSid?: StringFieldUpdateOperationsInput | string
    recordingsLink?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptionsLink?: NullableStringFieldUpdateOperationsInput | string | null
    BussinessName?: StringFieldUpdateOperationsInput | string
    CallDuration?: StringFieldUpdateOperationsInput | string
    From?: StringFieldUpdateOperationsInput | string
  }

  export type callsUncheckedUpdateWithoutCampaignsInput = {
    id?: IntFieldUpdateOperationsInput | number
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    callStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    callSid?: StringFieldUpdateOperationsInput | string
    recordingsLink?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptionsLink?: NullableStringFieldUpdateOperationsInput | string | null
    BussinessName?: StringFieldUpdateOperationsInput | string
    CallDuration?: StringFieldUpdateOperationsInput | string
    From?: StringFieldUpdateOperationsInput | string
  }

  export type callsUncheckedUpdateManyWithoutCampaignsInput = {
    id?: IntFieldUpdateOperationsInput | number
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    callStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    callSid?: StringFieldUpdateOperationsInput | string
    recordingsLink?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptionsLink?: NullableStringFieldUpdateOperationsInput | string | null
    BussinessName?: StringFieldUpdateOperationsInput | string
    CallDuration?: StringFieldUpdateOperationsInput | string
    From?: StringFieldUpdateOperationsInput | string
  }

  export type leadsUpdateWithoutCampaignsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
  }

  export type leadsUncheckedUpdateWithoutCampaignsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
  }

  export type leadsUncheckedUpdateManyWithoutCampaignsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
  }

  export type campaignsCreateManyModelsInput = {
    id?: number
    contacts: string
    campaignName: string
    campaignDescription: string
    callScript: string
    status?: string
    lastContactIndex?: number
    createdAt?: Date | string
  }

  export type campaignsUpdateWithoutModelsInput = {
    contacts?: StringFieldUpdateOperationsInput | string
    campaignName?: StringFieldUpdateOperationsInput | string
    campaignDescription?: StringFieldUpdateOperationsInput | string
    callScript?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastContactIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calls?: callsUpdateManyWithoutCampaignsNestedInput
    leads?: leadsUpdateManyWithoutCampaignsNestedInput
  }

  export type campaignsUncheckedUpdateWithoutModelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    contacts?: StringFieldUpdateOperationsInput | string
    campaignName?: StringFieldUpdateOperationsInput | string
    campaignDescription?: StringFieldUpdateOperationsInput | string
    callScript?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastContactIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calls?: callsUncheckedUpdateManyWithoutCampaignsNestedInput
    leads?: leadsUncheckedUpdateManyWithoutCampaignsNestedInput
  }

  export type campaignsUncheckedUpdateManyWithoutModelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    contacts?: StringFieldUpdateOperationsInput | string
    campaignName?: StringFieldUpdateOperationsInput | string
    campaignDescription?: StringFieldUpdateOperationsInput | string
    callScript?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastContactIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type refreshtokenCreateManyUserInput = {
    id: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type refreshtokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type refreshtokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type refreshtokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}