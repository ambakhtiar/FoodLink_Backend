
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model OrganizationProfile
 * 
 */
export type OrganizationProfile = $Result.DefaultSelection<Prisma.$OrganizationProfilePayload>
/**
 * Model AdminProfile
 * 
 */
export type AdminProfile = $Result.DefaultSelection<Prisma.$AdminProfilePayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model TransactionRequest
 * 
 */
export type TransactionRequest = $Result.DefaultSelection<Prisma.$TransactionRequestPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model AiLog
 * 
 */
export type AiLog = $Result.DefaultSelection<Prisma.$AiLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  ORGANIZATION: 'ORGANIZATION',
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const AccountStatus: {
  ACTIVE: 'ACTIVE',
  PENDING: 'PENDING',
  INCOMPLETE_PROFILE: 'INCOMPLETE_PROFILE',
  BANNED: 'BANNED'
};

export type AccountStatus = (typeof AccountStatus)[keyof typeof AccountStatus]


export const PostType: {
  DONATION: 'DONATION',
  REQUEST: 'REQUEST'
};

export type PostType = (typeof PostType)[keyof typeof PostType]


export const PostStatus: {
  AVAILABLE: 'AVAILABLE',
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  EXPIRED: 'EXPIRED'
};

export type PostStatus = (typeof PostStatus)[keyof typeof PostStatus]


export const TransactionStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  COMPLETED: 'COMPLETED'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]


export const PostCategory: {
  COOKED_FOOD: 'COOKED_FOOD',
  DRY_FOOD: 'DRY_FOOD',
  CLOTHING: 'CLOTHING',
  FURNITURE: 'FURNITURE',
  ELECTRONICS: 'ELECTRONICS',
  MEDICAL_SUPPLIES: 'MEDICAL_SUPPLIES',
  OTHERS: 'OTHERS'
};

export type PostCategory = (typeof PostCategory)[keyof typeof PostCategory]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type AccountStatus = $Enums.AccountStatus

export const AccountStatus: typeof $Enums.AccountStatus

export type PostType = $Enums.PostType

export const PostType: typeof $Enums.PostType

export type PostStatus = $Enums.PostStatus

export const PostStatus: typeof $Enums.PostStatus

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

export type PostCategory = $Enums.PostCategory

export const PostCategory: typeof $Enums.PostCategory

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organizationProfile`: Exposes CRUD operations for the **OrganizationProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrganizationProfiles
    * const organizationProfiles = await prisma.organizationProfile.findMany()
    * ```
    */
  get organizationProfile(): Prisma.OrganizationProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminProfile`: Exposes CRUD operations for the **AdminProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminProfiles
    * const adminProfiles = await prisma.adminProfile.findMany()
    * ```
    */
  get adminProfile(): Prisma.AdminProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactionRequest`: Exposes CRUD operations for the **TransactionRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransactionRequests
    * const transactionRequests = await prisma.transactionRequest.findMany()
    * ```
    */
  get transactionRequest(): Prisma.TransactionRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aiLog`: Exposes CRUD operations for the **AiLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AiLogs
    * const aiLogs = await prisma.aiLog.findMany()
    * ```
    */
  get aiLog(): Prisma.AiLogDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    UserProfile: 'UserProfile',
    OrganizationProfile: 'OrganizationProfile',
    AdminProfile: 'AdminProfile',
    Post: 'Post',
    TransactionRequest: 'TransactionRequest',
    Review: 'Review',
    AiLog: 'AiLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userProfile" | "organizationProfile" | "adminProfile" | "post" | "transactionRequest" | "review" | "aiLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      OrganizationProfile: {
        payload: Prisma.$OrganizationProfilePayload<ExtArgs>
        fields: Prisma.OrganizationProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationProfilePayload>
          }
          findFirst: {
            args: Prisma.OrganizationProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationProfilePayload>
          }
          findMany: {
            args: Prisma.OrganizationProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationProfilePayload>[]
          }
          create: {
            args: Prisma.OrganizationProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationProfilePayload>
          }
          createMany: {
            args: Prisma.OrganizationProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationProfilePayload>[]
          }
          delete: {
            args: Prisma.OrganizationProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationProfilePayload>
          }
          update: {
            args: Prisma.OrganizationProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationProfilePayload>
          }
          deleteMany: {
            args: Prisma.OrganizationProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationProfilePayload>[]
          }
          upsert: {
            args: Prisma.OrganizationProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationProfilePayload>
          }
          aggregate: {
            args: Prisma.OrganizationProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganizationProfile>
          }
          groupBy: {
            args: Prisma.OrganizationProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationProfileCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationProfileCountAggregateOutputType> | number
          }
        }
      }
      AdminProfile: {
        payload: Prisma.$AdminProfilePayload<ExtArgs>
        fields: Prisma.AdminProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload>
          }
          findFirst: {
            args: Prisma.AdminProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload>
          }
          findMany: {
            args: Prisma.AdminProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload>[]
          }
          create: {
            args: Prisma.AdminProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload>
          }
          createMany: {
            args: Prisma.AdminProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload>[]
          }
          delete: {
            args: Prisma.AdminProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload>
          }
          update: {
            args: Prisma.AdminProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload>
          }
          deleteMany: {
            args: Prisma.AdminProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload>[]
          }
          upsert: {
            args: Prisma.AdminProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload>
          }
          aggregate: {
            args: Prisma.AdminProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminProfile>
          }
          groupBy: {
            args: Prisma.AdminProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminProfileCountArgs<ExtArgs>
            result: $Utils.Optional<AdminProfileCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      TransactionRequest: {
        payload: Prisma.$TransactionRequestPayload<ExtArgs>
        fields: Prisma.TransactionRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionRequestPayload>
          }
          findFirst: {
            args: Prisma.TransactionRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionRequestPayload>
          }
          findMany: {
            args: Prisma.TransactionRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionRequestPayload>[]
          }
          create: {
            args: Prisma.TransactionRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionRequestPayload>
          }
          createMany: {
            args: Prisma.TransactionRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionRequestPayload>[]
          }
          delete: {
            args: Prisma.TransactionRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionRequestPayload>
          }
          update: {
            args: Prisma.TransactionRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionRequestPayload>
          }
          deleteMany: {
            args: Prisma.TransactionRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionRequestPayload>[]
          }
          upsert: {
            args: Prisma.TransactionRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionRequestPayload>
          }
          aggregate: {
            args: Prisma.TransactionRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactionRequest>
          }
          groupBy: {
            args: Prisma.TransactionRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionRequestCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionRequestCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      AiLog: {
        payload: Prisma.$AiLogPayload<ExtArgs>
        fields: Prisma.AiLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AiLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AiLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiLogPayload>
          }
          findFirst: {
            args: Prisma.AiLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AiLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiLogPayload>
          }
          findMany: {
            args: Prisma.AiLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiLogPayload>[]
          }
          create: {
            args: Prisma.AiLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiLogPayload>
          }
          createMany: {
            args: Prisma.AiLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AiLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiLogPayload>[]
          }
          delete: {
            args: Prisma.AiLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiLogPayload>
          }
          update: {
            args: Prisma.AiLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiLogPayload>
          }
          deleteMany: {
            args: Prisma.AiLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AiLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AiLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiLogPayload>[]
          }
          upsert: {
            args: Prisma.AiLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiLogPayload>
          }
          aggregate: {
            args: Prisma.AiLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAiLog>
          }
          groupBy: {
            args: Prisma.AiLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AiLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AiLogCountArgs<ExtArgs>
            result: $Utils.Optional<AiLogCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userProfile?: UserProfileOmit
    organizationProfile?: OrganizationProfileOmit
    adminProfile?: AdminProfileOmit
    post?: PostOmit
    transactionRequest?: TransactionRequestOmit
    review?: ReviewOmit
    aiLog?: AiLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    posts: number
    transactionRequests: number
    reviewsGiven: number
    reviewsReceived: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    transactionRequests?: boolean | UserCountOutputTypeCountTransactionRequestsArgs
    reviewsGiven?: boolean | UserCountOutputTypeCountReviewsGivenArgs
    reviewsReceived?: boolean | UserCountOutputTypeCountReviewsReceivedArgs
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
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    transactionRequests: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactionRequests?: boolean | PostCountOutputTypeCountTransactionRequestsArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountTransactionRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionRequestWhereInput
  }


  /**
   * Count Type TransactionRequestCountOutputType
   */

  export type TransactionRequestCountOutputType = {
    reviews: number
  }

  export type TransactionRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | TransactionRequestCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * TransactionRequestCountOutputType without action
   */
  export type TransactionRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionRequestCountOutputType
     */
    select?: TransactionRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransactionRequestCountOutputType without action
   */
  export type TransactionRequestCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    phone: string | null
    role: $Enums.UserRole | null
    status: $Enums.AccountStatus | null
    profilePictureUrl: string | null
    needsPasswordChange: boolean | null
    authProvider: string | null
    isVerified: boolean | null
    otp: string | null
    otpExpiry: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    phone: string | null
    role: $Enums.UserRole | null
    status: $Enums.AccountStatus | null
    profilePictureUrl: string | null
    needsPasswordChange: boolean | null
    authProvider: string | null
    isVerified: boolean | null
    otp: string | null
    otpExpiry: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    phone: number
    role: number
    status: number
    profilePictureUrl: number
    needsPasswordChange: number
    authProvider: number
    isVerified: number
    otp: number
    otpExpiry: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    phone?: true
    role?: true
    status?: true
    profilePictureUrl?: true
    needsPasswordChange?: true
    authProvider?: true
    isVerified?: true
    otp?: true
    otpExpiry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    phone?: true
    role?: true
    status?: true
    profilePictureUrl?: true
    needsPasswordChange?: true
    authProvider?: true
    isVerified?: true
    otp?: true
    otpExpiry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    phone?: true
    role?: true
    status?: true
    profilePictureUrl?: true
    needsPasswordChange?: true
    authProvider?: true
    isVerified?: true
    otp?: true
    otpExpiry?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string | null
    phone: string | null
    role: $Enums.UserRole
    status: $Enums.AccountStatus
    profilePictureUrl: string | null
    needsPasswordChange: boolean
    authProvider: string | null
    isVerified: boolean
    otp: string | null
    otpExpiry: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    phone?: boolean
    role?: boolean
    status?: boolean
    profilePictureUrl?: boolean
    needsPasswordChange?: boolean
    authProvider?: boolean
    isVerified?: boolean
    otp?: boolean
    otpExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userProfile?: boolean | User$userProfileArgs<ExtArgs>
    organizationProfile?: boolean | User$organizationProfileArgs<ExtArgs>
    adminProfile?: boolean | User$adminProfileArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    transactionRequests?: boolean | User$transactionRequestsArgs<ExtArgs>
    reviewsGiven?: boolean | User$reviewsGivenArgs<ExtArgs>
    reviewsReceived?: boolean | User$reviewsReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    phone?: boolean
    role?: boolean
    status?: boolean
    profilePictureUrl?: boolean
    needsPasswordChange?: boolean
    authProvider?: boolean
    isVerified?: boolean
    otp?: boolean
    otpExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    phone?: boolean
    role?: boolean
    status?: boolean
    profilePictureUrl?: boolean
    needsPasswordChange?: boolean
    authProvider?: boolean
    isVerified?: boolean
    otp?: boolean
    otpExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    phone?: boolean
    role?: boolean
    status?: boolean
    profilePictureUrl?: boolean
    needsPasswordChange?: boolean
    authProvider?: boolean
    isVerified?: boolean
    otp?: boolean
    otpExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "phone" | "role" | "status" | "profilePictureUrl" | "needsPasswordChange" | "authProvider" | "isVerified" | "otp" | "otpExpiry" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userProfile?: boolean | User$userProfileArgs<ExtArgs>
    organizationProfile?: boolean | User$organizationProfileArgs<ExtArgs>
    adminProfile?: boolean | User$adminProfileArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    transactionRequests?: boolean | User$transactionRequestsArgs<ExtArgs>
    reviewsGiven?: boolean | User$reviewsGivenArgs<ExtArgs>
    reviewsReceived?: boolean | User$reviewsReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userProfile: Prisma.$UserProfilePayload<ExtArgs> | null
      organizationProfile: Prisma.$OrganizationProfilePayload<ExtArgs> | null
      adminProfile: Prisma.$AdminProfilePayload<ExtArgs> | null
      posts: Prisma.$PostPayload<ExtArgs>[]
      transactionRequests: Prisma.$TransactionRequestPayload<ExtArgs>[]
      reviewsGiven: Prisma.$ReviewPayload<ExtArgs>[]
      reviewsReceived: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string | null
      phone: string | null
      role: $Enums.UserRole
      status: $Enums.AccountStatus
      profilePictureUrl: string | null
      needsPasswordChange: boolean
      authProvider: string | null
      isVerified: boolean
      otp: string | null
      otpExpiry: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userProfile<T extends User$userProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$userProfileArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    organizationProfile<T extends User$organizationProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$organizationProfileArgs<ExtArgs>>): Prisma__OrganizationProfileClient<$Result.GetResult<Prisma.$OrganizationProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    adminProfile<T extends User$adminProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$adminProfileArgs<ExtArgs>>): Prisma__AdminProfileClient<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactionRequests<T extends User$transactionRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewsGiven<T extends User$reviewsGivenArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsGivenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewsReceived<T extends User$reviewsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly status: FieldRef<"User", 'AccountStatus'>
    readonly profilePictureUrl: FieldRef<"User", 'String'>
    readonly needsPasswordChange: FieldRef<"User", 'Boolean'>
    readonly authProvider: FieldRef<"User", 'String'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly otp: FieldRef<"User", 'String'>
    readonly otpExpiry: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.userProfile
   */
  export type User$userProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    where?: UserProfileWhereInput
  }

  /**
   * User.organizationProfile
   */
  export type User$organizationProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationProfile
     */
    select?: OrganizationProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationProfile
     */
    omit?: OrganizationProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationProfileInclude<ExtArgs> | null
    where?: OrganizationProfileWhereInput
  }

  /**
   * User.adminProfile
   */
  export type User$adminProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminProfile
     */
    omit?: AdminProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminProfileInclude<ExtArgs> | null
    where?: AdminProfileWhereInput
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.transactionRequests
   */
  export type User$transactionRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionRequest
     */
    select?: TransactionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionRequest
     */
    omit?: TransactionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionRequestInclude<ExtArgs> | null
    where?: TransactionRequestWhereInput
    orderBy?: TransactionRequestOrderByWithRelationInput | TransactionRequestOrderByWithRelationInput[]
    cursor?: TransactionRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionRequestScalarFieldEnum | TransactionRequestScalarFieldEnum[]
  }

  /**
   * User.reviewsGiven
   */
  export type User$reviewsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.reviewsReceived
   */
  export type User$reviewsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    impactScore: number | null
  }

  export type UserProfileSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    impactScore: number | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    latitude: number | null
    longitude: number | null
    impactScore: number | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    latitude: number | null
    longitude: number | null
    impactScore: number | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    latitude: number
    longitude: number
    impactScore: number
    _all: number
  }


  export type UserProfileAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    impactScore?: true
  }

  export type UserProfileSumAggregateInputType = {
    latitude?: true
    longitude?: true
    impactScore?: true
  }

  export type UserProfileMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    latitude?: true
    longitude?: true
    impactScore?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    latitude?: true
    longitude?: true
    impactScore?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    latitude?: true
    longitude?: true
    impactScore?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _avg?: UserProfileAvgAggregateInputType
    _sum?: UserProfileSumAggregateInputType
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    id: string
    userId: string
    name: string
    latitude: number | null
    longitude: number | null
    impactScore: number
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    latitude?: boolean
    longitude?: boolean
    impactScore?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    latitude?: boolean
    longitude?: boolean
    impactScore?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    latitude?: boolean
    longitude?: boolean
    impactScore?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    latitude?: boolean
    longitude?: boolean
    impactScore?: boolean
  }

  export type UserProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "latitude" | "longitude" | "impactScore", ExtArgs["result"]["userProfile"]>
  export type UserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      latitude: number | null
      longitude: number | null
      impactScore: number
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfileCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles and returns the data updated in the database.
     * @param {UserProfileUpdateManyAndReturnArgs} args - Arguments to update many UserProfiles.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
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
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserProfile model
   */
  interface UserProfileFieldRefs {
    readonly id: FieldRef<"UserProfile", 'String'>
    readonly userId: FieldRef<"UserProfile", 'String'>
    readonly name: FieldRef<"UserProfile", 'String'>
    readonly latitude: FieldRef<"UserProfile", 'Float'>
    readonly longitude: FieldRef<"UserProfile", 'Float'>
    readonly impactScore: FieldRef<"UserProfile", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile createManyAndReturn
   */
  export type UserProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile updateManyAndReturn
   */
  export type UserProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
  }


  /**
   * Model OrganizationProfile
   */

  export type AggregateOrganizationProfile = {
    _count: OrganizationProfileCountAggregateOutputType | null
    _avg: OrganizationProfileAvgAggregateOutputType | null
    _sum: OrganizationProfileSumAggregateOutputType | null
    _min: OrganizationProfileMinAggregateOutputType | null
    _max: OrganizationProfileMaxAggregateOutputType | null
  }

  export type OrganizationProfileAvgAggregateOutputType = {
    establishedYear: number | null
    latitude: number | null
    longitude: number | null
    impactScore: number | null
  }

  export type OrganizationProfileSumAggregateOutputType = {
    establishedYear: number | null
    latitude: number | null
    longitude: number | null
    impactScore: number | null
  }

  export type OrganizationProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    orgName: string | null
    establishedYear: number | null
    registrationNumber: string | null
    latitude: number | null
    longitude: number | null
    impactScore: number | null
  }

  export type OrganizationProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    orgName: string | null
    establishedYear: number | null
    registrationNumber: string | null
    latitude: number | null
    longitude: number | null
    impactScore: number | null
  }

  export type OrganizationProfileCountAggregateOutputType = {
    id: number
    userId: number
    orgName: number
    establishedYear: number
    registrationNumber: number
    latitude: number
    longitude: number
    impactScore: number
    _all: number
  }


  export type OrganizationProfileAvgAggregateInputType = {
    establishedYear?: true
    latitude?: true
    longitude?: true
    impactScore?: true
  }

  export type OrganizationProfileSumAggregateInputType = {
    establishedYear?: true
    latitude?: true
    longitude?: true
    impactScore?: true
  }

  export type OrganizationProfileMinAggregateInputType = {
    id?: true
    userId?: true
    orgName?: true
    establishedYear?: true
    registrationNumber?: true
    latitude?: true
    longitude?: true
    impactScore?: true
  }

  export type OrganizationProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    orgName?: true
    establishedYear?: true
    registrationNumber?: true
    latitude?: true
    longitude?: true
    impactScore?: true
  }

  export type OrganizationProfileCountAggregateInputType = {
    id?: true
    userId?: true
    orgName?: true
    establishedYear?: true
    registrationNumber?: true
    latitude?: true
    longitude?: true
    impactScore?: true
    _all?: true
  }

  export type OrganizationProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationProfile to aggregate.
     */
    where?: OrganizationProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationProfiles to fetch.
     */
    orderBy?: OrganizationProfileOrderByWithRelationInput | OrganizationProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrganizationProfiles
    **/
    _count?: true | OrganizationProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationProfileMaxAggregateInputType
  }

  export type GetOrganizationProfileAggregateType<T extends OrganizationProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganizationProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizationProfile[P]>
      : GetScalarType<T[P], AggregateOrganizationProfile[P]>
  }




  export type OrganizationProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationProfileWhereInput
    orderBy?: OrganizationProfileOrderByWithAggregationInput | OrganizationProfileOrderByWithAggregationInput[]
    by: OrganizationProfileScalarFieldEnum[] | OrganizationProfileScalarFieldEnum
    having?: OrganizationProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationProfileCountAggregateInputType | true
    _avg?: OrganizationProfileAvgAggregateInputType
    _sum?: OrganizationProfileSumAggregateInputType
    _min?: OrganizationProfileMinAggregateInputType
    _max?: OrganizationProfileMaxAggregateInputType
  }

  export type OrganizationProfileGroupByOutputType = {
    id: string
    userId: string
    orgName: string
    establishedYear: number | null
    registrationNumber: string | null
    latitude: number
    longitude: number
    impactScore: number
    _count: OrganizationProfileCountAggregateOutputType | null
    _avg: OrganizationProfileAvgAggregateOutputType | null
    _sum: OrganizationProfileSumAggregateOutputType | null
    _min: OrganizationProfileMinAggregateOutputType | null
    _max: OrganizationProfileMaxAggregateOutputType | null
  }

  type GetOrganizationProfileGroupByPayload<T extends OrganizationProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationProfileGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationProfileGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    orgName?: boolean
    establishedYear?: boolean
    registrationNumber?: boolean
    latitude?: boolean
    longitude?: boolean
    impactScore?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationProfile"]>

  export type OrganizationProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    orgName?: boolean
    establishedYear?: boolean
    registrationNumber?: boolean
    latitude?: boolean
    longitude?: boolean
    impactScore?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationProfile"]>

  export type OrganizationProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    orgName?: boolean
    establishedYear?: boolean
    registrationNumber?: boolean
    latitude?: boolean
    longitude?: boolean
    impactScore?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationProfile"]>

  export type OrganizationProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    orgName?: boolean
    establishedYear?: boolean
    registrationNumber?: boolean
    latitude?: boolean
    longitude?: boolean
    impactScore?: boolean
  }

  export type OrganizationProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "orgName" | "establishedYear" | "registrationNumber" | "latitude" | "longitude" | "impactScore", ExtArgs["result"]["organizationProfile"]>
  export type OrganizationProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrganizationProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrganizationProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrganizationProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrganizationProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      orgName: string
      establishedYear: number | null
      registrationNumber: string | null
      latitude: number
      longitude: number
      impactScore: number
    }, ExtArgs["result"]["organizationProfile"]>
    composites: {}
  }

  type OrganizationProfileGetPayload<S extends boolean | null | undefined | OrganizationProfileDefaultArgs> = $Result.GetResult<Prisma.$OrganizationProfilePayload, S>

  type OrganizationProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationProfileCountAggregateInputType | true
    }

  export interface OrganizationProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrganizationProfile'], meta: { name: 'OrganizationProfile' } }
    /**
     * Find zero or one OrganizationProfile that matches the filter.
     * @param {OrganizationProfileFindUniqueArgs} args - Arguments to find a OrganizationProfile
     * @example
     * // Get one OrganizationProfile
     * const organizationProfile = await prisma.organizationProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationProfileFindUniqueArgs>(args: SelectSubset<T, OrganizationProfileFindUniqueArgs<ExtArgs>>): Prisma__OrganizationProfileClient<$Result.GetResult<Prisma.$OrganizationProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrganizationProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationProfileFindUniqueOrThrowArgs} args - Arguments to find a OrganizationProfile
     * @example
     * // Get one OrganizationProfile
     * const organizationProfile = await prisma.organizationProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationProfileClient<$Result.GetResult<Prisma.$OrganizationProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationProfileFindFirstArgs} args - Arguments to find a OrganizationProfile
     * @example
     * // Get one OrganizationProfile
     * const organizationProfile = await prisma.organizationProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationProfileFindFirstArgs>(args?: SelectSubset<T, OrganizationProfileFindFirstArgs<ExtArgs>>): Prisma__OrganizationProfileClient<$Result.GetResult<Prisma.$OrganizationProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationProfileFindFirstOrThrowArgs} args - Arguments to find a OrganizationProfile
     * @example
     * // Get one OrganizationProfile
     * const organizationProfile = await prisma.organizationProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationProfileClient<$Result.GetResult<Prisma.$OrganizationProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrganizationProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrganizationProfiles
     * const organizationProfiles = await prisma.organizationProfile.findMany()
     * 
     * // Get first 10 OrganizationProfiles
     * const organizationProfiles = await prisma.organizationProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationProfileWithIdOnly = await prisma.organizationProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationProfileFindManyArgs>(args?: SelectSubset<T, OrganizationProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrganizationProfile.
     * @param {OrganizationProfileCreateArgs} args - Arguments to create a OrganizationProfile.
     * @example
     * // Create one OrganizationProfile
     * const OrganizationProfile = await prisma.organizationProfile.create({
     *   data: {
     *     // ... data to create a OrganizationProfile
     *   }
     * })
     * 
     */
    create<T extends OrganizationProfileCreateArgs>(args: SelectSubset<T, OrganizationProfileCreateArgs<ExtArgs>>): Prisma__OrganizationProfileClient<$Result.GetResult<Prisma.$OrganizationProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrganizationProfiles.
     * @param {OrganizationProfileCreateManyArgs} args - Arguments to create many OrganizationProfiles.
     * @example
     * // Create many OrganizationProfiles
     * const organizationProfile = await prisma.organizationProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationProfileCreateManyArgs>(args?: SelectSubset<T, OrganizationProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrganizationProfiles and returns the data saved in the database.
     * @param {OrganizationProfileCreateManyAndReturnArgs} args - Arguments to create many OrganizationProfiles.
     * @example
     * // Create many OrganizationProfiles
     * const organizationProfile = await prisma.organizationProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrganizationProfiles and only return the `id`
     * const organizationProfileWithIdOnly = await prisma.organizationProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrganizationProfile.
     * @param {OrganizationProfileDeleteArgs} args - Arguments to delete one OrganizationProfile.
     * @example
     * // Delete one OrganizationProfile
     * const OrganizationProfile = await prisma.organizationProfile.delete({
     *   where: {
     *     // ... filter to delete one OrganizationProfile
     *   }
     * })
     * 
     */
    delete<T extends OrganizationProfileDeleteArgs>(args: SelectSubset<T, OrganizationProfileDeleteArgs<ExtArgs>>): Prisma__OrganizationProfileClient<$Result.GetResult<Prisma.$OrganizationProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrganizationProfile.
     * @param {OrganizationProfileUpdateArgs} args - Arguments to update one OrganizationProfile.
     * @example
     * // Update one OrganizationProfile
     * const organizationProfile = await prisma.organizationProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationProfileUpdateArgs>(args: SelectSubset<T, OrganizationProfileUpdateArgs<ExtArgs>>): Prisma__OrganizationProfileClient<$Result.GetResult<Prisma.$OrganizationProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrganizationProfiles.
     * @param {OrganizationProfileDeleteManyArgs} args - Arguments to filter OrganizationProfiles to delete.
     * @example
     * // Delete a few OrganizationProfiles
     * const { count } = await prisma.organizationProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationProfileDeleteManyArgs>(args?: SelectSubset<T, OrganizationProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrganizationProfiles
     * const organizationProfile = await prisma.organizationProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationProfileUpdateManyArgs>(args: SelectSubset<T, OrganizationProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationProfiles and returns the data updated in the database.
     * @param {OrganizationProfileUpdateManyAndReturnArgs} args - Arguments to update many OrganizationProfiles.
     * @example
     * // Update many OrganizationProfiles
     * const organizationProfile = await prisma.organizationProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrganizationProfiles and only return the `id`
     * const organizationProfileWithIdOnly = await prisma.organizationProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrganizationProfile.
     * @param {OrganizationProfileUpsertArgs} args - Arguments to update or create a OrganizationProfile.
     * @example
     * // Update or create a OrganizationProfile
     * const organizationProfile = await prisma.organizationProfile.upsert({
     *   create: {
     *     // ... data to create a OrganizationProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrganizationProfile we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationProfileUpsertArgs>(args: SelectSubset<T, OrganizationProfileUpsertArgs<ExtArgs>>): Prisma__OrganizationProfileClient<$Result.GetResult<Prisma.$OrganizationProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrganizationProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationProfileCountArgs} args - Arguments to filter OrganizationProfiles to count.
     * @example
     * // Count the number of OrganizationProfiles
     * const count = await prisma.organizationProfile.count({
     *   where: {
     *     // ... the filter for the OrganizationProfiles we want to count
     *   }
     * })
    **/
    count<T extends OrganizationProfileCountArgs>(
      args?: Subset<T, OrganizationProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrganizationProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationProfileAggregateArgs>(args: Subset<T, OrganizationProfileAggregateArgs>): Prisma.PrismaPromise<GetOrganizationProfileAggregateType<T>>

    /**
     * Group by OrganizationProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationProfileGroupByArgs} args - Group by arguments.
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
      T extends OrganizationProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationProfileGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrganizationProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrganizationProfile model
   */
  readonly fields: OrganizationProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrganizationProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OrganizationProfile model
   */
  interface OrganizationProfileFieldRefs {
    readonly id: FieldRef<"OrganizationProfile", 'String'>
    readonly userId: FieldRef<"OrganizationProfile", 'String'>
    readonly orgName: FieldRef<"OrganizationProfile", 'String'>
    readonly establishedYear: FieldRef<"OrganizationProfile", 'Int'>
    readonly registrationNumber: FieldRef<"OrganizationProfile", 'String'>
    readonly latitude: FieldRef<"OrganizationProfile", 'Float'>
    readonly longitude: FieldRef<"OrganizationProfile", 'Float'>
    readonly impactScore: FieldRef<"OrganizationProfile", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * OrganizationProfile findUnique
   */
  export type OrganizationProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationProfile
     */
    select?: OrganizationProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationProfile
     */
    omit?: OrganizationProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationProfileInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationProfile to fetch.
     */
    where: OrganizationProfileWhereUniqueInput
  }

  /**
   * OrganizationProfile findUniqueOrThrow
   */
  export type OrganizationProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationProfile
     */
    select?: OrganizationProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationProfile
     */
    omit?: OrganizationProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationProfileInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationProfile to fetch.
     */
    where: OrganizationProfileWhereUniqueInput
  }

  /**
   * OrganizationProfile findFirst
   */
  export type OrganizationProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationProfile
     */
    select?: OrganizationProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationProfile
     */
    omit?: OrganizationProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationProfileInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationProfile to fetch.
     */
    where?: OrganizationProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationProfiles to fetch.
     */
    orderBy?: OrganizationProfileOrderByWithRelationInput | OrganizationProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationProfiles.
     */
    cursor?: OrganizationProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationProfiles.
     */
    distinct?: OrganizationProfileScalarFieldEnum | OrganizationProfileScalarFieldEnum[]
  }

  /**
   * OrganizationProfile findFirstOrThrow
   */
  export type OrganizationProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationProfile
     */
    select?: OrganizationProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationProfile
     */
    omit?: OrganizationProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationProfileInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationProfile to fetch.
     */
    where?: OrganizationProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationProfiles to fetch.
     */
    orderBy?: OrganizationProfileOrderByWithRelationInput | OrganizationProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationProfiles.
     */
    cursor?: OrganizationProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationProfiles.
     */
    distinct?: OrganizationProfileScalarFieldEnum | OrganizationProfileScalarFieldEnum[]
  }

  /**
   * OrganizationProfile findMany
   */
  export type OrganizationProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationProfile
     */
    select?: OrganizationProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationProfile
     */
    omit?: OrganizationProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationProfileInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationProfiles to fetch.
     */
    where?: OrganizationProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationProfiles to fetch.
     */
    orderBy?: OrganizationProfileOrderByWithRelationInput | OrganizationProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrganizationProfiles.
     */
    cursor?: OrganizationProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationProfiles.
     */
    distinct?: OrganizationProfileScalarFieldEnum | OrganizationProfileScalarFieldEnum[]
  }

  /**
   * OrganizationProfile create
   */
  export type OrganizationProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationProfile
     */
    select?: OrganizationProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationProfile
     */
    omit?: OrganizationProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a OrganizationProfile.
     */
    data: XOR<OrganizationProfileCreateInput, OrganizationProfileUncheckedCreateInput>
  }

  /**
   * OrganizationProfile createMany
   */
  export type OrganizationProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrganizationProfiles.
     */
    data: OrganizationProfileCreateManyInput | OrganizationProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrganizationProfile createManyAndReturn
   */
  export type OrganizationProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationProfile
     */
    select?: OrganizationProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationProfile
     */
    omit?: OrganizationProfileOmit<ExtArgs> | null
    /**
     * The data used to create many OrganizationProfiles.
     */
    data: OrganizationProfileCreateManyInput | OrganizationProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrganizationProfile update
   */
  export type OrganizationProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationProfile
     */
    select?: OrganizationProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationProfile
     */
    omit?: OrganizationProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a OrganizationProfile.
     */
    data: XOR<OrganizationProfileUpdateInput, OrganizationProfileUncheckedUpdateInput>
    /**
     * Choose, which OrganizationProfile to update.
     */
    where: OrganizationProfileWhereUniqueInput
  }

  /**
   * OrganizationProfile updateMany
   */
  export type OrganizationProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrganizationProfiles.
     */
    data: XOR<OrganizationProfileUpdateManyMutationInput, OrganizationProfileUncheckedUpdateManyInput>
    /**
     * Filter which OrganizationProfiles to update
     */
    where?: OrganizationProfileWhereInput
    /**
     * Limit how many OrganizationProfiles to update.
     */
    limit?: number
  }

  /**
   * OrganizationProfile updateManyAndReturn
   */
  export type OrganizationProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationProfile
     */
    select?: OrganizationProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationProfile
     */
    omit?: OrganizationProfileOmit<ExtArgs> | null
    /**
     * The data used to update OrganizationProfiles.
     */
    data: XOR<OrganizationProfileUpdateManyMutationInput, OrganizationProfileUncheckedUpdateManyInput>
    /**
     * Filter which OrganizationProfiles to update
     */
    where?: OrganizationProfileWhereInput
    /**
     * Limit how many OrganizationProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrganizationProfile upsert
   */
  export type OrganizationProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationProfile
     */
    select?: OrganizationProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationProfile
     */
    omit?: OrganizationProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the OrganizationProfile to update in case it exists.
     */
    where: OrganizationProfileWhereUniqueInput
    /**
     * In case the OrganizationProfile found by the `where` argument doesn't exist, create a new OrganizationProfile with this data.
     */
    create: XOR<OrganizationProfileCreateInput, OrganizationProfileUncheckedCreateInput>
    /**
     * In case the OrganizationProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationProfileUpdateInput, OrganizationProfileUncheckedUpdateInput>
  }

  /**
   * OrganizationProfile delete
   */
  export type OrganizationProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationProfile
     */
    select?: OrganizationProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationProfile
     */
    omit?: OrganizationProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationProfileInclude<ExtArgs> | null
    /**
     * Filter which OrganizationProfile to delete.
     */
    where: OrganizationProfileWhereUniqueInput
  }

  /**
   * OrganizationProfile deleteMany
   */
  export type OrganizationProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationProfiles to delete
     */
    where?: OrganizationProfileWhereInput
    /**
     * Limit how many OrganizationProfiles to delete.
     */
    limit?: number
  }

  /**
   * OrganizationProfile without action
   */
  export type OrganizationProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationProfile
     */
    select?: OrganizationProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationProfile
     */
    omit?: OrganizationProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationProfileInclude<ExtArgs> | null
  }


  /**
   * Model AdminProfile
   */

  export type AggregateAdminProfile = {
    _count: AdminProfileCountAggregateOutputType | null
    _min: AdminProfileMinAggregateOutputType | null
    _max: AdminProfileMaxAggregateOutputType | null
  }

  export type AdminProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    department: string | null
  }

  export type AdminProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    department: string | null
  }

  export type AdminProfileCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    department: number
    _all: number
  }


  export type AdminProfileMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    department?: true
  }

  export type AdminProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    department?: true
  }

  export type AdminProfileCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    department?: true
    _all?: true
  }

  export type AdminProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminProfile to aggregate.
     */
    where?: AdminProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminProfiles to fetch.
     */
    orderBy?: AdminProfileOrderByWithRelationInput | AdminProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminProfiles
    **/
    _count?: true | AdminProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminProfileMaxAggregateInputType
  }

  export type GetAdminProfileAggregateType<T extends AdminProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminProfile[P]>
      : GetScalarType<T[P], AggregateAdminProfile[P]>
  }




  export type AdminProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminProfileWhereInput
    orderBy?: AdminProfileOrderByWithAggregationInput | AdminProfileOrderByWithAggregationInput[]
    by: AdminProfileScalarFieldEnum[] | AdminProfileScalarFieldEnum
    having?: AdminProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminProfileCountAggregateInputType | true
    _min?: AdminProfileMinAggregateInputType
    _max?: AdminProfileMaxAggregateInputType
  }

  export type AdminProfileGroupByOutputType = {
    id: string
    userId: string
    name: string
    department: string | null
    _count: AdminProfileCountAggregateOutputType | null
    _min: AdminProfileMinAggregateOutputType | null
    _max: AdminProfileMaxAggregateOutputType | null
  }

  type GetAdminProfileGroupByPayload<T extends AdminProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminProfileGroupByOutputType[P]>
            : GetScalarType<T[P], AdminProfileGroupByOutputType[P]>
        }
      >
    >


  export type AdminProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    department?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminProfile"]>

  export type AdminProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    department?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminProfile"]>

  export type AdminProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    department?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminProfile"]>

  export type AdminProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    department?: boolean
  }

  export type AdminProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "department", ExtArgs["result"]["adminProfile"]>
  export type AdminProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdminProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      department: string | null
    }, ExtArgs["result"]["adminProfile"]>
    composites: {}
  }

  type AdminProfileGetPayload<S extends boolean | null | undefined | AdminProfileDefaultArgs> = $Result.GetResult<Prisma.$AdminProfilePayload, S>

  type AdminProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminProfileCountAggregateInputType | true
    }

  export interface AdminProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminProfile'], meta: { name: 'AdminProfile' } }
    /**
     * Find zero or one AdminProfile that matches the filter.
     * @param {AdminProfileFindUniqueArgs} args - Arguments to find a AdminProfile
     * @example
     * // Get one AdminProfile
     * const adminProfile = await prisma.adminProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminProfileFindUniqueArgs>(args: SelectSubset<T, AdminProfileFindUniqueArgs<ExtArgs>>): Prisma__AdminProfileClient<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminProfileFindUniqueOrThrowArgs} args - Arguments to find a AdminProfile
     * @example
     * // Get one AdminProfile
     * const adminProfile = await prisma.adminProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminProfileClient<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminProfileFindFirstArgs} args - Arguments to find a AdminProfile
     * @example
     * // Get one AdminProfile
     * const adminProfile = await prisma.adminProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminProfileFindFirstArgs>(args?: SelectSubset<T, AdminProfileFindFirstArgs<ExtArgs>>): Prisma__AdminProfileClient<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminProfileFindFirstOrThrowArgs} args - Arguments to find a AdminProfile
     * @example
     * // Get one AdminProfile
     * const adminProfile = await prisma.adminProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminProfileClient<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminProfiles
     * const adminProfiles = await prisma.adminProfile.findMany()
     * 
     * // Get first 10 AdminProfiles
     * const adminProfiles = await prisma.adminProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminProfileWithIdOnly = await prisma.adminProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminProfileFindManyArgs>(args?: SelectSubset<T, AdminProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminProfile.
     * @param {AdminProfileCreateArgs} args - Arguments to create a AdminProfile.
     * @example
     * // Create one AdminProfile
     * const AdminProfile = await prisma.adminProfile.create({
     *   data: {
     *     // ... data to create a AdminProfile
     *   }
     * })
     * 
     */
    create<T extends AdminProfileCreateArgs>(args: SelectSubset<T, AdminProfileCreateArgs<ExtArgs>>): Prisma__AdminProfileClient<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminProfiles.
     * @param {AdminProfileCreateManyArgs} args - Arguments to create many AdminProfiles.
     * @example
     * // Create many AdminProfiles
     * const adminProfile = await prisma.adminProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminProfileCreateManyArgs>(args?: SelectSubset<T, AdminProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminProfiles and returns the data saved in the database.
     * @param {AdminProfileCreateManyAndReturnArgs} args - Arguments to create many AdminProfiles.
     * @example
     * // Create many AdminProfiles
     * const adminProfile = await prisma.adminProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminProfiles and only return the `id`
     * const adminProfileWithIdOnly = await prisma.adminProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminProfile.
     * @param {AdminProfileDeleteArgs} args - Arguments to delete one AdminProfile.
     * @example
     * // Delete one AdminProfile
     * const AdminProfile = await prisma.adminProfile.delete({
     *   where: {
     *     // ... filter to delete one AdminProfile
     *   }
     * })
     * 
     */
    delete<T extends AdminProfileDeleteArgs>(args: SelectSubset<T, AdminProfileDeleteArgs<ExtArgs>>): Prisma__AdminProfileClient<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminProfile.
     * @param {AdminProfileUpdateArgs} args - Arguments to update one AdminProfile.
     * @example
     * // Update one AdminProfile
     * const adminProfile = await prisma.adminProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminProfileUpdateArgs>(args: SelectSubset<T, AdminProfileUpdateArgs<ExtArgs>>): Prisma__AdminProfileClient<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminProfiles.
     * @param {AdminProfileDeleteManyArgs} args - Arguments to filter AdminProfiles to delete.
     * @example
     * // Delete a few AdminProfiles
     * const { count } = await prisma.adminProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminProfileDeleteManyArgs>(args?: SelectSubset<T, AdminProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminProfiles
     * const adminProfile = await prisma.adminProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminProfileUpdateManyArgs>(args: SelectSubset<T, AdminProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminProfiles and returns the data updated in the database.
     * @param {AdminProfileUpdateManyAndReturnArgs} args - Arguments to update many AdminProfiles.
     * @example
     * // Update many AdminProfiles
     * const adminProfile = await prisma.adminProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminProfiles and only return the `id`
     * const adminProfileWithIdOnly = await prisma.adminProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminProfile.
     * @param {AdminProfileUpsertArgs} args - Arguments to update or create a AdminProfile.
     * @example
     * // Update or create a AdminProfile
     * const adminProfile = await prisma.adminProfile.upsert({
     *   create: {
     *     // ... data to create a AdminProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminProfile we want to update
     *   }
     * })
     */
    upsert<T extends AdminProfileUpsertArgs>(args: SelectSubset<T, AdminProfileUpsertArgs<ExtArgs>>): Prisma__AdminProfileClient<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminProfileCountArgs} args - Arguments to filter AdminProfiles to count.
     * @example
     * // Count the number of AdminProfiles
     * const count = await prisma.adminProfile.count({
     *   where: {
     *     // ... the filter for the AdminProfiles we want to count
     *   }
     * })
    **/
    count<T extends AdminProfileCountArgs>(
      args?: Subset<T, AdminProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminProfileAggregateArgs>(args: Subset<T, AdminProfileAggregateArgs>): Prisma.PrismaPromise<GetAdminProfileAggregateType<T>>

    /**
     * Group by AdminProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminProfileGroupByArgs} args - Group by arguments.
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
      T extends AdminProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminProfileGroupByArgs['orderBy'] }
        : { orderBy?: AdminProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminProfile model
   */
  readonly fields: AdminProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AdminProfile model
   */
  interface AdminProfileFieldRefs {
    readonly id: FieldRef<"AdminProfile", 'String'>
    readonly userId: FieldRef<"AdminProfile", 'String'>
    readonly name: FieldRef<"AdminProfile", 'String'>
    readonly department: FieldRef<"AdminProfile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AdminProfile findUnique
   */
  export type AdminProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminProfile
     */
    omit?: AdminProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminProfileInclude<ExtArgs> | null
    /**
     * Filter, which AdminProfile to fetch.
     */
    where: AdminProfileWhereUniqueInput
  }

  /**
   * AdminProfile findUniqueOrThrow
   */
  export type AdminProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminProfile
     */
    omit?: AdminProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminProfileInclude<ExtArgs> | null
    /**
     * Filter, which AdminProfile to fetch.
     */
    where: AdminProfileWhereUniqueInput
  }

  /**
   * AdminProfile findFirst
   */
  export type AdminProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminProfile
     */
    omit?: AdminProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminProfileInclude<ExtArgs> | null
    /**
     * Filter, which AdminProfile to fetch.
     */
    where?: AdminProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminProfiles to fetch.
     */
    orderBy?: AdminProfileOrderByWithRelationInput | AdminProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminProfiles.
     */
    cursor?: AdminProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminProfiles.
     */
    distinct?: AdminProfileScalarFieldEnum | AdminProfileScalarFieldEnum[]
  }

  /**
   * AdminProfile findFirstOrThrow
   */
  export type AdminProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminProfile
     */
    omit?: AdminProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminProfileInclude<ExtArgs> | null
    /**
     * Filter, which AdminProfile to fetch.
     */
    where?: AdminProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminProfiles to fetch.
     */
    orderBy?: AdminProfileOrderByWithRelationInput | AdminProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminProfiles.
     */
    cursor?: AdminProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminProfiles.
     */
    distinct?: AdminProfileScalarFieldEnum | AdminProfileScalarFieldEnum[]
  }

  /**
   * AdminProfile findMany
   */
  export type AdminProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminProfile
     */
    omit?: AdminProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminProfileInclude<ExtArgs> | null
    /**
     * Filter, which AdminProfiles to fetch.
     */
    where?: AdminProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminProfiles to fetch.
     */
    orderBy?: AdminProfileOrderByWithRelationInput | AdminProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminProfiles.
     */
    cursor?: AdminProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminProfiles.
     */
    distinct?: AdminProfileScalarFieldEnum | AdminProfileScalarFieldEnum[]
  }

  /**
   * AdminProfile create
   */
  export type AdminProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminProfile
     */
    omit?: AdminProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a AdminProfile.
     */
    data: XOR<AdminProfileCreateInput, AdminProfileUncheckedCreateInput>
  }

  /**
   * AdminProfile createMany
   */
  export type AdminProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminProfiles.
     */
    data: AdminProfileCreateManyInput | AdminProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminProfile createManyAndReturn
   */
  export type AdminProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminProfile
     */
    omit?: AdminProfileOmit<ExtArgs> | null
    /**
     * The data used to create many AdminProfiles.
     */
    data: AdminProfileCreateManyInput | AdminProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdminProfile update
   */
  export type AdminProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminProfile
     */
    omit?: AdminProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a AdminProfile.
     */
    data: XOR<AdminProfileUpdateInput, AdminProfileUncheckedUpdateInput>
    /**
     * Choose, which AdminProfile to update.
     */
    where: AdminProfileWhereUniqueInput
  }

  /**
   * AdminProfile updateMany
   */
  export type AdminProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminProfiles.
     */
    data: XOR<AdminProfileUpdateManyMutationInput, AdminProfileUncheckedUpdateManyInput>
    /**
     * Filter which AdminProfiles to update
     */
    where?: AdminProfileWhereInput
    /**
     * Limit how many AdminProfiles to update.
     */
    limit?: number
  }

  /**
   * AdminProfile updateManyAndReturn
   */
  export type AdminProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminProfile
     */
    omit?: AdminProfileOmit<ExtArgs> | null
    /**
     * The data used to update AdminProfiles.
     */
    data: XOR<AdminProfileUpdateManyMutationInput, AdminProfileUncheckedUpdateManyInput>
    /**
     * Filter which AdminProfiles to update
     */
    where?: AdminProfileWhereInput
    /**
     * Limit how many AdminProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdminProfile upsert
   */
  export type AdminProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminProfile
     */
    omit?: AdminProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the AdminProfile to update in case it exists.
     */
    where: AdminProfileWhereUniqueInput
    /**
     * In case the AdminProfile found by the `where` argument doesn't exist, create a new AdminProfile with this data.
     */
    create: XOR<AdminProfileCreateInput, AdminProfileUncheckedCreateInput>
    /**
     * In case the AdminProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminProfileUpdateInput, AdminProfileUncheckedUpdateInput>
  }

  /**
   * AdminProfile delete
   */
  export type AdminProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminProfile
     */
    omit?: AdminProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminProfileInclude<ExtArgs> | null
    /**
     * Filter which AdminProfile to delete.
     */
    where: AdminProfileWhereUniqueInput
  }

  /**
   * AdminProfile deleteMany
   */
  export type AdminProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminProfiles to delete
     */
    where?: AdminProfileWhereInput
    /**
     * Limit how many AdminProfiles to delete.
     */
    limit?: number
  }

  /**
   * AdminProfile without action
   */
  export type AdminProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminProfile
     */
    omit?: AdminProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminProfileInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    quantity: number | null
    latitude: number | null
    longitude: number | null
  }

  export type PostSumAggregateOutputType = {
    quantity: number | null
    latitude: number | null
    longitude: number | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    authorId: string | null
    type: $Enums.PostType | null
    category: $Enums.PostCategory | null
    title: string | null
    description: string | null
    imageUrl: string | null
    quantity: number | null
    estimatedShelfLife: Date | null
    latitude: number | null
    longitude: number | null
    status: $Enums.PostStatus | null
    createdAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    authorId: string | null
    type: $Enums.PostType | null
    category: $Enums.PostCategory | null
    title: string | null
    description: string | null
    imageUrl: string | null
    quantity: number | null
    estimatedShelfLife: Date | null
    latitude: number | null
    longitude: number | null
    status: $Enums.PostStatus | null
    createdAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    authorId: number
    type: number
    category: number
    title: number
    description: number
    imageUrl: number
    quantity: number
    estimatedShelfLife: number
    metadata: number
    latitude: number
    longitude: number
    status: number
    createdAt: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    quantity?: true
    latitude?: true
    longitude?: true
  }

  export type PostSumAggregateInputType = {
    quantity?: true
    latitude?: true
    longitude?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    authorId?: true
    type?: true
    category?: true
    title?: true
    description?: true
    imageUrl?: true
    quantity?: true
    estimatedShelfLife?: true
    latitude?: true
    longitude?: true
    status?: true
    createdAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    authorId?: true
    type?: true
    category?: true
    title?: true
    description?: true
    imageUrl?: true
    quantity?: true
    estimatedShelfLife?: true
    latitude?: true
    longitude?: true
    status?: true
    createdAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    authorId?: true
    type?: true
    category?: true
    title?: true
    description?: true
    imageUrl?: true
    quantity?: true
    estimatedShelfLife?: true
    metadata?: true
    latitude?: true
    longitude?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    authorId: string
    type: $Enums.PostType
    category: $Enums.PostCategory
    title: string
    description: string
    imageUrl: string | null
    quantity: number
    estimatedShelfLife: Date | null
    metadata: JsonValue | null
    latitude: number
    longitude: number
    status: $Enums.PostStatus
    createdAt: Date
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    type?: boolean
    category?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    quantity?: boolean
    estimatedShelfLife?: boolean
    metadata?: boolean
    latitude?: boolean
    longitude?: boolean
    status?: boolean
    createdAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    transactionRequests?: boolean | Post$transactionRequestsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    type?: boolean
    category?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    quantity?: boolean
    estimatedShelfLife?: boolean
    metadata?: boolean
    latitude?: boolean
    longitude?: boolean
    status?: boolean
    createdAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    type?: boolean
    category?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    quantity?: boolean
    estimatedShelfLife?: boolean
    metadata?: boolean
    latitude?: boolean
    longitude?: boolean
    status?: boolean
    createdAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    authorId?: boolean
    type?: boolean
    category?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    quantity?: boolean
    estimatedShelfLife?: boolean
    metadata?: boolean
    latitude?: boolean
    longitude?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "authorId" | "type" | "category" | "title" | "description" | "imageUrl" | "quantity" | "estimatedShelfLife" | "metadata" | "latitude" | "longitude" | "status" | "createdAt", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    transactionRequests?: boolean | Post$transactionRequestsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      transactionRequests: Prisma.$TransactionRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      authorId: string
      type: $Enums.PostType
      category: $Enums.PostCategory
      title: string
      description: string
      imageUrl: string | null
      quantity: number
      estimatedShelfLife: Date | null
      metadata: Prisma.JsonValue | null
      latitude: number
      longitude: number
      status: $Enums.PostStatus
      createdAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactionRequests<T extends Post$transactionRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Post$transactionRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly authorId: FieldRef<"Post", 'String'>
    readonly type: FieldRef<"Post", 'PostType'>
    readonly category: FieldRef<"Post", 'PostCategory'>
    readonly title: FieldRef<"Post", 'String'>
    readonly description: FieldRef<"Post", 'String'>
    readonly imageUrl: FieldRef<"Post", 'String'>
    readonly quantity: FieldRef<"Post", 'Int'>
    readonly estimatedShelfLife: FieldRef<"Post", 'DateTime'>
    readonly metadata: FieldRef<"Post", 'Json'>
    readonly latitude: FieldRef<"Post", 'Float'>
    readonly longitude: FieldRef<"Post", 'Float'>
    readonly status: FieldRef<"Post", 'PostStatus'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.transactionRequests
   */
  export type Post$transactionRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionRequest
     */
    select?: TransactionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionRequest
     */
    omit?: TransactionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionRequestInclude<ExtArgs> | null
    where?: TransactionRequestWhereInput
    orderBy?: TransactionRequestOrderByWithRelationInput | TransactionRequestOrderByWithRelationInput[]
    cursor?: TransactionRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionRequestScalarFieldEnum | TransactionRequestScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model TransactionRequest
   */

  export type AggregateTransactionRequest = {
    _count: TransactionRequestCountAggregateOutputType | null
    _min: TransactionRequestMinAggregateOutputType | null
    _max: TransactionRequestMaxAggregateOutputType | null
  }

  export type TransactionRequestMinAggregateOutputType = {
    id: string | null
    postId: string | null
    actorId: string | null
    quantity: string | null
    status: $Enums.TransactionStatus | null
    message: string | null
    createdAt: Date | null
  }

  export type TransactionRequestMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    actorId: string | null
    quantity: string | null
    status: $Enums.TransactionStatus | null
    message: string | null
    createdAt: Date | null
  }

  export type TransactionRequestCountAggregateOutputType = {
    id: number
    postId: number
    actorId: number
    quantity: number
    status: number
    message: number
    createdAt: number
    _all: number
  }


  export type TransactionRequestMinAggregateInputType = {
    id?: true
    postId?: true
    actorId?: true
    quantity?: true
    status?: true
    message?: true
    createdAt?: true
  }

  export type TransactionRequestMaxAggregateInputType = {
    id?: true
    postId?: true
    actorId?: true
    quantity?: true
    status?: true
    message?: true
    createdAt?: true
  }

  export type TransactionRequestCountAggregateInputType = {
    id?: true
    postId?: true
    actorId?: true
    quantity?: true
    status?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type TransactionRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionRequest to aggregate.
     */
    where?: TransactionRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionRequests to fetch.
     */
    orderBy?: TransactionRequestOrderByWithRelationInput | TransactionRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransactionRequests
    **/
    _count?: true | TransactionRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionRequestMaxAggregateInputType
  }

  export type GetTransactionRequestAggregateType<T extends TransactionRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactionRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactionRequest[P]>
      : GetScalarType<T[P], AggregateTransactionRequest[P]>
  }




  export type TransactionRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionRequestWhereInput
    orderBy?: TransactionRequestOrderByWithAggregationInput | TransactionRequestOrderByWithAggregationInput[]
    by: TransactionRequestScalarFieldEnum[] | TransactionRequestScalarFieldEnum
    having?: TransactionRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionRequestCountAggregateInputType | true
    _min?: TransactionRequestMinAggregateInputType
    _max?: TransactionRequestMaxAggregateInputType
  }

  export type TransactionRequestGroupByOutputType = {
    id: string
    postId: string
    actorId: string
    quantity: string
    status: $Enums.TransactionStatus
    message: string | null
    createdAt: Date
    _count: TransactionRequestCountAggregateOutputType | null
    _min: TransactionRequestMinAggregateOutputType | null
    _max: TransactionRequestMaxAggregateOutputType | null
  }

  type GetTransactionRequestGroupByPayload<T extends TransactionRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionRequestGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionRequestGroupByOutputType[P]>
        }
      >
    >


  export type TransactionRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    actorId?: boolean
    quantity?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    actor?: boolean | UserDefaultArgs<ExtArgs>
    reviews?: boolean | TransactionRequest$reviewsArgs<ExtArgs>
    _count?: boolean | TransactionRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionRequest"]>

  export type TransactionRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    actorId?: boolean
    quantity?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    actor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionRequest"]>

  export type TransactionRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    actorId?: boolean
    quantity?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    actor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionRequest"]>

  export type TransactionRequestSelectScalar = {
    id?: boolean
    postId?: boolean
    actorId?: boolean
    quantity?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type TransactionRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "actorId" | "quantity" | "status" | "message" | "createdAt", ExtArgs["result"]["transactionRequest"]>
  export type TransactionRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    actor?: boolean | UserDefaultArgs<ExtArgs>
    reviews?: boolean | TransactionRequest$reviewsArgs<ExtArgs>
    _count?: boolean | TransactionRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TransactionRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    actor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    actor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TransactionRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransactionRequest"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      actor: Prisma.$UserPayload<ExtArgs>
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      actorId: string
      quantity: string
      status: $Enums.TransactionStatus
      message: string | null
      createdAt: Date
    }, ExtArgs["result"]["transactionRequest"]>
    composites: {}
  }

  type TransactionRequestGetPayload<S extends boolean | null | undefined | TransactionRequestDefaultArgs> = $Result.GetResult<Prisma.$TransactionRequestPayload, S>

  type TransactionRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionRequestCountAggregateInputType | true
    }

  export interface TransactionRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransactionRequest'], meta: { name: 'TransactionRequest' } }
    /**
     * Find zero or one TransactionRequest that matches the filter.
     * @param {TransactionRequestFindUniqueArgs} args - Arguments to find a TransactionRequest
     * @example
     * // Get one TransactionRequest
     * const transactionRequest = await prisma.transactionRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionRequestFindUniqueArgs>(args: SelectSubset<T, TransactionRequestFindUniqueArgs<ExtArgs>>): Prisma__TransactionRequestClient<$Result.GetResult<Prisma.$TransactionRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TransactionRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionRequestFindUniqueOrThrowArgs} args - Arguments to find a TransactionRequest
     * @example
     * // Get one TransactionRequest
     * const transactionRequest = await prisma.transactionRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionRequestClient<$Result.GetResult<Prisma.$TransactionRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionRequestFindFirstArgs} args - Arguments to find a TransactionRequest
     * @example
     * // Get one TransactionRequest
     * const transactionRequest = await prisma.transactionRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionRequestFindFirstArgs>(args?: SelectSubset<T, TransactionRequestFindFirstArgs<ExtArgs>>): Prisma__TransactionRequestClient<$Result.GetResult<Prisma.$TransactionRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionRequestFindFirstOrThrowArgs} args - Arguments to find a TransactionRequest
     * @example
     * // Get one TransactionRequest
     * const transactionRequest = await prisma.transactionRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionRequestClient<$Result.GetResult<Prisma.$TransactionRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TransactionRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransactionRequests
     * const transactionRequests = await prisma.transactionRequest.findMany()
     * 
     * // Get first 10 TransactionRequests
     * const transactionRequests = await prisma.transactionRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionRequestWithIdOnly = await prisma.transactionRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionRequestFindManyArgs>(args?: SelectSubset<T, TransactionRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TransactionRequest.
     * @param {TransactionRequestCreateArgs} args - Arguments to create a TransactionRequest.
     * @example
     * // Create one TransactionRequest
     * const TransactionRequest = await prisma.transactionRequest.create({
     *   data: {
     *     // ... data to create a TransactionRequest
     *   }
     * })
     * 
     */
    create<T extends TransactionRequestCreateArgs>(args: SelectSubset<T, TransactionRequestCreateArgs<ExtArgs>>): Prisma__TransactionRequestClient<$Result.GetResult<Prisma.$TransactionRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TransactionRequests.
     * @param {TransactionRequestCreateManyArgs} args - Arguments to create many TransactionRequests.
     * @example
     * // Create many TransactionRequests
     * const transactionRequest = await prisma.transactionRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionRequestCreateManyArgs>(args?: SelectSubset<T, TransactionRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TransactionRequests and returns the data saved in the database.
     * @param {TransactionRequestCreateManyAndReturnArgs} args - Arguments to create many TransactionRequests.
     * @example
     * // Create many TransactionRequests
     * const transactionRequest = await prisma.transactionRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TransactionRequests and only return the `id`
     * const transactionRequestWithIdOnly = await prisma.transactionRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TransactionRequest.
     * @param {TransactionRequestDeleteArgs} args - Arguments to delete one TransactionRequest.
     * @example
     * // Delete one TransactionRequest
     * const TransactionRequest = await prisma.transactionRequest.delete({
     *   where: {
     *     // ... filter to delete one TransactionRequest
     *   }
     * })
     * 
     */
    delete<T extends TransactionRequestDeleteArgs>(args: SelectSubset<T, TransactionRequestDeleteArgs<ExtArgs>>): Prisma__TransactionRequestClient<$Result.GetResult<Prisma.$TransactionRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TransactionRequest.
     * @param {TransactionRequestUpdateArgs} args - Arguments to update one TransactionRequest.
     * @example
     * // Update one TransactionRequest
     * const transactionRequest = await prisma.transactionRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionRequestUpdateArgs>(args: SelectSubset<T, TransactionRequestUpdateArgs<ExtArgs>>): Prisma__TransactionRequestClient<$Result.GetResult<Prisma.$TransactionRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TransactionRequests.
     * @param {TransactionRequestDeleteManyArgs} args - Arguments to filter TransactionRequests to delete.
     * @example
     * // Delete a few TransactionRequests
     * const { count } = await prisma.transactionRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionRequestDeleteManyArgs>(args?: SelectSubset<T, TransactionRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransactionRequests
     * const transactionRequest = await prisma.transactionRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionRequestUpdateManyArgs>(args: SelectSubset<T, TransactionRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionRequests and returns the data updated in the database.
     * @param {TransactionRequestUpdateManyAndReturnArgs} args - Arguments to update many TransactionRequests.
     * @example
     * // Update many TransactionRequests
     * const transactionRequest = await prisma.transactionRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TransactionRequests and only return the `id`
     * const transactionRequestWithIdOnly = await prisma.transactionRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TransactionRequest.
     * @param {TransactionRequestUpsertArgs} args - Arguments to update or create a TransactionRequest.
     * @example
     * // Update or create a TransactionRequest
     * const transactionRequest = await prisma.transactionRequest.upsert({
     *   create: {
     *     // ... data to create a TransactionRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransactionRequest we want to update
     *   }
     * })
     */
    upsert<T extends TransactionRequestUpsertArgs>(args: SelectSubset<T, TransactionRequestUpsertArgs<ExtArgs>>): Prisma__TransactionRequestClient<$Result.GetResult<Prisma.$TransactionRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TransactionRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionRequestCountArgs} args - Arguments to filter TransactionRequests to count.
     * @example
     * // Count the number of TransactionRequests
     * const count = await prisma.transactionRequest.count({
     *   where: {
     *     // ... the filter for the TransactionRequests we want to count
     *   }
     * })
    **/
    count<T extends TransactionRequestCountArgs>(
      args?: Subset<T, TransactionRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransactionRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionRequestAggregateArgs>(args: Subset<T, TransactionRequestAggregateArgs>): Prisma.PrismaPromise<GetTransactionRequestAggregateType<T>>

    /**
     * Group by TransactionRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionRequestGroupByArgs} args - Group by arguments.
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
      T extends TransactionRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionRequestGroupByArgs['orderBy'] }
        : { orderBy?: TransactionRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransactionRequest model
   */
  readonly fields: TransactionRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransactionRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    actor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviews<T extends TransactionRequest$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, TransactionRequest$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TransactionRequest model
   */
  interface TransactionRequestFieldRefs {
    readonly id: FieldRef<"TransactionRequest", 'String'>
    readonly postId: FieldRef<"TransactionRequest", 'String'>
    readonly actorId: FieldRef<"TransactionRequest", 'String'>
    readonly quantity: FieldRef<"TransactionRequest", 'String'>
    readonly status: FieldRef<"TransactionRequest", 'TransactionStatus'>
    readonly message: FieldRef<"TransactionRequest", 'String'>
    readonly createdAt: FieldRef<"TransactionRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TransactionRequest findUnique
   */
  export type TransactionRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionRequest
     */
    select?: TransactionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionRequest
     */
    omit?: TransactionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionRequestInclude<ExtArgs> | null
    /**
     * Filter, which TransactionRequest to fetch.
     */
    where: TransactionRequestWhereUniqueInput
  }

  /**
   * TransactionRequest findUniqueOrThrow
   */
  export type TransactionRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionRequest
     */
    select?: TransactionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionRequest
     */
    omit?: TransactionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionRequestInclude<ExtArgs> | null
    /**
     * Filter, which TransactionRequest to fetch.
     */
    where: TransactionRequestWhereUniqueInput
  }

  /**
   * TransactionRequest findFirst
   */
  export type TransactionRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionRequest
     */
    select?: TransactionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionRequest
     */
    omit?: TransactionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionRequestInclude<ExtArgs> | null
    /**
     * Filter, which TransactionRequest to fetch.
     */
    where?: TransactionRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionRequests to fetch.
     */
    orderBy?: TransactionRequestOrderByWithRelationInput | TransactionRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionRequests.
     */
    cursor?: TransactionRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionRequests.
     */
    distinct?: TransactionRequestScalarFieldEnum | TransactionRequestScalarFieldEnum[]
  }

  /**
   * TransactionRequest findFirstOrThrow
   */
  export type TransactionRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionRequest
     */
    select?: TransactionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionRequest
     */
    omit?: TransactionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionRequestInclude<ExtArgs> | null
    /**
     * Filter, which TransactionRequest to fetch.
     */
    where?: TransactionRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionRequests to fetch.
     */
    orderBy?: TransactionRequestOrderByWithRelationInput | TransactionRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionRequests.
     */
    cursor?: TransactionRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionRequests.
     */
    distinct?: TransactionRequestScalarFieldEnum | TransactionRequestScalarFieldEnum[]
  }

  /**
   * TransactionRequest findMany
   */
  export type TransactionRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionRequest
     */
    select?: TransactionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionRequest
     */
    omit?: TransactionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionRequestInclude<ExtArgs> | null
    /**
     * Filter, which TransactionRequests to fetch.
     */
    where?: TransactionRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionRequests to fetch.
     */
    orderBy?: TransactionRequestOrderByWithRelationInput | TransactionRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransactionRequests.
     */
    cursor?: TransactionRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionRequests.
     */
    distinct?: TransactionRequestScalarFieldEnum | TransactionRequestScalarFieldEnum[]
  }

  /**
   * TransactionRequest create
   */
  export type TransactionRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionRequest
     */
    select?: TransactionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionRequest
     */
    omit?: TransactionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a TransactionRequest.
     */
    data: XOR<TransactionRequestCreateInput, TransactionRequestUncheckedCreateInput>
  }

  /**
   * TransactionRequest createMany
   */
  export type TransactionRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransactionRequests.
     */
    data: TransactionRequestCreateManyInput | TransactionRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransactionRequest createManyAndReturn
   */
  export type TransactionRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionRequest
     */
    select?: TransactionRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionRequest
     */
    omit?: TransactionRequestOmit<ExtArgs> | null
    /**
     * The data used to create many TransactionRequests.
     */
    data: TransactionRequestCreateManyInput | TransactionRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransactionRequest update
   */
  export type TransactionRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionRequest
     */
    select?: TransactionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionRequest
     */
    omit?: TransactionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a TransactionRequest.
     */
    data: XOR<TransactionRequestUpdateInput, TransactionRequestUncheckedUpdateInput>
    /**
     * Choose, which TransactionRequest to update.
     */
    where: TransactionRequestWhereUniqueInput
  }

  /**
   * TransactionRequest updateMany
   */
  export type TransactionRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransactionRequests.
     */
    data: XOR<TransactionRequestUpdateManyMutationInput, TransactionRequestUncheckedUpdateManyInput>
    /**
     * Filter which TransactionRequests to update
     */
    where?: TransactionRequestWhereInput
    /**
     * Limit how many TransactionRequests to update.
     */
    limit?: number
  }

  /**
   * TransactionRequest updateManyAndReturn
   */
  export type TransactionRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionRequest
     */
    select?: TransactionRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionRequest
     */
    omit?: TransactionRequestOmit<ExtArgs> | null
    /**
     * The data used to update TransactionRequests.
     */
    data: XOR<TransactionRequestUpdateManyMutationInput, TransactionRequestUncheckedUpdateManyInput>
    /**
     * Filter which TransactionRequests to update
     */
    where?: TransactionRequestWhereInput
    /**
     * Limit how many TransactionRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransactionRequest upsert
   */
  export type TransactionRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionRequest
     */
    select?: TransactionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionRequest
     */
    omit?: TransactionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the TransactionRequest to update in case it exists.
     */
    where: TransactionRequestWhereUniqueInput
    /**
     * In case the TransactionRequest found by the `where` argument doesn't exist, create a new TransactionRequest with this data.
     */
    create: XOR<TransactionRequestCreateInput, TransactionRequestUncheckedCreateInput>
    /**
     * In case the TransactionRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionRequestUpdateInput, TransactionRequestUncheckedUpdateInput>
  }

  /**
   * TransactionRequest delete
   */
  export type TransactionRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionRequest
     */
    select?: TransactionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionRequest
     */
    omit?: TransactionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionRequestInclude<ExtArgs> | null
    /**
     * Filter which TransactionRequest to delete.
     */
    where: TransactionRequestWhereUniqueInput
  }

  /**
   * TransactionRequest deleteMany
   */
  export type TransactionRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionRequests to delete
     */
    where?: TransactionRequestWhereInput
    /**
     * Limit how many TransactionRequests to delete.
     */
    limit?: number
  }

  /**
   * TransactionRequest.reviews
   */
  export type TransactionRequest$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * TransactionRequest without action
   */
  export type TransactionRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionRequest
     */
    select?: TransactionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionRequest
     */
    omit?: TransactionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionRequestInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    reviewerId: string | null
    revieweeId: string | null
    transactionId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    reviewerId: string | null
    revieweeId: string | null
    transactionId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    reviewerId: number
    revieweeId: number
    transactionId: number
    rating: number
    comment: number
    createdAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    reviewerId?: true
    revieweeId?: true
    transactionId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    reviewerId?: true
    revieweeId?: true
    transactionId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    reviewerId?: true
    revieweeId?: true
    transactionId?: true
    rating?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    reviewerId: string
    revieweeId: string
    transactionId: string
    rating: number
    comment: string | null
    createdAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewerId?: boolean
    revieweeId?: boolean
    transactionId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    reviewee?: boolean | UserDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewerId?: boolean
    revieweeId?: boolean
    transactionId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    reviewee?: boolean | UserDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewerId?: boolean
    revieweeId?: boolean
    transactionId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    reviewee?: boolean | UserDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    reviewerId?: boolean
    revieweeId?: boolean
    transactionId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reviewerId" | "revieweeId" | "transactionId" | "rating" | "comment" | "createdAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    reviewee?: boolean | UserDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionRequestDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    reviewee?: boolean | UserDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionRequestDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    reviewee?: boolean | UserDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionRequestDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      reviewer: Prisma.$UserPayload<ExtArgs>
      reviewee: Prisma.$UserPayload<ExtArgs>
      transaction: Prisma.$TransactionRequestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reviewerId: string
      revieweeId: string
      transactionId: string
      rating: number
      comment: string | null
      createdAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviewer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviewee<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transaction<T extends TransactionRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransactionRequestDefaultArgs<ExtArgs>>): Prisma__TransactionRequestClient<$Result.GetResult<Prisma.$TransactionRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly reviewerId: FieldRef<"Review", 'String'>
    readonly revieweeId: FieldRef<"Review", 'String'>
    readonly transactionId: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model AiLog
   */

  export type AggregateAiLog = {
    _count: AiLogCountAggregateOutputType | null
    _min: AiLogMinAggregateOutputType | null
    _max: AiLogMaxAggregateOutputType | null
  }

  export type AiLogMinAggregateOutputType = {
    id: string | null
    actionType: string | null
    prompt: string | null
    response: string | null
    createdAt: Date | null
  }

  export type AiLogMaxAggregateOutputType = {
    id: string | null
    actionType: string | null
    prompt: string | null
    response: string | null
    createdAt: Date | null
  }

  export type AiLogCountAggregateOutputType = {
    id: number
    actionType: number
    prompt: number
    response: number
    createdAt: number
    _all: number
  }


  export type AiLogMinAggregateInputType = {
    id?: true
    actionType?: true
    prompt?: true
    response?: true
    createdAt?: true
  }

  export type AiLogMaxAggregateInputType = {
    id?: true
    actionType?: true
    prompt?: true
    response?: true
    createdAt?: true
  }

  export type AiLogCountAggregateInputType = {
    id?: true
    actionType?: true
    prompt?: true
    response?: true
    createdAt?: true
    _all?: true
  }

  export type AiLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiLog to aggregate.
     */
    where?: AiLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiLogs to fetch.
     */
    orderBy?: AiLogOrderByWithRelationInput | AiLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AiLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AiLogs
    **/
    _count?: true | AiLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AiLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AiLogMaxAggregateInputType
  }

  export type GetAiLogAggregateType<T extends AiLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAiLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAiLog[P]>
      : GetScalarType<T[P], AggregateAiLog[P]>
  }




  export type AiLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiLogWhereInput
    orderBy?: AiLogOrderByWithAggregationInput | AiLogOrderByWithAggregationInput[]
    by: AiLogScalarFieldEnum[] | AiLogScalarFieldEnum
    having?: AiLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AiLogCountAggregateInputType | true
    _min?: AiLogMinAggregateInputType
    _max?: AiLogMaxAggregateInputType
  }

  export type AiLogGroupByOutputType = {
    id: string
    actionType: string
    prompt: string
    response: string
    createdAt: Date
    _count: AiLogCountAggregateOutputType | null
    _min: AiLogMinAggregateOutputType | null
    _max: AiLogMaxAggregateOutputType | null
  }

  type GetAiLogGroupByPayload<T extends AiLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AiLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AiLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AiLogGroupByOutputType[P]>
            : GetScalarType<T[P], AiLogGroupByOutputType[P]>
        }
      >
    >


  export type AiLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actionType?: boolean
    prompt?: boolean
    response?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["aiLog"]>

  export type AiLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actionType?: boolean
    prompt?: boolean
    response?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["aiLog"]>

  export type AiLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actionType?: boolean
    prompt?: boolean
    response?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["aiLog"]>

  export type AiLogSelectScalar = {
    id?: boolean
    actionType?: boolean
    prompt?: boolean
    response?: boolean
    createdAt?: boolean
  }

  export type AiLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "actionType" | "prompt" | "response" | "createdAt", ExtArgs["result"]["aiLog"]>

  export type $AiLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AiLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      actionType: string
      prompt: string
      response: string
      createdAt: Date
    }, ExtArgs["result"]["aiLog"]>
    composites: {}
  }

  type AiLogGetPayload<S extends boolean | null | undefined | AiLogDefaultArgs> = $Result.GetResult<Prisma.$AiLogPayload, S>

  type AiLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AiLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AiLogCountAggregateInputType | true
    }

  export interface AiLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AiLog'], meta: { name: 'AiLog' } }
    /**
     * Find zero or one AiLog that matches the filter.
     * @param {AiLogFindUniqueArgs} args - Arguments to find a AiLog
     * @example
     * // Get one AiLog
     * const aiLog = await prisma.aiLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AiLogFindUniqueArgs>(args: SelectSubset<T, AiLogFindUniqueArgs<ExtArgs>>): Prisma__AiLogClient<$Result.GetResult<Prisma.$AiLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AiLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AiLogFindUniqueOrThrowArgs} args - Arguments to find a AiLog
     * @example
     * // Get one AiLog
     * const aiLog = await prisma.aiLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AiLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AiLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AiLogClient<$Result.GetResult<Prisma.$AiLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiLogFindFirstArgs} args - Arguments to find a AiLog
     * @example
     * // Get one AiLog
     * const aiLog = await prisma.aiLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AiLogFindFirstArgs>(args?: SelectSubset<T, AiLogFindFirstArgs<ExtArgs>>): Prisma__AiLogClient<$Result.GetResult<Prisma.$AiLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiLogFindFirstOrThrowArgs} args - Arguments to find a AiLog
     * @example
     * // Get one AiLog
     * const aiLog = await prisma.aiLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AiLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AiLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AiLogClient<$Result.GetResult<Prisma.$AiLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AiLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AiLogs
     * const aiLogs = await prisma.aiLog.findMany()
     * 
     * // Get first 10 AiLogs
     * const aiLogs = await prisma.aiLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aiLogWithIdOnly = await prisma.aiLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AiLogFindManyArgs>(args?: SelectSubset<T, AiLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AiLog.
     * @param {AiLogCreateArgs} args - Arguments to create a AiLog.
     * @example
     * // Create one AiLog
     * const AiLog = await prisma.aiLog.create({
     *   data: {
     *     // ... data to create a AiLog
     *   }
     * })
     * 
     */
    create<T extends AiLogCreateArgs>(args: SelectSubset<T, AiLogCreateArgs<ExtArgs>>): Prisma__AiLogClient<$Result.GetResult<Prisma.$AiLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AiLogs.
     * @param {AiLogCreateManyArgs} args - Arguments to create many AiLogs.
     * @example
     * // Create many AiLogs
     * const aiLog = await prisma.aiLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AiLogCreateManyArgs>(args?: SelectSubset<T, AiLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AiLogs and returns the data saved in the database.
     * @param {AiLogCreateManyAndReturnArgs} args - Arguments to create many AiLogs.
     * @example
     * // Create many AiLogs
     * const aiLog = await prisma.aiLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AiLogs and only return the `id`
     * const aiLogWithIdOnly = await prisma.aiLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AiLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AiLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AiLog.
     * @param {AiLogDeleteArgs} args - Arguments to delete one AiLog.
     * @example
     * // Delete one AiLog
     * const AiLog = await prisma.aiLog.delete({
     *   where: {
     *     // ... filter to delete one AiLog
     *   }
     * })
     * 
     */
    delete<T extends AiLogDeleteArgs>(args: SelectSubset<T, AiLogDeleteArgs<ExtArgs>>): Prisma__AiLogClient<$Result.GetResult<Prisma.$AiLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AiLog.
     * @param {AiLogUpdateArgs} args - Arguments to update one AiLog.
     * @example
     * // Update one AiLog
     * const aiLog = await prisma.aiLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AiLogUpdateArgs>(args: SelectSubset<T, AiLogUpdateArgs<ExtArgs>>): Prisma__AiLogClient<$Result.GetResult<Prisma.$AiLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AiLogs.
     * @param {AiLogDeleteManyArgs} args - Arguments to filter AiLogs to delete.
     * @example
     * // Delete a few AiLogs
     * const { count } = await prisma.aiLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AiLogDeleteManyArgs>(args?: SelectSubset<T, AiLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AiLogs
     * const aiLog = await prisma.aiLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AiLogUpdateManyArgs>(args: SelectSubset<T, AiLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiLogs and returns the data updated in the database.
     * @param {AiLogUpdateManyAndReturnArgs} args - Arguments to update many AiLogs.
     * @example
     * // Update many AiLogs
     * const aiLog = await prisma.aiLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AiLogs and only return the `id`
     * const aiLogWithIdOnly = await prisma.aiLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AiLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AiLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AiLog.
     * @param {AiLogUpsertArgs} args - Arguments to update or create a AiLog.
     * @example
     * // Update or create a AiLog
     * const aiLog = await prisma.aiLog.upsert({
     *   create: {
     *     // ... data to create a AiLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AiLog we want to update
     *   }
     * })
     */
    upsert<T extends AiLogUpsertArgs>(args: SelectSubset<T, AiLogUpsertArgs<ExtArgs>>): Prisma__AiLogClient<$Result.GetResult<Prisma.$AiLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AiLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiLogCountArgs} args - Arguments to filter AiLogs to count.
     * @example
     * // Count the number of AiLogs
     * const count = await prisma.aiLog.count({
     *   where: {
     *     // ... the filter for the AiLogs we want to count
     *   }
     * })
    **/
    count<T extends AiLogCountArgs>(
      args?: Subset<T, AiLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AiLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AiLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AiLogAggregateArgs>(args: Subset<T, AiLogAggregateArgs>): Prisma.PrismaPromise<GetAiLogAggregateType<T>>

    /**
     * Group by AiLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiLogGroupByArgs} args - Group by arguments.
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
      T extends AiLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AiLogGroupByArgs['orderBy'] }
        : { orderBy?: AiLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AiLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AiLog model
   */
  readonly fields: AiLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AiLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AiLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the AiLog model
   */
  interface AiLogFieldRefs {
    readonly id: FieldRef<"AiLog", 'String'>
    readonly actionType: FieldRef<"AiLog", 'String'>
    readonly prompt: FieldRef<"AiLog", 'String'>
    readonly response: FieldRef<"AiLog", 'String'>
    readonly createdAt: FieldRef<"AiLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AiLog findUnique
   */
  export type AiLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiLog
     */
    select?: AiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiLog
     */
    omit?: AiLogOmit<ExtArgs> | null
    /**
     * Filter, which AiLog to fetch.
     */
    where: AiLogWhereUniqueInput
  }

  /**
   * AiLog findUniqueOrThrow
   */
  export type AiLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiLog
     */
    select?: AiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiLog
     */
    omit?: AiLogOmit<ExtArgs> | null
    /**
     * Filter, which AiLog to fetch.
     */
    where: AiLogWhereUniqueInput
  }

  /**
   * AiLog findFirst
   */
  export type AiLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiLog
     */
    select?: AiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiLog
     */
    omit?: AiLogOmit<ExtArgs> | null
    /**
     * Filter, which AiLog to fetch.
     */
    where?: AiLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiLogs to fetch.
     */
    orderBy?: AiLogOrderByWithRelationInput | AiLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiLogs.
     */
    cursor?: AiLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiLogs.
     */
    distinct?: AiLogScalarFieldEnum | AiLogScalarFieldEnum[]
  }

  /**
   * AiLog findFirstOrThrow
   */
  export type AiLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiLog
     */
    select?: AiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiLog
     */
    omit?: AiLogOmit<ExtArgs> | null
    /**
     * Filter, which AiLog to fetch.
     */
    where?: AiLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiLogs to fetch.
     */
    orderBy?: AiLogOrderByWithRelationInput | AiLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiLogs.
     */
    cursor?: AiLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiLogs.
     */
    distinct?: AiLogScalarFieldEnum | AiLogScalarFieldEnum[]
  }

  /**
   * AiLog findMany
   */
  export type AiLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiLog
     */
    select?: AiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiLog
     */
    omit?: AiLogOmit<ExtArgs> | null
    /**
     * Filter, which AiLogs to fetch.
     */
    where?: AiLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiLogs to fetch.
     */
    orderBy?: AiLogOrderByWithRelationInput | AiLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AiLogs.
     */
    cursor?: AiLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiLogs.
     */
    distinct?: AiLogScalarFieldEnum | AiLogScalarFieldEnum[]
  }

  /**
   * AiLog create
   */
  export type AiLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiLog
     */
    select?: AiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiLog
     */
    omit?: AiLogOmit<ExtArgs> | null
    /**
     * The data needed to create a AiLog.
     */
    data: XOR<AiLogCreateInput, AiLogUncheckedCreateInput>
  }

  /**
   * AiLog createMany
   */
  export type AiLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AiLogs.
     */
    data: AiLogCreateManyInput | AiLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiLog createManyAndReturn
   */
  export type AiLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiLog
     */
    select?: AiLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiLog
     */
    omit?: AiLogOmit<ExtArgs> | null
    /**
     * The data used to create many AiLogs.
     */
    data: AiLogCreateManyInput | AiLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiLog update
   */
  export type AiLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiLog
     */
    select?: AiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiLog
     */
    omit?: AiLogOmit<ExtArgs> | null
    /**
     * The data needed to update a AiLog.
     */
    data: XOR<AiLogUpdateInput, AiLogUncheckedUpdateInput>
    /**
     * Choose, which AiLog to update.
     */
    where: AiLogWhereUniqueInput
  }

  /**
   * AiLog updateMany
   */
  export type AiLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AiLogs.
     */
    data: XOR<AiLogUpdateManyMutationInput, AiLogUncheckedUpdateManyInput>
    /**
     * Filter which AiLogs to update
     */
    where?: AiLogWhereInput
    /**
     * Limit how many AiLogs to update.
     */
    limit?: number
  }

  /**
   * AiLog updateManyAndReturn
   */
  export type AiLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiLog
     */
    select?: AiLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiLog
     */
    omit?: AiLogOmit<ExtArgs> | null
    /**
     * The data used to update AiLogs.
     */
    data: XOR<AiLogUpdateManyMutationInput, AiLogUncheckedUpdateManyInput>
    /**
     * Filter which AiLogs to update
     */
    where?: AiLogWhereInput
    /**
     * Limit how many AiLogs to update.
     */
    limit?: number
  }

  /**
   * AiLog upsert
   */
  export type AiLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiLog
     */
    select?: AiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiLog
     */
    omit?: AiLogOmit<ExtArgs> | null
    /**
     * The filter to search for the AiLog to update in case it exists.
     */
    where: AiLogWhereUniqueInput
    /**
     * In case the AiLog found by the `where` argument doesn't exist, create a new AiLog with this data.
     */
    create: XOR<AiLogCreateInput, AiLogUncheckedCreateInput>
    /**
     * In case the AiLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AiLogUpdateInput, AiLogUncheckedUpdateInput>
  }

  /**
   * AiLog delete
   */
  export type AiLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiLog
     */
    select?: AiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiLog
     */
    omit?: AiLogOmit<ExtArgs> | null
    /**
     * Filter which AiLog to delete.
     */
    where: AiLogWhereUniqueInput
  }

  /**
   * AiLog deleteMany
   */
  export type AiLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiLogs to delete
     */
    where?: AiLogWhereInput
    /**
     * Limit how many AiLogs to delete.
     */
    limit?: number
  }

  /**
   * AiLog without action
   */
  export type AiLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiLog
     */
    select?: AiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiLog
     */
    omit?: AiLogOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    phone: 'phone',
    role: 'role',
    status: 'status',
    profilePictureUrl: 'profilePictureUrl',
    needsPasswordChange: 'needsPasswordChange',
    authProvider: 'authProvider',
    isVerified: 'isVerified',
    otp: 'otp',
    otpExpiry: 'otpExpiry',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    latitude: 'latitude',
    longitude: 'longitude',
    impactScore: 'impactScore'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const OrganizationProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    orgName: 'orgName',
    establishedYear: 'establishedYear',
    registrationNumber: 'registrationNumber',
    latitude: 'latitude',
    longitude: 'longitude',
    impactScore: 'impactScore'
  };

  export type OrganizationProfileScalarFieldEnum = (typeof OrganizationProfileScalarFieldEnum)[keyof typeof OrganizationProfileScalarFieldEnum]


  export const AdminProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    department: 'department'
  };

  export type AdminProfileScalarFieldEnum = (typeof AdminProfileScalarFieldEnum)[keyof typeof AdminProfileScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    authorId: 'authorId',
    type: 'type',
    category: 'category',
    title: 'title',
    description: 'description',
    imageUrl: 'imageUrl',
    quantity: 'quantity',
    estimatedShelfLife: 'estimatedShelfLife',
    metadata: 'metadata',
    latitude: 'latitude',
    longitude: 'longitude',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const TransactionRequestScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    actorId: 'actorId',
    quantity: 'quantity',
    status: 'status',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type TransactionRequestScalarFieldEnum = (typeof TransactionRequestScalarFieldEnum)[keyof typeof TransactionRequestScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    reviewerId: 'reviewerId',
    revieweeId: 'revieweeId',
    transactionId: 'transactionId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const AiLogScalarFieldEnum: {
    id: 'id',
    actionType: 'actionType',
    prompt: 'prompt',
    response: 'response',
    createdAt: 'createdAt'
  };

  export type AiLogScalarFieldEnum = (typeof AiLogScalarFieldEnum)[keyof typeof AiLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'AccountStatus'
   */
  export type EnumAccountStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountStatus'>
    


  /**
   * Reference to a field of type 'AccountStatus[]'
   */
  export type ListEnumAccountStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'PostType'
   */
  export type EnumPostTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostType'>
    


  /**
   * Reference to a field of type 'PostType[]'
   */
  export type ListEnumPostTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostType[]'>
    


  /**
   * Reference to a field of type 'PostCategory'
   */
  export type EnumPostCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostCategory'>
    


  /**
   * Reference to a field of type 'PostCategory[]'
   */
  export type ListEnumPostCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostCategory[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'PostStatus'
   */
  export type EnumPostStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostStatus'>
    


  /**
   * Reference to a field of type 'PostStatus[]'
   */
  export type ListEnumPostStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostStatus[]'>
    


  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>
    


  /**
   * Reference to a field of type 'TransactionStatus[]'
   */
  export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: EnumAccountStatusFilter<"User"> | $Enums.AccountStatus
    profilePictureUrl?: StringNullableFilter<"User"> | string | null
    needsPasswordChange?: BoolFilter<"User"> | boolean
    authProvider?: StringNullableFilter<"User"> | string | null
    isVerified?: BoolFilter<"User"> | boolean
    otp?: StringNullableFilter<"User"> | string | null
    otpExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userProfile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
    organizationProfile?: XOR<OrganizationProfileNullableScalarRelationFilter, OrganizationProfileWhereInput> | null
    adminProfile?: XOR<AdminProfileNullableScalarRelationFilter, AdminProfileWhereInput> | null
    posts?: PostListRelationFilter
    transactionRequests?: TransactionRequestListRelationFilter
    reviewsGiven?: ReviewListRelationFilter
    reviewsReceived?: ReviewListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    profilePictureUrl?: SortOrderInput | SortOrder
    needsPasswordChange?: SortOrder
    authProvider?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userProfile?: UserProfileOrderByWithRelationInput
    organizationProfile?: OrganizationProfileOrderByWithRelationInput
    adminProfile?: AdminProfileOrderByWithRelationInput
    posts?: PostOrderByRelationAggregateInput
    transactionRequests?: TransactionRequestOrderByRelationAggregateInput
    reviewsGiven?: ReviewOrderByRelationAggregateInput
    reviewsReceived?: ReviewOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: EnumAccountStatusFilter<"User"> | $Enums.AccountStatus
    profilePictureUrl?: StringNullableFilter<"User"> | string | null
    needsPasswordChange?: BoolFilter<"User"> | boolean
    authProvider?: StringNullableFilter<"User"> | string | null
    isVerified?: BoolFilter<"User"> | boolean
    otp?: StringNullableFilter<"User"> | string | null
    otpExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userProfile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
    organizationProfile?: XOR<OrganizationProfileNullableScalarRelationFilter, OrganizationProfileWhereInput> | null
    adminProfile?: XOR<AdminProfileNullableScalarRelationFilter, AdminProfileWhereInput> | null
    posts?: PostListRelationFilter
    transactionRequests?: TransactionRequestListRelationFilter
    reviewsGiven?: ReviewListRelationFilter
    reviewsReceived?: ReviewListRelationFilter
  }, "id" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    profilePictureUrl?: SortOrderInput | SortOrder
    needsPasswordChange?: SortOrder
    authProvider?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    status?: EnumAccountStatusWithAggregatesFilter<"User"> | $Enums.AccountStatus
    profilePictureUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    needsPasswordChange?: BoolWithAggregatesFilter<"User"> | boolean
    authProvider?: StringNullableWithAggregatesFilter<"User"> | string | null
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    otp?: StringNullableWithAggregatesFilter<"User"> | string | null
    otpExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    id?: StringFilter<"UserProfile"> | string
    userId?: StringFilter<"UserProfile"> | string
    name?: StringFilter<"UserProfile"> | string
    latitude?: FloatNullableFilter<"UserProfile"> | number | null
    longitude?: FloatNullableFilter<"UserProfile"> | number | null
    impactScore?: FloatFilter<"UserProfile"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    impactScore?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    name?: StringFilter<"UserProfile"> | string
    latitude?: FloatNullableFilter<"UserProfile"> | number | null
    longitude?: FloatNullableFilter<"UserProfile"> | number | null
    impactScore?: FloatFilter<"UserProfile"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    impactScore?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _avg?: UserProfileAvgOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
    _sum?: UserProfileSumOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserProfile"> | string
    userId?: StringWithAggregatesFilter<"UserProfile"> | string
    name?: StringWithAggregatesFilter<"UserProfile"> | string
    latitude?: FloatNullableWithAggregatesFilter<"UserProfile"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"UserProfile"> | number | null
    impactScore?: FloatWithAggregatesFilter<"UserProfile"> | number
  }

  export type OrganizationProfileWhereInput = {
    AND?: OrganizationProfileWhereInput | OrganizationProfileWhereInput[]
    OR?: OrganizationProfileWhereInput[]
    NOT?: OrganizationProfileWhereInput | OrganizationProfileWhereInput[]
    id?: StringFilter<"OrganizationProfile"> | string
    userId?: StringFilter<"OrganizationProfile"> | string
    orgName?: StringFilter<"OrganizationProfile"> | string
    establishedYear?: IntNullableFilter<"OrganizationProfile"> | number | null
    registrationNumber?: StringNullableFilter<"OrganizationProfile"> | string | null
    latitude?: FloatFilter<"OrganizationProfile"> | number
    longitude?: FloatFilter<"OrganizationProfile"> | number
    impactScore?: FloatFilter<"OrganizationProfile"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OrganizationProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    orgName?: SortOrder
    establishedYear?: SortOrderInput | SortOrder
    registrationNumber?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    impactScore?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type OrganizationProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: OrganizationProfileWhereInput | OrganizationProfileWhereInput[]
    OR?: OrganizationProfileWhereInput[]
    NOT?: OrganizationProfileWhereInput | OrganizationProfileWhereInput[]
    orgName?: StringFilter<"OrganizationProfile"> | string
    establishedYear?: IntNullableFilter<"OrganizationProfile"> | number | null
    registrationNumber?: StringNullableFilter<"OrganizationProfile"> | string | null
    latitude?: FloatFilter<"OrganizationProfile"> | number
    longitude?: FloatFilter<"OrganizationProfile"> | number
    impactScore?: FloatFilter<"OrganizationProfile"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type OrganizationProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    orgName?: SortOrder
    establishedYear?: SortOrderInput | SortOrder
    registrationNumber?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    impactScore?: SortOrder
    _count?: OrganizationProfileCountOrderByAggregateInput
    _avg?: OrganizationProfileAvgOrderByAggregateInput
    _max?: OrganizationProfileMaxOrderByAggregateInput
    _min?: OrganizationProfileMinOrderByAggregateInput
    _sum?: OrganizationProfileSumOrderByAggregateInput
  }

  export type OrganizationProfileScalarWhereWithAggregatesInput = {
    AND?: OrganizationProfileScalarWhereWithAggregatesInput | OrganizationProfileScalarWhereWithAggregatesInput[]
    OR?: OrganizationProfileScalarWhereWithAggregatesInput[]
    NOT?: OrganizationProfileScalarWhereWithAggregatesInput | OrganizationProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrganizationProfile"> | string
    userId?: StringWithAggregatesFilter<"OrganizationProfile"> | string
    orgName?: StringWithAggregatesFilter<"OrganizationProfile"> | string
    establishedYear?: IntNullableWithAggregatesFilter<"OrganizationProfile"> | number | null
    registrationNumber?: StringNullableWithAggregatesFilter<"OrganizationProfile"> | string | null
    latitude?: FloatWithAggregatesFilter<"OrganizationProfile"> | number
    longitude?: FloatWithAggregatesFilter<"OrganizationProfile"> | number
    impactScore?: FloatWithAggregatesFilter<"OrganizationProfile"> | number
  }

  export type AdminProfileWhereInput = {
    AND?: AdminProfileWhereInput | AdminProfileWhereInput[]
    OR?: AdminProfileWhereInput[]
    NOT?: AdminProfileWhereInput | AdminProfileWhereInput[]
    id?: StringFilter<"AdminProfile"> | string
    userId?: StringFilter<"AdminProfile"> | string
    name?: StringFilter<"AdminProfile"> | string
    department?: StringNullableFilter<"AdminProfile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AdminProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    department?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AdminProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: AdminProfileWhereInput | AdminProfileWhereInput[]
    OR?: AdminProfileWhereInput[]
    NOT?: AdminProfileWhereInput | AdminProfileWhereInput[]
    name?: StringFilter<"AdminProfile"> | string
    department?: StringNullableFilter<"AdminProfile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type AdminProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    department?: SortOrderInput | SortOrder
    _count?: AdminProfileCountOrderByAggregateInput
    _max?: AdminProfileMaxOrderByAggregateInput
    _min?: AdminProfileMinOrderByAggregateInput
  }

  export type AdminProfileScalarWhereWithAggregatesInput = {
    AND?: AdminProfileScalarWhereWithAggregatesInput | AdminProfileScalarWhereWithAggregatesInput[]
    OR?: AdminProfileScalarWhereWithAggregatesInput[]
    NOT?: AdminProfileScalarWhereWithAggregatesInput | AdminProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminProfile"> | string
    userId?: StringWithAggregatesFilter<"AdminProfile"> | string
    name?: StringWithAggregatesFilter<"AdminProfile"> | string
    department?: StringNullableWithAggregatesFilter<"AdminProfile"> | string | null
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    authorId?: StringFilter<"Post"> | string
    type?: EnumPostTypeFilter<"Post"> | $Enums.PostType
    category?: EnumPostCategoryFilter<"Post"> | $Enums.PostCategory
    title?: StringFilter<"Post"> | string
    description?: StringFilter<"Post"> | string
    imageUrl?: StringNullableFilter<"Post"> | string | null
    quantity?: IntFilter<"Post"> | number
    estimatedShelfLife?: DateTimeNullableFilter<"Post"> | Date | string | null
    metadata?: JsonNullableFilter<"Post">
    latitude?: FloatFilter<"Post"> | number
    longitude?: FloatFilter<"Post"> | number
    status?: EnumPostStatusFilter<"Post"> | $Enums.PostStatus
    createdAt?: DateTimeFilter<"Post"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    transactionRequests?: TransactionRequestListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    authorId?: SortOrder
    type?: SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    quantity?: SortOrder
    estimatedShelfLife?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    author?: UserOrderByWithRelationInput
    transactionRequests?: TransactionRequestOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    authorId?: StringFilter<"Post"> | string
    type?: EnumPostTypeFilter<"Post"> | $Enums.PostType
    category?: EnumPostCategoryFilter<"Post"> | $Enums.PostCategory
    title?: StringFilter<"Post"> | string
    description?: StringFilter<"Post"> | string
    imageUrl?: StringNullableFilter<"Post"> | string | null
    quantity?: IntFilter<"Post"> | number
    estimatedShelfLife?: DateTimeNullableFilter<"Post"> | Date | string | null
    metadata?: JsonNullableFilter<"Post">
    latitude?: FloatFilter<"Post"> | number
    longitude?: FloatFilter<"Post"> | number
    status?: EnumPostStatusFilter<"Post"> | $Enums.PostStatus
    createdAt?: DateTimeFilter<"Post"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    transactionRequests?: TransactionRequestListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    authorId?: SortOrder
    type?: SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    quantity?: SortOrder
    estimatedShelfLife?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    authorId?: StringWithAggregatesFilter<"Post"> | string
    type?: EnumPostTypeWithAggregatesFilter<"Post"> | $Enums.PostType
    category?: EnumPostCategoryWithAggregatesFilter<"Post"> | $Enums.PostCategory
    title?: StringWithAggregatesFilter<"Post"> | string
    description?: StringWithAggregatesFilter<"Post"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Post"> | string | null
    quantity?: IntWithAggregatesFilter<"Post"> | number
    estimatedShelfLife?: DateTimeNullableWithAggregatesFilter<"Post"> | Date | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Post">
    latitude?: FloatWithAggregatesFilter<"Post"> | number
    longitude?: FloatWithAggregatesFilter<"Post"> | number
    status?: EnumPostStatusWithAggregatesFilter<"Post"> | $Enums.PostStatus
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type TransactionRequestWhereInput = {
    AND?: TransactionRequestWhereInput | TransactionRequestWhereInput[]
    OR?: TransactionRequestWhereInput[]
    NOT?: TransactionRequestWhereInput | TransactionRequestWhereInput[]
    id?: StringFilter<"TransactionRequest"> | string
    postId?: StringFilter<"TransactionRequest"> | string
    actorId?: StringFilter<"TransactionRequest"> | string
    quantity?: StringFilter<"TransactionRequest"> | string
    status?: EnumTransactionStatusFilter<"TransactionRequest"> | $Enums.TransactionStatus
    message?: StringNullableFilter<"TransactionRequest"> | string | null
    createdAt?: DateTimeFilter<"TransactionRequest"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    actor?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviews?: ReviewListRelationFilter
  }

  export type TransactionRequestOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    actorId?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    message?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    post?: PostOrderByWithRelationInput
    actor?: UserOrderByWithRelationInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type TransactionRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionRequestWhereInput | TransactionRequestWhereInput[]
    OR?: TransactionRequestWhereInput[]
    NOT?: TransactionRequestWhereInput | TransactionRequestWhereInput[]
    postId?: StringFilter<"TransactionRequest"> | string
    actorId?: StringFilter<"TransactionRequest"> | string
    quantity?: StringFilter<"TransactionRequest"> | string
    status?: EnumTransactionStatusFilter<"TransactionRequest"> | $Enums.TransactionStatus
    message?: StringNullableFilter<"TransactionRequest"> | string | null
    createdAt?: DateTimeFilter<"TransactionRequest"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    actor?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviews?: ReviewListRelationFilter
  }, "id">

  export type TransactionRequestOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    actorId?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    message?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TransactionRequestCountOrderByAggregateInput
    _max?: TransactionRequestMaxOrderByAggregateInput
    _min?: TransactionRequestMinOrderByAggregateInput
  }

  export type TransactionRequestScalarWhereWithAggregatesInput = {
    AND?: TransactionRequestScalarWhereWithAggregatesInput | TransactionRequestScalarWhereWithAggregatesInput[]
    OR?: TransactionRequestScalarWhereWithAggregatesInput[]
    NOT?: TransactionRequestScalarWhereWithAggregatesInput | TransactionRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TransactionRequest"> | string
    postId?: StringWithAggregatesFilter<"TransactionRequest"> | string
    actorId?: StringWithAggregatesFilter<"TransactionRequest"> | string
    quantity?: StringWithAggregatesFilter<"TransactionRequest"> | string
    status?: EnumTransactionStatusWithAggregatesFilter<"TransactionRequest"> | $Enums.TransactionStatus
    message?: StringNullableWithAggregatesFilter<"TransactionRequest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TransactionRequest"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    reviewerId?: StringFilter<"Review"> | string
    revieweeId?: StringFilter<"Review"> | string
    transactionId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    reviewer?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviewee?: XOR<UserScalarRelationFilter, UserWhereInput>
    transaction?: XOR<TransactionRequestScalarRelationFilter, TransactionRequestWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    reviewerId?: SortOrder
    revieweeId?: SortOrder
    transactionId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    reviewer?: UserOrderByWithRelationInput
    reviewee?: UserOrderByWithRelationInput
    transaction?: TransactionRequestOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    reviewerId?: StringFilter<"Review"> | string
    revieweeId?: StringFilter<"Review"> | string
    transactionId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    reviewer?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviewee?: XOR<UserScalarRelationFilter, UserWhereInput>
    transaction?: XOR<TransactionRequestScalarRelationFilter, TransactionRequestWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    reviewerId?: SortOrder
    revieweeId?: SortOrder
    transactionId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    reviewerId?: StringWithAggregatesFilter<"Review"> | string
    revieweeId?: StringWithAggregatesFilter<"Review"> | string
    transactionId?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type AiLogWhereInput = {
    AND?: AiLogWhereInput | AiLogWhereInput[]
    OR?: AiLogWhereInput[]
    NOT?: AiLogWhereInput | AiLogWhereInput[]
    id?: StringFilter<"AiLog"> | string
    actionType?: StringFilter<"AiLog"> | string
    prompt?: StringFilter<"AiLog"> | string
    response?: StringFilter<"AiLog"> | string
    createdAt?: DateTimeFilter<"AiLog"> | Date | string
  }

  export type AiLogOrderByWithRelationInput = {
    id?: SortOrder
    actionType?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
  }

  export type AiLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AiLogWhereInput | AiLogWhereInput[]
    OR?: AiLogWhereInput[]
    NOT?: AiLogWhereInput | AiLogWhereInput[]
    actionType?: StringFilter<"AiLog"> | string
    prompt?: StringFilter<"AiLog"> | string
    response?: StringFilter<"AiLog"> | string
    createdAt?: DateTimeFilter<"AiLog"> | Date | string
  }, "id">

  export type AiLogOrderByWithAggregationInput = {
    id?: SortOrder
    actionType?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
    _count?: AiLogCountOrderByAggregateInput
    _max?: AiLogMaxOrderByAggregateInput
    _min?: AiLogMinOrderByAggregateInput
  }

  export type AiLogScalarWhereWithAggregatesInput = {
    AND?: AiLogScalarWhereWithAggregatesInput | AiLogScalarWhereWithAggregatesInput[]
    OR?: AiLogScalarWhereWithAggregatesInput[]
    NOT?: AiLogScalarWhereWithAggregatesInput | AiLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AiLog"> | string
    actionType?: StringWithAggregatesFilter<"AiLog"> | string
    prompt?: StringWithAggregatesFilter<"AiLog"> | string
    response?: StringWithAggregatesFilter<"AiLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AiLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash?: string | null
    phone?: string | null
    role?: $Enums.UserRole
    status?: $Enums.AccountStatus
    profilePictureUrl?: string | null
    needsPasswordChange?: boolean
    authProvider?: string | null
    isVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userProfile?: UserProfileCreateNestedOneWithoutUserInput
    organizationProfile?: OrganizationProfileCreateNestedOneWithoutUserInput
    adminProfile?: AdminProfileCreateNestedOneWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    transactionRequests?: TransactionRequestCreateNestedManyWithoutActorInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash?: string | null
    phone?: string | null
    role?: $Enums.UserRole
    status?: $Enums.AccountStatus
    profilePictureUrl?: string | null
    needsPasswordChange?: boolean
    authProvider?: string | null
    isVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userProfile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    organizationProfile?: OrganizationProfileUncheckedCreateNestedOneWithoutUserInput
    adminProfile?: AdminProfileUncheckedCreateNestedOneWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    transactionRequests?: TransactionRequestUncheckedCreateNestedManyWithoutActorInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    needsPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProfile?: UserProfileUpdateOneWithoutUserNestedInput
    organizationProfile?: OrganizationProfileUpdateOneWithoutUserNestedInput
    adminProfile?: AdminProfileUpdateOneWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    transactionRequests?: TransactionRequestUpdateManyWithoutActorNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    needsPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProfile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    organizationProfile?: OrganizationProfileUncheckedUpdateOneWithoutUserNestedInput
    adminProfile?: AdminProfileUncheckedUpdateOneWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    transactionRequests?: TransactionRequestUncheckedUpdateManyWithoutActorNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash?: string | null
    phone?: string | null
    role?: $Enums.UserRole
    status?: $Enums.AccountStatus
    profilePictureUrl?: string | null
    needsPasswordChange?: boolean
    authProvider?: string | null
    isVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    needsPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    needsPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateInput = {
    id?: string
    name: string
    latitude?: number | null
    longitude?: number | null
    impactScore?: number
    user: UserCreateNestedOneWithoutUserProfileInput
  }

  export type UserProfileUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    latitude?: number | null
    longitude?: number | null
    impactScore?: number
  }

  export type UserProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    impactScore?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutUserProfileNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    impactScore?: FloatFieldUpdateOperationsInput | number
  }

  export type UserProfileCreateManyInput = {
    id?: string
    userId: string
    name: string
    latitude?: number | null
    longitude?: number | null
    impactScore?: number
  }

  export type UserProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    impactScore?: FloatFieldUpdateOperationsInput | number
  }

  export type UserProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    impactScore?: FloatFieldUpdateOperationsInput | number
  }

  export type OrganizationProfileCreateInput = {
    id?: string
    orgName: string
    establishedYear?: number | null
    registrationNumber?: string | null
    latitude: number
    longitude: number
    impactScore?: number
    user: UserCreateNestedOneWithoutOrganizationProfileInput
  }

  export type OrganizationProfileUncheckedCreateInput = {
    id?: string
    userId: string
    orgName: string
    establishedYear?: number | null
    registrationNumber?: string | null
    latitude: number
    longitude: number
    impactScore?: number
  }

  export type OrganizationProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgName?: StringFieldUpdateOperationsInput | string
    establishedYear?: NullableIntFieldUpdateOperationsInput | number | null
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    impactScore?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutOrganizationProfileNestedInput
  }

  export type OrganizationProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    orgName?: StringFieldUpdateOperationsInput | string
    establishedYear?: NullableIntFieldUpdateOperationsInput | number | null
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    impactScore?: FloatFieldUpdateOperationsInput | number
  }

  export type OrganizationProfileCreateManyInput = {
    id?: string
    userId: string
    orgName: string
    establishedYear?: number | null
    registrationNumber?: string | null
    latitude: number
    longitude: number
    impactScore?: number
  }

  export type OrganizationProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgName?: StringFieldUpdateOperationsInput | string
    establishedYear?: NullableIntFieldUpdateOperationsInput | number | null
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    impactScore?: FloatFieldUpdateOperationsInput | number
  }

  export type OrganizationProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    orgName?: StringFieldUpdateOperationsInput | string
    establishedYear?: NullableIntFieldUpdateOperationsInput | number | null
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    impactScore?: FloatFieldUpdateOperationsInput | number
  }

  export type AdminProfileCreateInput = {
    id?: string
    name: string
    department?: string | null
    user: UserCreateNestedOneWithoutAdminProfileInput
  }

  export type AdminProfileUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    department?: string | null
  }

  export type AdminProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAdminProfileNestedInput
  }

  export type AdminProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminProfileCreateManyInput = {
    id?: string
    userId: string
    name: string
    department?: string | null
  }

  export type AdminProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostCreateInput = {
    id?: string
    type: $Enums.PostType
    category: $Enums.PostCategory
    title: string
    description: string
    imageUrl?: string | null
    quantity: number
    estimatedShelfLife?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    latitude: number
    longitude: number
    status?: $Enums.PostStatus
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutPostsInput
    transactionRequests?: TransactionRequestCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    authorId: string
    type: $Enums.PostType
    category: $Enums.PostCategory
    title: string
    description: string
    imageUrl?: string | null
    quantity: number
    estimatedShelfLife?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    latitude: number
    longitude: number
    status?: $Enums.PostStatus
    createdAt?: Date | string
    transactionRequests?: TransactionRequestUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    category?: EnumPostCategoryFieldUpdateOperationsInput | $Enums.PostCategory
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    estimatedShelfLife?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    transactionRequests?: TransactionRequestUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    category?: EnumPostCategoryFieldUpdateOperationsInput | $Enums.PostCategory
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    estimatedShelfLife?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionRequests?: TransactionRequestUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    authorId: string
    type: $Enums.PostType
    category: $Enums.PostCategory
    title: string
    description: string
    imageUrl?: string | null
    quantity: number
    estimatedShelfLife?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    latitude: number
    longitude: number
    status?: $Enums.PostStatus
    createdAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    category?: EnumPostCategoryFieldUpdateOperationsInput | $Enums.PostCategory
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    estimatedShelfLife?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    category?: EnumPostCategoryFieldUpdateOperationsInput | $Enums.PostCategory
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    estimatedShelfLife?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionRequestCreateInput = {
    id?: string
    quantity: string
    status?: $Enums.TransactionStatus
    message?: string | null
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutTransactionRequestsInput
    actor: UserCreateNestedOneWithoutTransactionRequestsInput
    reviews?: ReviewCreateNestedManyWithoutTransactionInput
  }

  export type TransactionRequestUncheckedCreateInput = {
    id?: string
    postId: string
    actorId: string
    quantity: string
    status?: $Enums.TransactionStatus
    message?: string | null
    createdAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutTransactionRequestsNestedInput
    actor?: UserUpdateOneRequiredWithoutTransactionRequestsNestedInput
    reviews?: ReviewUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionRequestCreateManyInput = {
    id?: string
    postId: string
    actorId: string
    quantity: string
    status?: $Enums.TransactionStatus
    message?: string | null
    createdAt?: Date | string
  }

  export type TransactionRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    reviewer: UserCreateNestedOneWithoutReviewsGivenInput
    reviewee: UserCreateNestedOneWithoutReviewsReceivedInput
    transaction: TransactionRequestCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    reviewerId: string
    revieweeId: string
    transactionId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewer?: UserUpdateOneRequiredWithoutReviewsGivenNestedInput
    reviewee?: UserUpdateOneRequiredWithoutReviewsReceivedNestedInput
    transaction?: TransactionRequestUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    revieweeId?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    reviewerId: string
    revieweeId: string
    transactionId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    revieweeId?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiLogCreateInput = {
    id?: string
    actionType: string
    prompt: string
    response: string
    createdAt?: Date | string
  }

  export type AiLogUncheckedCreateInput = {
    id?: string
    actionType: string
    prompt: string
    response: string
    createdAt?: Date | string
  }

  export type AiLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiLogCreateManyInput = {
    id?: string
    actionType: string
    prompt: string
    response: string
    createdAt?: Date | string
  }

  export type AiLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type EnumAccountStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountStatusFilter<$PrismaModel> | $Enums.AccountStatus
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserProfileNullableScalarRelationFilter = {
    is?: UserProfileWhereInput | null
    isNot?: UserProfileWhereInput | null
  }

  export type OrganizationProfileNullableScalarRelationFilter = {
    is?: OrganizationProfileWhereInput | null
    isNot?: OrganizationProfileWhereInput | null
  }

  export type AdminProfileNullableScalarRelationFilter = {
    is?: AdminProfileWhereInput | null
    isNot?: AdminProfileWhereInput | null
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type TransactionRequestListRelationFilter = {
    every?: TransactionRequestWhereInput
    some?: TransactionRequestWhereInput
    none?: TransactionRequestWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    status?: SortOrder
    profilePictureUrl?: SortOrder
    needsPasswordChange?: SortOrder
    authProvider?: SortOrder
    isVerified?: SortOrder
    otp?: SortOrder
    otpExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    status?: SortOrder
    profilePictureUrl?: SortOrder
    needsPasswordChange?: SortOrder
    authProvider?: SortOrder
    isVerified?: SortOrder
    otp?: SortOrder
    otpExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    status?: SortOrder
    profilePictureUrl?: SortOrder
    needsPasswordChange?: SortOrder
    authProvider?: SortOrder
    isVerified?: SortOrder
    otp?: SortOrder
    otpExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumAccountStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountStatusWithAggregatesFilter<$PrismaModel> | $Enums.AccountStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountStatusFilter<$PrismaModel>
    _max?: NestedEnumAccountStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    impactScore?: SortOrder
  }

  export type UserProfileAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    impactScore?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    impactScore?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    impactScore?: SortOrder
  }

  export type UserProfileSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    impactScore?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type OrganizationProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    orgName?: SortOrder
    establishedYear?: SortOrder
    registrationNumber?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    impactScore?: SortOrder
  }

  export type OrganizationProfileAvgOrderByAggregateInput = {
    establishedYear?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    impactScore?: SortOrder
  }

  export type OrganizationProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    orgName?: SortOrder
    establishedYear?: SortOrder
    registrationNumber?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    impactScore?: SortOrder
  }

  export type OrganizationProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    orgName?: SortOrder
    establishedYear?: SortOrder
    registrationNumber?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    impactScore?: SortOrder
  }

  export type OrganizationProfileSumOrderByAggregateInput = {
    establishedYear?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    impactScore?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type AdminProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    department?: SortOrder
  }

  export type AdminProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    department?: SortOrder
  }

  export type AdminProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    department?: SortOrder
  }

  export type EnumPostTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PostType | EnumPostTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPostTypeFilter<$PrismaModel> | $Enums.PostType
  }

  export type EnumPostCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.PostCategory | EnumPostCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.PostCategory[] | ListEnumPostCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostCategory[] | ListEnumPostCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumPostCategoryFilter<$PrismaModel> | $Enums.PostCategory
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumPostStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusFilter<$PrismaModel> | $Enums.PostStatus
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    type?: SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    quantity?: SortOrder
    estimatedShelfLife?: SortOrder
    metadata?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    quantity?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    type?: SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    quantity?: SortOrder
    estimatedShelfLife?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    type?: SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    quantity?: SortOrder
    estimatedShelfLife?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    quantity?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type EnumPostTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostType | EnumPostTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPostTypeWithAggregatesFilter<$PrismaModel> | $Enums.PostType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostTypeFilter<$PrismaModel>
    _max?: NestedEnumPostTypeFilter<$PrismaModel>
  }

  export type EnumPostCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostCategory | EnumPostCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.PostCategory[] | ListEnumPostCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostCategory[] | ListEnumPostCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumPostCategoryWithAggregatesFilter<$PrismaModel> | $Enums.PostCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostCategoryFilter<$PrismaModel>
    _max?: NestedEnumPostCategoryFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumPostStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusWithAggregatesFilter<$PrismaModel> | $Enums.PostStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostStatusFilter<$PrismaModel>
    _max?: NestedEnumPostStatusFilter<$PrismaModel>
  }

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type TransactionRequestCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    actorId?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    actorId?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionRequestMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    actorId?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type TransactionRequestScalarRelationFilter = {
    is?: TransactionRequestWhereInput
    isNot?: TransactionRequestWhereInput
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    reviewerId?: SortOrder
    revieweeId?: SortOrder
    transactionId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    reviewerId?: SortOrder
    revieweeId?: SortOrder
    transactionId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    reviewerId?: SortOrder
    revieweeId?: SortOrder
    transactionId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type AiLogCountOrderByAggregateInput = {
    id?: SortOrder
    actionType?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
  }

  export type AiLogMaxOrderByAggregateInput = {
    id?: SortOrder
    actionType?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
  }

  export type AiLogMinOrderByAggregateInput = {
    id?: SortOrder
    actionType?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
  }

  export type UserProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type OrganizationProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<OrganizationProfileCreateWithoutUserInput, OrganizationProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: OrganizationProfileCreateOrConnectWithoutUserInput
    connect?: OrganizationProfileWhereUniqueInput
  }

  export type AdminProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminProfileCreateWithoutUserInput, AdminProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminProfileCreateOrConnectWithoutUserInput
    connect?: AdminProfileWhereUniqueInput
  }

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type TransactionRequestCreateNestedManyWithoutActorInput = {
    create?: XOR<TransactionRequestCreateWithoutActorInput, TransactionRequestUncheckedCreateWithoutActorInput> | TransactionRequestCreateWithoutActorInput[] | TransactionRequestUncheckedCreateWithoutActorInput[]
    connectOrCreate?: TransactionRequestCreateOrConnectWithoutActorInput | TransactionRequestCreateOrConnectWithoutActorInput[]
    createMany?: TransactionRequestCreateManyActorInputEnvelope
    connect?: TransactionRequestWhereUniqueInput | TransactionRequestWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutReviewerInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutRevieweeInput = {
    create?: XOR<ReviewCreateWithoutRevieweeInput, ReviewUncheckedCreateWithoutRevieweeInput> | ReviewCreateWithoutRevieweeInput[] | ReviewUncheckedCreateWithoutRevieweeInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRevieweeInput | ReviewCreateOrConnectWithoutRevieweeInput[]
    createMany?: ReviewCreateManyRevieweeInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type UserProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type OrganizationProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<OrganizationProfileCreateWithoutUserInput, OrganizationProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: OrganizationProfileCreateOrConnectWithoutUserInput
    connect?: OrganizationProfileWhereUniqueInput
  }

  export type AdminProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminProfileCreateWithoutUserInput, AdminProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminProfileCreateOrConnectWithoutUserInput
    connect?: AdminProfileWhereUniqueInput
  }

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type TransactionRequestUncheckedCreateNestedManyWithoutActorInput = {
    create?: XOR<TransactionRequestCreateWithoutActorInput, TransactionRequestUncheckedCreateWithoutActorInput> | TransactionRequestCreateWithoutActorInput[] | TransactionRequestUncheckedCreateWithoutActorInput[]
    connectOrCreate?: TransactionRequestCreateOrConnectWithoutActorInput | TransactionRequestCreateOrConnectWithoutActorInput[]
    createMany?: TransactionRequestCreateManyActorInputEnvelope
    connect?: TransactionRequestWhereUniqueInput | TransactionRequestWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutReviewerInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutRevieweeInput = {
    create?: XOR<ReviewCreateWithoutRevieweeInput, ReviewUncheckedCreateWithoutRevieweeInput> | ReviewCreateWithoutRevieweeInput[] | ReviewUncheckedCreateWithoutRevieweeInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRevieweeInput | ReviewCreateOrConnectWithoutRevieweeInput[]
    createMany?: ReviewCreateManyRevieweeInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type EnumAccountStatusFieldUpdateOperationsInput = {
    set?: $Enums.AccountStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type OrganizationProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<OrganizationProfileCreateWithoutUserInput, OrganizationProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: OrganizationProfileCreateOrConnectWithoutUserInput
    upsert?: OrganizationProfileUpsertWithoutUserInput
    disconnect?: OrganizationProfileWhereInput | boolean
    delete?: OrganizationProfileWhereInput | boolean
    connect?: OrganizationProfileWhereUniqueInput
    update?: XOR<XOR<OrganizationProfileUpdateToOneWithWhereWithoutUserInput, OrganizationProfileUpdateWithoutUserInput>, OrganizationProfileUncheckedUpdateWithoutUserInput>
  }

  export type AdminProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminProfileCreateWithoutUserInput, AdminProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminProfileCreateOrConnectWithoutUserInput
    upsert?: AdminProfileUpsertWithoutUserInput
    disconnect?: AdminProfileWhereInput | boolean
    delete?: AdminProfileWhereInput | boolean
    connect?: AdminProfileWhereUniqueInput
    update?: XOR<XOR<AdminProfileUpdateToOneWithWhereWithoutUserInput, AdminProfileUpdateWithoutUserInput>, AdminProfileUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type TransactionRequestUpdateManyWithoutActorNestedInput = {
    create?: XOR<TransactionRequestCreateWithoutActorInput, TransactionRequestUncheckedCreateWithoutActorInput> | TransactionRequestCreateWithoutActorInput[] | TransactionRequestUncheckedCreateWithoutActorInput[]
    connectOrCreate?: TransactionRequestCreateOrConnectWithoutActorInput | TransactionRequestCreateOrConnectWithoutActorInput[]
    upsert?: TransactionRequestUpsertWithWhereUniqueWithoutActorInput | TransactionRequestUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: TransactionRequestCreateManyActorInputEnvelope
    set?: TransactionRequestWhereUniqueInput | TransactionRequestWhereUniqueInput[]
    disconnect?: TransactionRequestWhereUniqueInput | TransactionRequestWhereUniqueInput[]
    delete?: TransactionRequestWhereUniqueInput | TransactionRequestWhereUniqueInput[]
    connect?: TransactionRequestWhereUniqueInput | TransactionRequestWhereUniqueInput[]
    update?: TransactionRequestUpdateWithWhereUniqueWithoutActorInput | TransactionRequestUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: TransactionRequestUpdateManyWithWhereWithoutActorInput | TransactionRequestUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: TransactionRequestScalarWhereInput | TransactionRequestScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReviewerInput | ReviewUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReviewerInput | ReviewUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReviewerInput | ReviewUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutRevieweeNestedInput = {
    create?: XOR<ReviewCreateWithoutRevieweeInput, ReviewUncheckedCreateWithoutRevieweeInput> | ReviewCreateWithoutRevieweeInput[] | ReviewUncheckedCreateWithoutRevieweeInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRevieweeInput | ReviewCreateOrConnectWithoutRevieweeInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutRevieweeInput | ReviewUpsertWithWhereUniqueWithoutRevieweeInput[]
    createMany?: ReviewCreateManyRevieweeInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutRevieweeInput | ReviewUpdateWithWhereUniqueWithoutRevieweeInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutRevieweeInput | ReviewUpdateManyWithWhereWithoutRevieweeInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type OrganizationProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<OrganizationProfileCreateWithoutUserInput, OrganizationProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: OrganizationProfileCreateOrConnectWithoutUserInput
    upsert?: OrganizationProfileUpsertWithoutUserInput
    disconnect?: OrganizationProfileWhereInput | boolean
    delete?: OrganizationProfileWhereInput | boolean
    connect?: OrganizationProfileWhereUniqueInput
    update?: XOR<XOR<OrganizationProfileUpdateToOneWithWhereWithoutUserInput, OrganizationProfileUpdateWithoutUserInput>, OrganizationProfileUncheckedUpdateWithoutUserInput>
  }

  export type AdminProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminProfileCreateWithoutUserInput, AdminProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminProfileCreateOrConnectWithoutUserInput
    upsert?: AdminProfileUpsertWithoutUserInput
    disconnect?: AdminProfileWhereInput | boolean
    delete?: AdminProfileWhereInput | boolean
    connect?: AdminProfileWhereUniqueInput
    update?: XOR<XOR<AdminProfileUpdateToOneWithWhereWithoutUserInput, AdminProfileUpdateWithoutUserInput>, AdminProfileUncheckedUpdateWithoutUserInput>
  }

  export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type TransactionRequestUncheckedUpdateManyWithoutActorNestedInput = {
    create?: XOR<TransactionRequestCreateWithoutActorInput, TransactionRequestUncheckedCreateWithoutActorInput> | TransactionRequestCreateWithoutActorInput[] | TransactionRequestUncheckedCreateWithoutActorInput[]
    connectOrCreate?: TransactionRequestCreateOrConnectWithoutActorInput | TransactionRequestCreateOrConnectWithoutActorInput[]
    upsert?: TransactionRequestUpsertWithWhereUniqueWithoutActorInput | TransactionRequestUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: TransactionRequestCreateManyActorInputEnvelope
    set?: TransactionRequestWhereUniqueInput | TransactionRequestWhereUniqueInput[]
    disconnect?: TransactionRequestWhereUniqueInput | TransactionRequestWhereUniqueInput[]
    delete?: TransactionRequestWhereUniqueInput | TransactionRequestWhereUniqueInput[]
    connect?: TransactionRequestWhereUniqueInput | TransactionRequestWhereUniqueInput[]
    update?: TransactionRequestUpdateWithWhereUniqueWithoutActorInput | TransactionRequestUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: TransactionRequestUpdateManyWithWhereWithoutActorInput | TransactionRequestUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: TransactionRequestScalarWhereInput | TransactionRequestScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReviewerInput | ReviewUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReviewerInput | ReviewUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReviewerInput | ReviewUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutRevieweeNestedInput = {
    create?: XOR<ReviewCreateWithoutRevieweeInput, ReviewUncheckedCreateWithoutRevieweeInput> | ReviewCreateWithoutRevieweeInput[] | ReviewUncheckedCreateWithoutRevieweeInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRevieweeInput | ReviewCreateOrConnectWithoutRevieweeInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutRevieweeInput | ReviewUpsertWithWhereUniqueWithoutRevieweeInput[]
    createMany?: ReviewCreateManyRevieweeInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutRevieweeInput | ReviewUpdateWithWhereUniqueWithoutRevieweeInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutRevieweeInput | ReviewUpdateManyWithWhereWithoutRevieweeInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserProfileInput = {
    create?: XOR<UserCreateWithoutUserProfileInput, UserUncheckedCreateWithoutUserProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserProfileInput
    connect?: UserWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutUserProfileNestedInput = {
    create?: XOR<UserCreateWithoutUserProfileInput, UserUncheckedCreateWithoutUserProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserProfileInput
    upsert?: UserUpsertWithoutUserProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserProfileInput, UserUpdateWithoutUserProfileInput>, UserUncheckedUpdateWithoutUserProfileInput>
  }

  export type UserCreateNestedOneWithoutOrganizationProfileInput = {
    create?: XOR<UserCreateWithoutOrganizationProfileInput, UserUncheckedCreateWithoutOrganizationProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationProfileInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutOrganizationProfileNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationProfileInput, UserUncheckedCreateWithoutOrganizationProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationProfileInput
    upsert?: UserUpsertWithoutOrganizationProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrganizationProfileInput, UserUpdateWithoutOrganizationProfileInput>, UserUncheckedUpdateWithoutOrganizationProfileInput>
  }

  export type UserCreateNestedOneWithoutAdminProfileInput = {
    create?: XOR<UserCreateWithoutAdminProfileInput, UserUncheckedCreateWithoutAdminProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAdminProfileNestedInput = {
    create?: XOR<UserCreateWithoutAdminProfileInput, UserUncheckedCreateWithoutAdminProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminProfileInput
    upsert?: UserUpsertWithoutAdminProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdminProfileInput, UserUpdateWithoutAdminProfileInput>, UserUncheckedUpdateWithoutAdminProfileInput>
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type TransactionRequestCreateNestedManyWithoutPostInput = {
    create?: XOR<TransactionRequestCreateWithoutPostInput, TransactionRequestUncheckedCreateWithoutPostInput> | TransactionRequestCreateWithoutPostInput[] | TransactionRequestUncheckedCreateWithoutPostInput[]
    connectOrCreate?: TransactionRequestCreateOrConnectWithoutPostInput | TransactionRequestCreateOrConnectWithoutPostInput[]
    createMany?: TransactionRequestCreateManyPostInputEnvelope
    connect?: TransactionRequestWhereUniqueInput | TransactionRequestWhereUniqueInput[]
  }

  export type TransactionRequestUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<TransactionRequestCreateWithoutPostInput, TransactionRequestUncheckedCreateWithoutPostInput> | TransactionRequestCreateWithoutPostInput[] | TransactionRequestUncheckedCreateWithoutPostInput[]
    connectOrCreate?: TransactionRequestCreateOrConnectWithoutPostInput | TransactionRequestCreateOrConnectWithoutPostInput[]
    createMany?: TransactionRequestCreateManyPostInputEnvelope
    connect?: TransactionRequestWhereUniqueInput | TransactionRequestWhereUniqueInput[]
  }

  export type EnumPostTypeFieldUpdateOperationsInput = {
    set?: $Enums.PostType
  }

  export type EnumPostCategoryFieldUpdateOperationsInput = {
    set?: $Enums.PostCategory
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPostStatusFieldUpdateOperationsInput = {
    set?: $Enums.PostStatus
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type TransactionRequestUpdateManyWithoutPostNestedInput = {
    create?: XOR<TransactionRequestCreateWithoutPostInput, TransactionRequestUncheckedCreateWithoutPostInput> | TransactionRequestCreateWithoutPostInput[] | TransactionRequestUncheckedCreateWithoutPostInput[]
    connectOrCreate?: TransactionRequestCreateOrConnectWithoutPostInput | TransactionRequestCreateOrConnectWithoutPostInput[]
    upsert?: TransactionRequestUpsertWithWhereUniqueWithoutPostInput | TransactionRequestUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: TransactionRequestCreateManyPostInputEnvelope
    set?: TransactionRequestWhereUniqueInput | TransactionRequestWhereUniqueInput[]
    disconnect?: TransactionRequestWhereUniqueInput | TransactionRequestWhereUniqueInput[]
    delete?: TransactionRequestWhereUniqueInput | TransactionRequestWhereUniqueInput[]
    connect?: TransactionRequestWhereUniqueInput | TransactionRequestWhereUniqueInput[]
    update?: TransactionRequestUpdateWithWhereUniqueWithoutPostInput | TransactionRequestUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: TransactionRequestUpdateManyWithWhereWithoutPostInput | TransactionRequestUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: TransactionRequestScalarWhereInput | TransactionRequestScalarWhereInput[]
  }

  export type TransactionRequestUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<TransactionRequestCreateWithoutPostInput, TransactionRequestUncheckedCreateWithoutPostInput> | TransactionRequestCreateWithoutPostInput[] | TransactionRequestUncheckedCreateWithoutPostInput[]
    connectOrCreate?: TransactionRequestCreateOrConnectWithoutPostInput | TransactionRequestCreateOrConnectWithoutPostInput[]
    upsert?: TransactionRequestUpsertWithWhereUniqueWithoutPostInput | TransactionRequestUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: TransactionRequestCreateManyPostInputEnvelope
    set?: TransactionRequestWhereUniqueInput | TransactionRequestWhereUniqueInput[]
    disconnect?: TransactionRequestWhereUniqueInput | TransactionRequestWhereUniqueInput[]
    delete?: TransactionRequestWhereUniqueInput | TransactionRequestWhereUniqueInput[]
    connect?: TransactionRequestWhereUniqueInput | TransactionRequestWhereUniqueInput[]
    update?: TransactionRequestUpdateWithWhereUniqueWithoutPostInput | TransactionRequestUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: TransactionRequestUpdateManyWithWhereWithoutPostInput | TransactionRequestUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: TransactionRequestScalarWhereInput | TransactionRequestScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutTransactionRequestsInput = {
    create?: XOR<PostCreateWithoutTransactionRequestsInput, PostUncheckedCreateWithoutTransactionRequestsInput>
    connectOrCreate?: PostCreateOrConnectWithoutTransactionRequestsInput
    connect?: PostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTransactionRequestsInput = {
    create?: XOR<UserCreateWithoutTransactionRequestsInput, UserUncheckedCreateWithoutTransactionRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutTransactionInput = {
    create?: XOR<ReviewCreateWithoutTransactionInput, ReviewUncheckedCreateWithoutTransactionInput> | ReviewCreateWithoutTransactionInput[] | ReviewUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTransactionInput | ReviewCreateOrConnectWithoutTransactionInput[]
    createMany?: ReviewCreateManyTransactionInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutTransactionInput = {
    create?: XOR<ReviewCreateWithoutTransactionInput, ReviewUncheckedCreateWithoutTransactionInput> | ReviewCreateWithoutTransactionInput[] | ReviewUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTransactionInput | ReviewCreateOrConnectWithoutTransactionInput[]
    createMany?: ReviewCreateManyTransactionInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus
  }

  export type PostUpdateOneRequiredWithoutTransactionRequestsNestedInput = {
    create?: XOR<PostCreateWithoutTransactionRequestsInput, PostUncheckedCreateWithoutTransactionRequestsInput>
    connectOrCreate?: PostCreateOrConnectWithoutTransactionRequestsInput
    upsert?: PostUpsertWithoutTransactionRequestsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutTransactionRequestsInput, PostUpdateWithoutTransactionRequestsInput>, PostUncheckedUpdateWithoutTransactionRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutTransactionRequestsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionRequestsInput, UserUncheckedCreateWithoutTransactionRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionRequestsInput
    upsert?: UserUpsertWithoutTransactionRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionRequestsInput, UserUpdateWithoutTransactionRequestsInput>, UserUncheckedUpdateWithoutTransactionRequestsInput>
  }

  export type ReviewUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<ReviewCreateWithoutTransactionInput, ReviewUncheckedCreateWithoutTransactionInput> | ReviewCreateWithoutTransactionInput[] | ReviewUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTransactionInput | ReviewCreateOrConnectWithoutTransactionInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutTransactionInput | ReviewUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: ReviewCreateManyTransactionInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutTransactionInput | ReviewUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutTransactionInput | ReviewUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<ReviewCreateWithoutTransactionInput, ReviewUncheckedCreateWithoutTransactionInput> | ReviewCreateWithoutTransactionInput[] | ReviewUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTransactionInput | ReviewCreateOrConnectWithoutTransactionInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutTransactionInput | ReviewUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: ReviewCreateManyTransactionInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutTransactionInput | ReviewUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutTransactionInput | ReviewUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutReviewsGivenInput = {
    create?: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsGivenInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsReceivedInput = {
    create?: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type TransactionRequestCreateNestedOneWithoutReviewsInput = {
    create?: XOR<TransactionRequestCreateWithoutReviewsInput, TransactionRequestUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: TransactionRequestCreateOrConnectWithoutReviewsInput
    connect?: TransactionRequestWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReviewsGivenNestedInput = {
    create?: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsGivenInput
    upsert?: UserUpsertWithoutReviewsGivenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsGivenInput, UserUpdateWithoutReviewsGivenInput>, UserUncheckedUpdateWithoutReviewsGivenInput>
  }

  export type UserUpdateOneRequiredWithoutReviewsReceivedNestedInput = {
    create?: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsReceivedInput
    upsert?: UserUpsertWithoutReviewsReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsReceivedInput, UserUpdateWithoutReviewsReceivedInput>, UserUncheckedUpdateWithoutReviewsReceivedInput>
  }

  export type TransactionRequestUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<TransactionRequestCreateWithoutReviewsInput, TransactionRequestUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: TransactionRequestCreateOrConnectWithoutReviewsInput
    upsert?: TransactionRequestUpsertWithoutReviewsInput
    connect?: TransactionRequestWhereUniqueInput
    update?: XOR<XOR<TransactionRequestUpdateToOneWithWhereWithoutReviewsInput, TransactionRequestUpdateWithoutReviewsInput>, TransactionRequestUncheckedUpdateWithoutReviewsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumAccountStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountStatusFilter<$PrismaModel> | $Enums.AccountStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumAccountStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountStatusWithAggregatesFilter<$PrismaModel> | $Enums.AccountStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountStatusFilter<$PrismaModel>
    _max?: NestedEnumAccountStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumPostTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PostType | EnumPostTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPostTypeFilter<$PrismaModel> | $Enums.PostType
  }

  export type NestedEnumPostCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.PostCategory | EnumPostCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.PostCategory[] | ListEnumPostCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostCategory[] | ListEnumPostCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumPostCategoryFilter<$PrismaModel> | $Enums.PostCategory
  }

  export type NestedEnumPostStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusFilter<$PrismaModel> | $Enums.PostStatus
  }

  export type NestedEnumPostTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostType | EnumPostTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPostTypeWithAggregatesFilter<$PrismaModel> | $Enums.PostType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostTypeFilter<$PrismaModel>
    _max?: NestedEnumPostTypeFilter<$PrismaModel>
  }

  export type NestedEnumPostCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostCategory | EnumPostCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.PostCategory[] | ListEnumPostCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostCategory[] | ListEnumPostCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumPostCategoryWithAggregatesFilter<$PrismaModel> | $Enums.PostCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostCategoryFilter<$PrismaModel>
    _max?: NestedEnumPostCategoryFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumPostStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusWithAggregatesFilter<$PrismaModel> | $Enums.PostStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostStatusFilter<$PrismaModel>
    _max?: NestedEnumPostStatusFilter<$PrismaModel>
  }

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type UserProfileCreateWithoutUserInput = {
    id?: string
    name: string
    latitude?: number | null
    longitude?: number | null
    impactScore?: number
  }

  export type UserProfileUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    latitude?: number | null
    longitude?: number | null
    impactScore?: number
  }

  export type UserProfileCreateOrConnectWithoutUserInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
  }

  export type OrganizationProfileCreateWithoutUserInput = {
    id?: string
    orgName: string
    establishedYear?: number | null
    registrationNumber?: string | null
    latitude: number
    longitude: number
    impactScore?: number
  }

  export type OrganizationProfileUncheckedCreateWithoutUserInput = {
    id?: string
    orgName: string
    establishedYear?: number | null
    registrationNumber?: string | null
    latitude: number
    longitude: number
    impactScore?: number
  }

  export type OrganizationProfileCreateOrConnectWithoutUserInput = {
    where: OrganizationProfileWhereUniqueInput
    create: XOR<OrganizationProfileCreateWithoutUserInput, OrganizationProfileUncheckedCreateWithoutUserInput>
  }

  export type AdminProfileCreateWithoutUserInput = {
    id?: string
    name: string
    department?: string | null
  }

  export type AdminProfileUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    department?: string | null
  }

  export type AdminProfileCreateOrConnectWithoutUserInput = {
    where: AdminProfileWhereUniqueInput
    create: XOR<AdminProfileCreateWithoutUserInput, AdminProfileUncheckedCreateWithoutUserInput>
  }

  export type PostCreateWithoutAuthorInput = {
    id?: string
    type: $Enums.PostType
    category: $Enums.PostCategory
    title: string
    description: string
    imageUrl?: string | null
    quantity: number
    estimatedShelfLife?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    latitude: number
    longitude: number
    status?: $Enums.PostStatus
    createdAt?: Date | string
    transactionRequests?: TransactionRequestCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutAuthorInput = {
    id?: string
    type: $Enums.PostType
    category: $Enums.PostCategory
    title: string
    description: string
    imageUrl?: string | null
    quantity: number
    estimatedShelfLife?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    latitude: number
    longitude: number
    status?: $Enums.PostStatus
    createdAt?: Date | string
    transactionRequests?: TransactionRequestUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostCreateManyAuthorInputEnvelope = {
    data: PostCreateManyAuthorInput | PostCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type TransactionRequestCreateWithoutActorInput = {
    id?: string
    quantity: string
    status?: $Enums.TransactionStatus
    message?: string | null
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutTransactionRequestsInput
    reviews?: ReviewCreateNestedManyWithoutTransactionInput
  }

  export type TransactionRequestUncheckedCreateWithoutActorInput = {
    id?: string
    postId: string
    quantity: string
    status?: $Enums.TransactionStatus
    message?: string | null
    createdAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionRequestCreateOrConnectWithoutActorInput = {
    where: TransactionRequestWhereUniqueInput
    create: XOR<TransactionRequestCreateWithoutActorInput, TransactionRequestUncheckedCreateWithoutActorInput>
  }

  export type TransactionRequestCreateManyActorInputEnvelope = {
    data: TransactionRequestCreateManyActorInput | TransactionRequestCreateManyActorInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutReviewerInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    reviewee: UserCreateNestedOneWithoutReviewsReceivedInput
    transaction: TransactionRequestCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutReviewerInput = {
    id?: string
    revieweeId: string
    transactionId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput>
  }

  export type ReviewCreateManyReviewerInputEnvelope = {
    data: ReviewCreateManyReviewerInput | ReviewCreateManyReviewerInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutRevieweeInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    reviewer: UserCreateNestedOneWithoutReviewsGivenInput
    transaction: TransactionRequestCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutRevieweeInput = {
    id?: string
    reviewerId: string
    transactionId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutRevieweeInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutRevieweeInput, ReviewUncheckedCreateWithoutRevieweeInput>
  }

  export type ReviewCreateManyRevieweeInputEnvelope = {
    data: ReviewCreateManyRevieweeInput | ReviewCreateManyRevieweeInput[]
    skipDuplicates?: boolean
  }

  export type UserProfileUpsertWithoutUserInput = {
    update: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    impactScore?: FloatFieldUpdateOperationsInput | number
  }

  export type UserProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    impactScore?: FloatFieldUpdateOperationsInput | number
  }

  export type OrganizationProfileUpsertWithoutUserInput = {
    update: XOR<OrganizationProfileUpdateWithoutUserInput, OrganizationProfileUncheckedUpdateWithoutUserInput>
    create: XOR<OrganizationProfileCreateWithoutUserInput, OrganizationProfileUncheckedCreateWithoutUserInput>
    where?: OrganizationProfileWhereInput
  }

  export type OrganizationProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: OrganizationProfileWhereInput
    data: XOR<OrganizationProfileUpdateWithoutUserInput, OrganizationProfileUncheckedUpdateWithoutUserInput>
  }

  export type OrganizationProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgName?: StringFieldUpdateOperationsInput | string
    establishedYear?: NullableIntFieldUpdateOperationsInput | number | null
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    impactScore?: FloatFieldUpdateOperationsInput | number
  }

  export type OrganizationProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgName?: StringFieldUpdateOperationsInput | string
    establishedYear?: NullableIntFieldUpdateOperationsInput | number | null
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    impactScore?: FloatFieldUpdateOperationsInput | number
  }

  export type AdminProfileUpsertWithoutUserInput = {
    update: XOR<AdminProfileUpdateWithoutUserInput, AdminProfileUncheckedUpdateWithoutUserInput>
    create: XOR<AdminProfileCreateWithoutUserInput, AdminProfileUncheckedCreateWithoutUserInput>
    where?: AdminProfileWhereInput
  }

  export type AdminProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: AdminProfileWhereInput
    data: XOR<AdminProfileUpdateWithoutUserInput, AdminProfileUncheckedUpdateWithoutUserInput>
  }

  export type AdminProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
  }

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    authorId?: StringFilter<"Post"> | string
    type?: EnumPostTypeFilter<"Post"> | $Enums.PostType
    category?: EnumPostCategoryFilter<"Post"> | $Enums.PostCategory
    title?: StringFilter<"Post"> | string
    description?: StringFilter<"Post"> | string
    imageUrl?: StringNullableFilter<"Post"> | string | null
    quantity?: IntFilter<"Post"> | number
    estimatedShelfLife?: DateTimeNullableFilter<"Post"> | Date | string | null
    metadata?: JsonNullableFilter<"Post">
    latitude?: FloatFilter<"Post"> | number
    longitude?: FloatFilter<"Post"> | number
    status?: EnumPostStatusFilter<"Post"> | $Enums.PostStatus
    createdAt?: DateTimeFilter<"Post"> | Date | string
  }

  export type TransactionRequestUpsertWithWhereUniqueWithoutActorInput = {
    where: TransactionRequestWhereUniqueInput
    update: XOR<TransactionRequestUpdateWithoutActorInput, TransactionRequestUncheckedUpdateWithoutActorInput>
    create: XOR<TransactionRequestCreateWithoutActorInput, TransactionRequestUncheckedCreateWithoutActorInput>
  }

  export type TransactionRequestUpdateWithWhereUniqueWithoutActorInput = {
    where: TransactionRequestWhereUniqueInput
    data: XOR<TransactionRequestUpdateWithoutActorInput, TransactionRequestUncheckedUpdateWithoutActorInput>
  }

  export type TransactionRequestUpdateManyWithWhereWithoutActorInput = {
    where: TransactionRequestScalarWhereInput
    data: XOR<TransactionRequestUpdateManyMutationInput, TransactionRequestUncheckedUpdateManyWithoutActorInput>
  }

  export type TransactionRequestScalarWhereInput = {
    AND?: TransactionRequestScalarWhereInput | TransactionRequestScalarWhereInput[]
    OR?: TransactionRequestScalarWhereInput[]
    NOT?: TransactionRequestScalarWhereInput | TransactionRequestScalarWhereInput[]
    id?: StringFilter<"TransactionRequest"> | string
    postId?: StringFilter<"TransactionRequest"> | string
    actorId?: StringFilter<"TransactionRequest"> | string
    quantity?: StringFilter<"TransactionRequest"> | string
    status?: EnumTransactionStatusFilter<"TransactionRequest"> | $Enums.TransactionStatus
    message?: StringNullableFilter<"TransactionRequest"> | string | null
    createdAt?: DateTimeFilter<"TransactionRequest"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutReviewerInput, ReviewUncheckedUpdateWithoutReviewerInput>
    create: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutReviewerInput, ReviewUncheckedUpdateWithoutReviewerInput>
  }

  export type ReviewUpdateManyWithWhereWithoutReviewerInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutReviewerInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    reviewerId?: StringFilter<"Review"> | string
    revieweeId?: StringFilter<"Review"> | string
    transactionId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutRevieweeInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutRevieweeInput, ReviewUncheckedUpdateWithoutRevieweeInput>
    create: XOR<ReviewCreateWithoutRevieweeInput, ReviewUncheckedCreateWithoutRevieweeInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutRevieweeInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutRevieweeInput, ReviewUncheckedUpdateWithoutRevieweeInput>
  }

  export type ReviewUpdateManyWithWhereWithoutRevieweeInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutRevieweeInput>
  }

  export type UserCreateWithoutUserProfileInput = {
    id?: string
    email: string
    passwordHash?: string | null
    phone?: string | null
    role?: $Enums.UserRole
    status?: $Enums.AccountStatus
    profilePictureUrl?: string | null
    needsPasswordChange?: boolean
    authProvider?: string | null
    isVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationProfile?: OrganizationProfileCreateNestedOneWithoutUserInput
    adminProfile?: AdminProfileCreateNestedOneWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    transactionRequests?: TransactionRequestCreateNestedManyWithoutActorInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeInput
  }

  export type UserUncheckedCreateWithoutUserProfileInput = {
    id?: string
    email: string
    passwordHash?: string | null
    phone?: string | null
    role?: $Enums.UserRole
    status?: $Enums.AccountStatus
    profilePictureUrl?: string | null
    needsPasswordChange?: boolean
    authProvider?: string | null
    isVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationProfile?: OrganizationProfileUncheckedCreateNestedOneWithoutUserInput
    adminProfile?: AdminProfileUncheckedCreateNestedOneWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    transactionRequests?: TransactionRequestUncheckedCreateNestedManyWithoutActorInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeInput
  }

  export type UserCreateOrConnectWithoutUserProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserProfileInput, UserUncheckedCreateWithoutUserProfileInput>
  }

  export type UserUpsertWithoutUserProfileInput = {
    update: XOR<UserUpdateWithoutUserProfileInput, UserUncheckedUpdateWithoutUserProfileInput>
    create: XOR<UserCreateWithoutUserProfileInput, UserUncheckedCreateWithoutUserProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserProfileInput, UserUncheckedUpdateWithoutUserProfileInput>
  }

  export type UserUpdateWithoutUserProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    needsPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationProfile?: OrganizationProfileUpdateOneWithoutUserNestedInput
    adminProfile?: AdminProfileUpdateOneWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    transactionRequests?: TransactionRequestUpdateManyWithoutActorNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeNestedInput
  }

  export type UserUncheckedUpdateWithoutUserProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    needsPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationProfile?: OrganizationProfileUncheckedUpdateOneWithoutUserNestedInput
    adminProfile?: AdminProfileUncheckedUpdateOneWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    transactionRequests?: TransactionRequestUncheckedUpdateManyWithoutActorNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeNestedInput
  }

  export type UserCreateWithoutOrganizationProfileInput = {
    id?: string
    email: string
    passwordHash?: string | null
    phone?: string | null
    role?: $Enums.UserRole
    status?: $Enums.AccountStatus
    profilePictureUrl?: string | null
    needsPasswordChange?: boolean
    authProvider?: string | null
    isVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userProfile?: UserProfileCreateNestedOneWithoutUserInput
    adminProfile?: AdminProfileCreateNestedOneWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    transactionRequests?: TransactionRequestCreateNestedManyWithoutActorInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeInput
  }

  export type UserUncheckedCreateWithoutOrganizationProfileInput = {
    id?: string
    email: string
    passwordHash?: string | null
    phone?: string | null
    role?: $Enums.UserRole
    status?: $Enums.AccountStatus
    profilePictureUrl?: string | null
    needsPasswordChange?: boolean
    authProvider?: string | null
    isVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userProfile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    adminProfile?: AdminProfileUncheckedCreateNestedOneWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    transactionRequests?: TransactionRequestUncheckedCreateNestedManyWithoutActorInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeInput
  }

  export type UserCreateOrConnectWithoutOrganizationProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrganizationProfileInput, UserUncheckedCreateWithoutOrganizationProfileInput>
  }

  export type UserUpsertWithoutOrganizationProfileInput = {
    update: XOR<UserUpdateWithoutOrganizationProfileInput, UserUncheckedUpdateWithoutOrganizationProfileInput>
    create: XOR<UserCreateWithoutOrganizationProfileInput, UserUncheckedCreateWithoutOrganizationProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrganizationProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrganizationProfileInput, UserUncheckedUpdateWithoutOrganizationProfileInput>
  }

  export type UserUpdateWithoutOrganizationProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    needsPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProfile?: UserProfileUpdateOneWithoutUserNestedInput
    adminProfile?: AdminProfileUpdateOneWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    transactionRequests?: TransactionRequestUpdateManyWithoutActorNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeNestedInput
  }

  export type UserUncheckedUpdateWithoutOrganizationProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    needsPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProfile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    adminProfile?: AdminProfileUncheckedUpdateOneWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    transactionRequests?: TransactionRequestUncheckedUpdateManyWithoutActorNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeNestedInput
  }

  export type UserCreateWithoutAdminProfileInput = {
    id?: string
    email: string
    passwordHash?: string | null
    phone?: string | null
    role?: $Enums.UserRole
    status?: $Enums.AccountStatus
    profilePictureUrl?: string | null
    needsPasswordChange?: boolean
    authProvider?: string | null
    isVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userProfile?: UserProfileCreateNestedOneWithoutUserInput
    organizationProfile?: OrganizationProfileCreateNestedOneWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    transactionRequests?: TransactionRequestCreateNestedManyWithoutActorInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeInput
  }

  export type UserUncheckedCreateWithoutAdminProfileInput = {
    id?: string
    email: string
    passwordHash?: string | null
    phone?: string | null
    role?: $Enums.UserRole
    status?: $Enums.AccountStatus
    profilePictureUrl?: string | null
    needsPasswordChange?: boolean
    authProvider?: string | null
    isVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userProfile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    organizationProfile?: OrganizationProfileUncheckedCreateNestedOneWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    transactionRequests?: TransactionRequestUncheckedCreateNestedManyWithoutActorInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeInput
  }

  export type UserCreateOrConnectWithoutAdminProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdminProfileInput, UserUncheckedCreateWithoutAdminProfileInput>
  }

  export type UserUpsertWithoutAdminProfileInput = {
    update: XOR<UserUpdateWithoutAdminProfileInput, UserUncheckedUpdateWithoutAdminProfileInput>
    create: XOR<UserCreateWithoutAdminProfileInput, UserUncheckedCreateWithoutAdminProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdminProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdminProfileInput, UserUncheckedUpdateWithoutAdminProfileInput>
  }

  export type UserUpdateWithoutAdminProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    needsPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProfile?: UserProfileUpdateOneWithoutUserNestedInput
    organizationProfile?: OrganizationProfileUpdateOneWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    transactionRequests?: TransactionRequestUpdateManyWithoutActorNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeNestedInput
  }

  export type UserUncheckedUpdateWithoutAdminProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    needsPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProfile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    organizationProfile?: OrganizationProfileUncheckedUpdateOneWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    transactionRequests?: TransactionRequestUncheckedUpdateManyWithoutActorNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeNestedInput
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    phone?: string | null
    role?: $Enums.UserRole
    status?: $Enums.AccountStatus
    profilePictureUrl?: string | null
    needsPasswordChange?: boolean
    authProvider?: string | null
    isVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userProfile?: UserProfileCreateNestedOneWithoutUserInput
    organizationProfile?: OrganizationProfileCreateNestedOneWithoutUserInput
    adminProfile?: AdminProfileCreateNestedOneWithoutUserInput
    transactionRequests?: TransactionRequestCreateNestedManyWithoutActorInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    phone?: string | null
    role?: $Enums.UserRole
    status?: $Enums.AccountStatus
    profilePictureUrl?: string | null
    needsPasswordChange?: boolean
    authProvider?: string | null
    isVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userProfile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    organizationProfile?: OrganizationProfileUncheckedCreateNestedOneWithoutUserInput
    adminProfile?: AdminProfileUncheckedCreateNestedOneWithoutUserInput
    transactionRequests?: TransactionRequestUncheckedCreateNestedManyWithoutActorInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type TransactionRequestCreateWithoutPostInput = {
    id?: string
    quantity: string
    status?: $Enums.TransactionStatus
    message?: string | null
    createdAt?: Date | string
    actor: UserCreateNestedOneWithoutTransactionRequestsInput
    reviews?: ReviewCreateNestedManyWithoutTransactionInput
  }

  export type TransactionRequestUncheckedCreateWithoutPostInput = {
    id?: string
    actorId: string
    quantity: string
    status?: $Enums.TransactionStatus
    message?: string | null
    createdAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionRequestCreateOrConnectWithoutPostInput = {
    where: TransactionRequestWhereUniqueInput
    create: XOR<TransactionRequestCreateWithoutPostInput, TransactionRequestUncheckedCreateWithoutPostInput>
  }

  export type TransactionRequestCreateManyPostInputEnvelope = {
    data: TransactionRequestCreateManyPostInput | TransactionRequestCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    needsPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProfile?: UserProfileUpdateOneWithoutUserNestedInput
    organizationProfile?: OrganizationProfileUpdateOneWithoutUserNestedInput
    adminProfile?: AdminProfileUpdateOneWithoutUserNestedInput
    transactionRequests?: TransactionRequestUpdateManyWithoutActorNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    needsPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProfile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    organizationProfile?: OrganizationProfileUncheckedUpdateOneWithoutUserNestedInput
    adminProfile?: AdminProfileUncheckedUpdateOneWithoutUserNestedInput
    transactionRequests?: TransactionRequestUncheckedUpdateManyWithoutActorNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeNestedInput
  }

  export type TransactionRequestUpsertWithWhereUniqueWithoutPostInput = {
    where: TransactionRequestWhereUniqueInput
    update: XOR<TransactionRequestUpdateWithoutPostInput, TransactionRequestUncheckedUpdateWithoutPostInput>
    create: XOR<TransactionRequestCreateWithoutPostInput, TransactionRequestUncheckedCreateWithoutPostInput>
  }

  export type TransactionRequestUpdateWithWhereUniqueWithoutPostInput = {
    where: TransactionRequestWhereUniqueInput
    data: XOR<TransactionRequestUpdateWithoutPostInput, TransactionRequestUncheckedUpdateWithoutPostInput>
  }

  export type TransactionRequestUpdateManyWithWhereWithoutPostInput = {
    where: TransactionRequestScalarWhereInput
    data: XOR<TransactionRequestUpdateManyMutationInput, TransactionRequestUncheckedUpdateManyWithoutPostInput>
  }

  export type PostCreateWithoutTransactionRequestsInput = {
    id?: string
    type: $Enums.PostType
    category: $Enums.PostCategory
    title: string
    description: string
    imageUrl?: string | null
    quantity: number
    estimatedShelfLife?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    latitude: number
    longitude: number
    status?: $Enums.PostStatus
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutTransactionRequestsInput = {
    id?: string
    authorId: string
    type: $Enums.PostType
    category: $Enums.PostCategory
    title: string
    description: string
    imageUrl?: string | null
    quantity: number
    estimatedShelfLife?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    latitude: number
    longitude: number
    status?: $Enums.PostStatus
    createdAt?: Date | string
  }

  export type PostCreateOrConnectWithoutTransactionRequestsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutTransactionRequestsInput, PostUncheckedCreateWithoutTransactionRequestsInput>
  }

  export type UserCreateWithoutTransactionRequestsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    phone?: string | null
    role?: $Enums.UserRole
    status?: $Enums.AccountStatus
    profilePictureUrl?: string | null
    needsPasswordChange?: boolean
    authProvider?: string | null
    isVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userProfile?: UserProfileCreateNestedOneWithoutUserInput
    organizationProfile?: OrganizationProfileCreateNestedOneWithoutUserInput
    adminProfile?: AdminProfileCreateNestedOneWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeInput
  }

  export type UserUncheckedCreateWithoutTransactionRequestsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    phone?: string | null
    role?: $Enums.UserRole
    status?: $Enums.AccountStatus
    profilePictureUrl?: string | null
    needsPasswordChange?: boolean
    authProvider?: string | null
    isVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userProfile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    organizationProfile?: OrganizationProfileUncheckedCreateNestedOneWithoutUserInput
    adminProfile?: AdminProfileUncheckedCreateNestedOneWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeInput
  }

  export type UserCreateOrConnectWithoutTransactionRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionRequestsInput, UserUncheckedCreateWithoutTransactionRequestsInput>
  }

  export type ReviewCreateWithoutTransactionInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    reviewer: UserCreateNestedOneWithoutReviewsGivenInput
    reviewee: UserCreateNestedOneWithoutReviewsReceivedInput
  }

  export type ReviewUncheckedCreateWithoutTransactionInput = {
    id?: string
    reviewerId: string
    revieweeId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutTransactionInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutTransactionInput, ReviewUncheckedCreateWithoutTransactionInput>
  }

  export type ReviewCreateManyTransactionInputEnvelope = {
    data: ReviewCreateManyTransactionInput | ReviewCreateManyTransactionInput[]
    skipDuplicates?: boolean
  }

  export type PostUpsertWithoutTransactionRequestsInput = {
    update: XOR<PostUpdateWithoutTransactionRequestsInput, PostUncheckedUpdateWithoutTransactionRequestsInput>
    create: XOR<PostCreateWithoutTransactionRequestsInput, PostUncheckedCreateWithoutTransactionRequestsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutTransactionRequestsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutTransactionRequestsInput, PostUncheckedUpdateWithoutTransactionRequestsInput>
  }

  export type PostUpdateWithoutTransactionRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    category?: EnumPostCategoryFieldUpdateOperationsInput | $Enums.PostCategory
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    estimatedShelfLife?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutTransactionRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    category?: EnumPostCategoryFieldUpdateOperationsInput | $Enums.PostCategory
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    estimatedShelfLife?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutTransactionRequestsInput = {
    update: XOR<UserUpdateWithoutTransactionRequestsInput, UserUncheckedUpdateWithoutTransactionRequestsInput>
    create: XOR<UserCreateWithoutTransactionRequestsInput, UserUncheckedCreateWithoutTransactionRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionRequestsInput, UserUncheckedUpdateWithoutTransactionRequestsInput>
  }

  export type UserUpdateWithoutTransactionRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    needsPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProfile?: UserProfileUpdateOneWithoutUserNestedInput
    organizationProfile?: OrganizationProfileUpdateOneWithoutUserNestedInput
    adminProfile?: AdminProfileUpdateOneWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    needsPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProfile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    organizationProfile?: OrganizationProfileUncheckedUpdateOneWithoutUserNestedInput
    adminProfile?: AdminProfileUncheckedUpdateOneWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeNestedInput
  }

  export type ReviewUpsertWithWhereUniqueWithoutTransactionInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutTransactionInput, ReviewUncheckedUpdateWithoutTransactionInput>
    create: XOR<ReviewCreateWithoutTransactionInput, ReviewUncheckedCreateWithoutTransactionInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutTransactionInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutTransactionInput, ReviewUncheckedUpdateWithoutTransactionInput>
  }

  export type ReviewUpdateManyWithWhereWithoutTransactionInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutTransactionInput>
  }

  export type UserCreateWithoutReviewsGivenInput = {
    id?: string
    email: string
    passwordHash?: string | null
    phone?: string | null
    role?: $Enums.UserRole
    status?: $Enums.AccountStatus
    profilePictureUrl?: string | null
    needsPasswordChange?: boolean
    authProvider?: string | null
    isVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userProfile?: UserProfileCreateNestedOneWithoutUserInput
    organizationProfile?: OrganizationProfileCreateNestedOneWithoutUserInput
    adminProfile?: AdminProfileCreateNestedOneWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    transactionRequests?: TransactionRequestCreateNestedManyWithoutActorInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeInput
  }

  export type UserUncheckedCreateWithoutReviewsGivenInput = {
    id?: string
    email: string
    passwordHash?: string | null
    phone?: string | null
    role?: $Enums.UserRole
    status?: $Enums.AccountStatus
    profilePictureUrl?: string | null
    needsPasswordChange?: boolean
    authProvider?: string | null
    isVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userProfile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    organizationProfile?: OrganizationProfileUncheckedCreateNestedOneWithoutUserInput
    adminProfile?: AdminProfileUncheckedCreateNestedOneWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    transactionRequests?: TransactionRequestUncheckedCreateNestedManyWithoutActorInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeInput
  }

  export type UserCreateOrConnectWithoutReviewsGivenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
  }

  export type UserCreateWithoutReviewsReceivedInput = {
    id?: string
    email: string
    passwordHash?: string | null
    phone?: string | null
    role?: $Enums.UserRole
    status?: $Enums.AccountStatus
    profilePictureUrl?: string | null
    needsPasswordChange?: boolean
    authProvider?: string | null
    isVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userProfile?: UserProfileCreateNestedOneWithoutUserInput
    organizationProfile?: OrganizationProfileCreateNestedOneWithoutUserInput
    adminProfile?: AdminProfileCreateNestedOneWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    transactionRequests?: TransactionRequestCreateNestedManyWithoutActorInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
  }

  export type UserUncheckedCreateWithoutReviewsReceivedInput = {
    id?: string
    email: string
    passwordHash?: string | null
    phone?: string | null
    role?: $Enums.UserRole
    status?: $Enums.AccountStatus
    profilePictureUrl?: string | null
    needsPasswordChange?: boolean
    authProvider?: string | null
    isVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userProfile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    organizationProfile?: OrganizationProfileUncheckedCreateNestedOneWithoutUserInput
    adminProfile?: AdminProfileUncheckedCreateNestedOneWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    transactionRequests?: TransactionRequestUncheckedCreateNestedManyWithoutActorInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type UserCreateOrConnectWithoutReviewsReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
  }

  export type TransactionRequestCreateWithoutReviewsInput = {
    id?: string
    quantity: string
    status?: $Enums.TransactionStatus
    message?: string | null
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutTransactionRequestsInput
    actor: UserCreateNestedOneWithoutTransactionRequestsInput
  }

  export type TransactionRequestUncheckedCreateWithoutReviewsInput = {
    id?: string
    postId: string
    actorId: string
    quantity: string
    status?: $Enums.TransactionStatus
    message?: string | null
    createdAt?: Date | string
  }

  export type TransactionRequestCreateOrConnectWithoutReviewsInput = {
    where: TransactionRequestWhereUniqueInput
    create: XOR<TransactionRequestCreateWithoutReviewsInput, TransactionRequestUncheckedCreateWithoutReviewsInput>
  }

  export type UserUpsertWithoutReviewsGivenInput = {
    update: XOR<UserUpdateWithoutReviewsGivenInput, UserUncheckedUpdateWithoutReviewsGivenInput>
    create: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsGivenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsGivenInput, UserUncheckedUpdateWithoutReviewsGivenInput>
  }

  export type UserUpdateWithoutReviewsGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    needsPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProfile?: UserProfileUpdateOneWithoutUserNestedInput
    organizationProfile?: OrganizationProfileUpdateOneWithoutUserNestedInput
    adminProfile?: AdminProfileUpdateOneWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    transactionRequests?: TransactionRequestUpdateManyWithoutActorNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    needsPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProfile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    organizationProfile?: OrganizationProfileUncheckedUpdateOneWithoutUserNestedInput
    adminProfile?: AdminProfileUncheckedUpdateOneWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    transactionRequests?: TransactionRequestUncheckedUpdateManyWithoutActorNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeNestedInput
  }

  export type UserUpsertWithoutReviewsReceivedInput = {
    update: XOR<UserUpdateWithoutReviewsReceivedInput, UserUncheckedUpdateWithoutReviewsReceivedInput>
    create: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsReceivedInput, UserUncheckedUpdateWithoutReviewsReceivedInput>
  }

  export type UserUpdateWithoutReviewsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    needsPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProfile?: UserProfileUpdateOneWithoutUserNestedInput
    organizationProfile?: OrganizationProfileUpdateOneWithoutUserNestedInput
    adminProfile?: AdminProfileUpdateOneWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    transactionRequests?: TransactionRequestUpdateManyWithoutActorNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    needsPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProfile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    organizationProfile?: OrganizationProfileUncheckedUpdateOneWithoutUserNestedInput
    adminProfile?: AdminProfileUncheckedUpdateOneWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    transactionRequests?: TransactionRequestUncheckedUpdateManyWithoutActorNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type TransactionRequestUpsertWithoutReviewsInput = {
    update: XOR<TransactionRequestUpdateWithoutReviewsInput, TransactionRequestUncheckedUpdateWithoutReviewsInput>
    create: XOR<TransactionRequestCreateWithoutReviewsInput, TransactionRequestUncheckedCreateWithoutReviewsInput>
    where?: TransactionRequestWhereInput
  }

  export type TransactionRequestUpdateToOneWithWhereWithoutReviewsInput = {
    where?: TransactionRequestWhereInput
    data: XOR<TransactionRequestUpdateWithoutReviewsInput, TransactionRequestUncheckedUpdateWithoutReviewsInput>
  }

  export type TransactionRequestUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutTransactionRequestsNestedInput
    actor?: UserUpdateOneRequiredWithoutTransactionRequestsNestedInput
  }

  export type TransactionRequestUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateManyAuthorInput = {
    id?: string
    type: $Enums.PostType
    category: $Enums.PostCategory
    title: string
    description: string
    imageUrl?: string | null
    quantity: number
    estimatedShelfLife?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    latitude: number
    longitude: number
    status?: $Enums.PostStatus
    createdAt?: Date | string
  }

  export type TransactionRequestCreateManyActorInput = {
    id?: string
    postId: string
    quantity: string
    status?: $Enums.TransactionStatus
    message?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateManyReviewerInput = {
    id?: string
    revieweeId: string
    transactionId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateManyRevieweeInput = {
    id?: string
    reviewerId: string
    transactionId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type PostUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    category?: EnumPostCategoryFieldUpdateOperationsInput | $Enums.PostCategory
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    estimatedShelfLife?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionRequests?: TransactionRequestUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    category?: EnumPostCategoryFieldUpdateOperationsInput | $Enums.PostCategory
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    estimatedShelfLife?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionRequests?: TransactionRequestUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    category?: EnumPostCategoryFieldUpdateOperationsInput | $Enums.PostCategory
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    estimatedShelfLife?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionRequestUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutTransactionRequestsNestedInput
    reviews?: ReviewUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionRequestUncheckedUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionRequestUncheckedUpdateManyWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewee?: UserUpdateOneRequiredWithoutReviewsReceivedNestedInput
    transaction?: TransactionRequestUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    revieweeId?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    revieweeId?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutRevieweeInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewer?: UserUpdateOneRequiredWithoutReviewsGivenNestedInput
    transaction?: TransactionRequestUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutRevieweeInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutRevieweeInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionRequestCreateManyPostInput = {
    id?: string
    actorId: string
    quantity: string
    status?: $Enums.TransactionStatus
    message?: string | null
    createdAt?: Date | string
  }

  export type TransactionRequestUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: UserUpdateOneRequiredWithoutTransactionRequestsNestedInput
    reviews?: ReviewUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionRequestUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionRequestUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyTransactionInput = {
    id?: string
    reviewerId: string
    revieweeId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewer?: UserUpdateOneRequiredWithoutReviewsGivenNestedInput
    reviewee?: UserUpdateOneRequiredWithoutReviewsReceivedNestedInput
  }

  export type ReviewUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    revieweeId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    revieweeId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
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