
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
 * Model Dear
 * 
 */
export type Dear = $Result.DefaultSelection<Prisma.$DearPayload>
/**
 * Model Teacher
 * 
 */
export type Teacher = $Result.DefaultSelection<Prisma.$TeacherPayload>
/**
 * Model Scheduling
 * 
 */
export type Scheduling = $Result.DefaultSelection<Prisma.$SchedulingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Category: {
  MATEMATICA: 'MATEMATICA',
  PORTUGUES: 'PORTUGUES',
  FISICA: 'FISICA',
  QUIMICA: 'QUIMICA',
  GEOGRAFIA: 'GEOGRAFIA',
  HISTORIA: 'HISTORIA',
  CIENCIAS: 'CIENCIAS',
  INGLES: 'INGLES',
  ESPANHOL: 'ESPANHOL',
  OUTROS: 'OUTROS'
};

export type Category = (typeof Category)[keyof typeof Category]

}

export type Category = $Enums.Category

export const Category: typeof $Enums.Category

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Dears
 * const dears = await prisma.dear.findMany()
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
   * // Fetch zero or more Dears
   * const dears = await prisma.dear.findMany()
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
   * `prisma.dear`: Exposes CRUD operations for the **Dear** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dears
    * const dears = await prisma.dear.findMany()
    * ```
    */
  get dear(): Prisma.DearDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacher`: Exposes CRUD operations for the **Teacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teacher.findMany()
    * ```
    */
  get teacher(): Prisma.TeacherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scheduling`: Exposes CRUD operations for the **Scheduling** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedulings
    * const schedulings = await prisma.scheduling.findMany()
    * ```
    */
  get scheduling(): Prisma.SchedulingDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Dear: 'Dear',
    Teacher: 'Teacher',
    Scheduling: 'Scheduling'
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
      modelProps: "dear" | "teacher" | "scheduling"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Dear: {
        payload: Prisma.$DearPayload<ExtArgs>
        fields: Prisma.DearFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DearFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DearPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DearFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DearPayload>
          }
          findFirst: {
            args: Prisma.DearFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DearPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DearFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DearPayload>
          }
          findMany: {
            args: Prisma.DearFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DearPayload>[]
          }
          create: {
            args: Prisma.DearCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DearPayload>
          }
          createMany: {
            args: Prisma.DearCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DearCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DearPayload>[]
          }
          delete: {
            args: Prisma.DearDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DearPayload>
          }
          update: {
            args: Prisma.DearUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DearPayload>
          }
          deleteMany: {
            args: Prisma.DearDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DearUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DearUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DearPayload>[]
          }
          upsert: {
            args: Prisma.DearUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DearPayload>
          }
          aggregate: {
            args: Prisma.DearAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDear>
          }
          groupBy: {
            args: Prisma.DearGroupByArgs<ExtArgs>
            result: $Utils.Optional<DearGroupByOutputType>[]
          }
          count: {
            args: Prisma.DearCountArgs<ExtArgs>
            result: $Utils.Optional<DearCountAggregateOutputType> | number
          }
        }
      }
      Teacher: {
        payload: Prisma.$TeacherPayload<ExtArgs>
        fields: Prisma.TeacherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findFirst: {
            args: Prisma.TeacherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findMany: {
            args: Prisma.TeacherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          create: {
            args: Prisma.TeacherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          createMany: {
            args: Prisma.TeacherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          delete: {
            args: Prisma.TeacherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          update: {
            args: Prisma.TeacherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          deleteMany: {
            args: Prisma.TeacherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeacherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          upsert: {
            args: Prisma.TeacherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          aggregate: {
            args: Prisma.TeacherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacher>
          }
          groupBy: {
            args: Prisma.TeacherGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherCountAggregateOutputType> | number
          }
        }
      }
      Scheduling: {
        payload: Prisma.$SchedulingPayload<ExtArgs>
        fields: Prisma.SchedulingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchedulingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchedulingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload>
          }
          findFirst: {
            args: Prisma.SchedulingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchedulingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload>
          }
          findMany: {
            args: Prisma.SchedulingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload>[]
          }
          create: {
            args: Prisma.SchedulingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload>
          }
          createMany: {
            args: Prisma.SchedulingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SchedulingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload>[]
          }
          delete: {
            args: Prisma.SchedulingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload>
          }
          update: {
            args: Prisma.SchedulingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload>
          }
          deleteMany: {
            args: Prisma.SchedulingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchedulingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SchedulingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload>[]
          }
          upsert: {
            args: Prisma.SchedulingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload>
          }
          aggregate: {
            args: Prisma.SchedulingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScheduling>
          }
          groupBy: {
            args: Prisma.SchedulingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchedulingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchedulingCountArgs<ExtArgs>
            result: $Utils.Optional<SchedulingCountAggregateOutputType> | number
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
    dear?: DearOmit
    teacher?: TeacherOmit
    scheduling?: SchedulingOmit
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
   * Count Type DearCountOutputType
   */

  export type DearCountOutputType = {
    scheduling: number
  }

  export type DearCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scheduling?: boolean | DearCountOutputTypeCountSchedulingArgs
  }

  // Custom InputTypes
  /**
   * DearCountOutputType without action
   */
  export type DearCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DearCountOutputType
     */
    select?: DearCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DearCountOutputType without action
   */
  export type DearCountOutputTypeCountSchedulingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchedulingWhereInput
  }


  /**
   * Count Type TeacherCountOutputType
   */

  export type TeacherCountOutputType = {
    dear: number
    scheduling: number
  }

  export type TeacherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dear?: boolean | TeacherCountOutputTypeCountDearArgs
    scheduling?: boolean | TeacherCountOutputTypeCountSchedulingArgs
  }

  // Custom InputTypes
  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherCountOutputType
     */
    select?: TeacherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountDearArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DearWhereInput
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountSchedulingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchedulingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Dear
   */

  export type AggregateDear = {
    _count: DearCountAggregateOutputType | null
    _min: DearMinAggregateOutputType | null
    _max: DearMaxAggregateOutputType | null
  }

  export type DearMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    teacherId: string | null
  }

  export type DearMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    teacherId: string | null
  }

  export type DearCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    teacherId: number
    _all: number
  }


  export type DearMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    teacherId?: true
  }

  export type DearMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    teacherId?: true
  }

  export type DearCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    teacherId?: true
    _all?: true
  }

  export type DearAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dear to aggregate.
     */
    where?: DearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dears to fetch.
     */
    orderBy?: DearOrderByWithRelationInput | DearOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dears from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dears.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dears
    **/
    _count?: true | DearCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DearMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DearMaxAggregateInputType
  }

  export type GetDearAggregateType<T extends DearAggregateArgs> = {
        [P in keyof T & keyof AggregateDear]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDear[P]>
      : GetScalarType<T[P], AggregateDear[P]>
  }




  export type DearGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DearWhereInput
    orderBy?: DearOrderByWithAggregationInput | DearOrderByWithAggregationInput[]
    by: DearScalarFieldEnum[] | DearScalarFieldEnum
    having?: DearScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DearCountAggregateInputType | true
    _min?: DearMinAggregateInputType
    _max?: DearMaxAggregateInputType
  }

  export type DearGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    teacherId: string
    _count: DearCountAggregateOutputType | null
    _min: DearMinAggregateOutputType | null
    _max: DearMaxAggregateOutputType | null
  }

  type GetDearGroupByPayload<T extends DearGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DearGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DearGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DearGroupByOutputType[P]>
            : GetScalarType<T[P], DearGroupByOutputType[P]>
        }
      >
    >


  export type DearSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teacherId?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    scheduling?: boolean | Dear$schedulingArgs<ExtArgs>
    _count?: boolean | DearCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dear"]>

  export type DearSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teacherId?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dear"]>

  export type DearSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teacherId?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dear"]>

  export type DearSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teacherId?: boolean
  }

  export type DearOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt" | "updatedAt" | "teacherId", ExtArgs["result"]["dear"]>
  export type DearInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    scheduling?: boolean | Dear$schedulingArgs<ExtArgs>
    _count?: boolean | DearCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DearIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }
  export type DearIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }

  export type $DearPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dear"
    objects: {
      teacher: Prisma.$TeacherPayload<ExtArgs>
      scheduling: Prisma.$SchedulingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
      teacherId: string
    }, ExtArgs["result"]["dear"]>
    composites: {}
  }

  type DearGetPayload<S extends boolean | null | undefined | DearDefaultArgs> = $Result.GetResult<Prisma.$DearPayload, S>

  type DearCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DearFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DearCountAggregateInputType | true
    }

  export interface DearDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dear'], meta: { name: 'Dear' } }
    /**
     * Find zero or one Dear that matches the filter.
     * @param {DearFindUniqueArgs} args - Arguments to find a Dear
     * @example
     * // Get one Dear
     * const dear = await prisma.dear.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DearFindUniqueArgs>(args: SelectSubset<T, DearFindUniqueArgs<ExtArgs>>): Prisma__DearClient<$Result.GetResult<Prisma.$DearPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dear that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DearFindUniqueOrThrowArgs} args - Arguments to find a Dear
     * @example
     * // Get one Dear
     * const dear = await prisma.dear.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DearFindUniqueOrThrowArgs>(args: SelectSubset<T, DearFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DearClient<$Result.GetResult<Prisma.$DearPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dear that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DearFindFirstArgs} args - Arguments to find a Dear
     * @example
     * // Get one Dear
     * const dear = await prisma.dear.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DearFindFirstArgs>(args?: SelectSubset<T, DearFindFirstArgs<ExtArgs>>): Prisma__DearClient<$Result.GetResult<Prisma.$DearPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dear that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DearFindFirstOrThrowArgs} args - Arguments to find a Dear
     * @example
     * // Get one Dear
     * const dear = await prisma.dear.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DearFindFirstOrThrowArgs>(args?: SelectSubset<T, DearFindFirstOrThrowArgs<ExtArgs>>): Prisma__DearClient<$Result.GetResult<Prisma.$DearPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dears that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DearFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dears
     * const dears = await prisma.dear.findMany()
     * 
     * // Get first 10 Dears
     * const dears = await prisma.dear.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dearWithIdOnly = await prisma.dear.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DearFindManyArgs>(args?: SelectSubset<T, DearFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DearPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dear.
     * @param {DearCreateArgs} args - Arguments to create a Dear.
     * @example
     * // Create one Dear
     * const Dear = await prisma.dear.create({
     *   data: {
     *     // ... data to create a Dear
     *   }
     * })
     * 
     */
    create<T extends DearCreateArgs>(args: SelectSubset<T, DearCreateArgs<ExtArgs>>): Prisma__DearClient<$Result.GetResult<Prisma.$DearPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dears.
     * @param {DearCreateManyArgs} args - Arguments to create many Dears.
     * @example
     * // Create many Dears
     * const dear = await prisma.dear.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DearCreateManyArgs>(args?: SelectSubset<T, DearCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dears and returns the data saved in the database.
     * @param {DearCreateManyAndReturnArgs} args - Arguments to create many Dears.
     * @example
     * // Create many Dears
     * const dear = await prisma.dear.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dears and only return the `id`
     * const dearWithIdOnly = await prisma.dear.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DearCreateManyAndReturnArgs>(args?: SelectSubset<T, DearCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DearPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dear.
     * @param {DearDeleteArgs} args - Arguments to delete one Dear.
     * @example
     * // Delete one Dear
     * const Dear = await prisma.dear.delete({
     *   where: {
     *     // ... filter to delete one Dear
     *   }
     * })
     * 
     */
    delete<T extends DearDeleteArgs>(args: SelectSubset<T, DearDeleteArgs<ExtArgs>>): Prisma__DearClient<$Result.GetResult<Prisma.$DearPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dear.
     * @param {DearUpdateArgs} args - Arguments to update one Dear.
     * @example
     * // Update one Dear
     * const dear = await prisma.dear.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DearUpdateArgs>(args: SelectSubset<T, DearUpdateArgs<ExtArgs>>): Prisma__DearClient<$Result.GetResult<Prisma.$DearPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dears.
     * @param {DearDeleteManyArgs} args - Arguments to filter Dears to delete.
     * @example
     * // Delete a few Dears
     * const { count } = await prisma.dear.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DearDeleteManyArgs>(args?: SelectSubset<T, DearDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dears.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DearUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dears
     * const dear = await prisma.dear.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DearUpdateManyArgs>(args: SelectSubset<T, DearUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dears and returns the data updated in the database.
     * @param {DearUpdateManyAndReturnArgs} args - Arguments to update many Dears.
     * @example
     * // Update many Dears
     * const dear = await prisma.dear.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dears and only return the `id`
     * const dearWithIdOnly = await prisma.dear.updateManyAndReturn({
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
    updateManyAndReturn<T extends DearUpdateManyAndReturnArgs>(args: SelectSubset<T, DearUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DearPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dear.
     * @param {DearUpsertArgs} args - Arguments to update or create a Dear.
     * @example
     * // Update or create a Dear
     * const dear = await prisma.dear.upsert({
     *   create: {
     *     // ... data to create a Dear
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dear we want to update
     *   }
     * })
     */
    upsert<T extends DearUpsertArgs>(args: SelectSubset<T, DearUpsertArgs<ExtArgs>>): Prisma__DearClient<$Result.GetResult<Prisma.$DearPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dears.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DearCountArgs} args - Arguments to filter Dears to count.
     * @example
     * // Count the number of Dears
     * const count = await prisma.dear.count({
     *   where: {
     *     // ... the filter for the Dears we want to count
     *   }
     * })
    **/
    count<T extends DearCountArgs>(
      args?: Subset<T, DearCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DearCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dear.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DearAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DearAggregateArgs>(args: Subset<T, DearAggregateArgs>): Prisma.PrismaPromise<GetDearAggregateType<T>>

    /**
     * Group by Dear.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DearGroupByArgs} args - Group by arguments.
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
      T extends DearGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DearGroupByArgs['orderBy'] }
        : { orderBy?: DearGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DearGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDearGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dear model
   */
  readonly fields: DearFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dear.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DearClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends TeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherDefaultArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    scheduling<T extends Dear$schedulingArgs<ExtArgs> = {}>(args?: Subset<T, Dear$schedulingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Dear model
   */
  interface DearFieldRefs {
    readonly id: FieldRef<"Dear", 'String'>
    readonly name: FieldRef<"Dear", 'String'>
    readonly email: FieldRef<"Dear", 'String'>
    readonly password: FieldRef<"Dear", 'String'>
    readonly createdAt: FieldRef<"Dear", 'DateTime'>
    readonly updatedAt: FieldRef<"Dear", 'DateTime'>
    readonly teacherId: FieldRef<"Dear", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Dear findUnique
   */
  export type DearFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dear
     */
    select?: DearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dear
     */
    omit?: DearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DearInclude<ExtArgs> | null
    /**
     * Filter, which Dear to fetch.
     */
    where: DearWhereUniqueInput
  }

  /**
   * Dear findUniqueOrThrow
   */
  export type DearFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dear
     */
    select?: DearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dear
     */
    omit?: DearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DearInclude<ExtArgs> | null
    /**
     * Filter, which Dear to fetch.
     */
    where: DearWhereUniqueInput
  }

  /**
   * Dear findFirst
   */
  export type DearFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dear
     */
    select?: DearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dear
     */
    omit?: DearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DearInclude<ExtArgs> | null
    /**
     * Filter, which Dear to fetch.
     */
    where?: DearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dears to fetch.
     */
    orderBy?: DearOrderByWithRelationInput | DearOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dears.
     */
    cursor?: DearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dears from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dears.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dears.
     */
    distinct?: DearScalarFieldEnum | DearScalarFieldEnum[]
  }

  /**
   * Dear findFirstOrThrow
   */
  export type DearFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dear
     */
    select?: DearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dear
     */
    omit?: DearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DearInclude<ExtArgs> | null
    /**
     * Filter, which Dear to fetch.
     */
    where?: DearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dears to fetch.
     */
    orderBy?: DearOrderByWithRelationInput | DearOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dears.
     */
    cursor?: DearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dears from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dears.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dears.
     */
    distinct?: DearScalarFieldEnum | DearScalarFieldEnum[]
  }

  /**
   * Dear findMany
   */
  export type DearFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dear
     */
    select?: DearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dear
     */
    omit?: DearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DearInclude<ExtArgs> | null
    /**
     * Filter, which Dears to fetch.
     */
    where?: DearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dears to fetch.
     */
    orderBy?: DearOrderByWithRelationInput | DearOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dears.
     */
    cursor?: DearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dears from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dears.
     */
    skip?: number
    distinct?: DearScalarFieldEnum | DearScalarFieldEnum[]
  }

  /**
   * Dear create
   */
  export type DearCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dear
     */
    select?: DearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dear
     */
    omit?: DearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DearInclude<ExtArgs> | null
    /**
     * The data needed to create a Dear.
     */
    data: XOR<DearCreateInput, DearUncheckedCreateInput>
  }

  /**
   * Dear createMany
   */
  export type DearCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dears.
     */
    data: DearCreateManyInput | DearCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dear createManyAndReturn
   */
  export type DearCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dear
     */
    select?: DearSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dear
     */
    omit?: DearOmit<ExtArgs> | null
    /**
     * The data used to create many Dears.
     */
    data: DearCreateManyInput | DearCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DearIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dear update
   */
  export type DearUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dear
     */
    select?: DearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dear
     */
    omit?: DearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DearInclude<ExtArgs> | null
    /**
     * The data needed to update a Dear.
     */
    data: XOR<DearUpdateInput, DearUncheckedUpdateInput>
    /**
     * Choose, which Dear to update.
     */
    where: DearWhereUniqueInput
  }

  /**
   * Dear updateMany
   */
  export type DearUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dears.
     */
    data: XOR<DearUpdateManyMutationInput, DearUncheckedUpdateManyInput>
    /**
     * Filter which Dears to update
     */
    where?: DearWhereInput
    /**
     * Limit how many Dears to update.
     */
    limit?: number
  }

  /**
   * Dear updateManyAndReturn
   */
  export type DearUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dear
     */
    select?: DearSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dear
     */
    omit?: DearOmit<ExtArgs> | null
    /**
     * The data used to update Dears.
     */
    data: XOR<DearUpdateManyMutationInput, DearUncheckedUpdateManyInput>
    /**
     * Filter which Dears to update
     */
    where?: DearWhereInput
    /**
     * Limit how many Dears to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DearIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dear upsert
   */
  export type DearUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dear
     */
    select?: DearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dear
     */
    omit?: DearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DearInclude<ExtArgs> | null
    /**
     * The filter to search for the Dear to update in case it exists.
     */
    where: DearWhereUniqueInput
    /**
     * In case the Dear found by the `where` argument doesn't exist, create a new Dear with this data.
     */
    create: XOR<DearCreateInput, DearUncheckedCreateInput>
    /**
     * In case the Dear was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DearUpdateInput, DearUncheckedUpdateInput>
  }

  /**
   * Dear delete
   */
  export type DearDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dear
     */
    select?: DearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dear
     */
    omit?: DearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DearInclude<ExtArgs> | null
    /**
     * Filter which Dear to delete.
     */
    where: DearWhereUniqueInput
  }

  /**
   * Dear deleteMany
   */
  export type DearDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dears to delete
     */
    where?: DearWhereInput
    /**
     * Limit how many Dears to delete.
     */
    limit?: number
  }

  /**
   * Dear.scheduling
   */
  export type Dear$schedulingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    where?: SchedulingWhereInput
    orderBy?: SchedulingOrderByWithRelationInput | SchedulingOrderByWithRelationInput[]
    cursor?: SchedulingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SchedulingScalarFieldEnum | SchedulingScalarFieldEnum[]
  }

  /**
   * Dear without action
   */
  export type DearDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dear
     */
    select?: DearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dear
     */
    omit?: DearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DearInclude<ExtArgs> | null
  }


  /**
   * Model Teacher
   */

  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  export type TeacherMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    description: string | null
    password: string | null
    createdAt: Date | null
    category: $Enums.Category | null
  }

  export type TeacherMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    description: string | null
    password: string | null
    createdAt: Date | null
    category: $Enums.Category | null
  }

  export type TeacherCountAggregateOutputType = {
    id: number
    name: number
    email: number
    description: number
    password: number
    createdAt: number
    category: number
    _all: number
  }


  export type TeacherMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    description?: true
    password?: true
    createdAt?: true
    category?: true
  }

  export type TeacherMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    description?: true
    password?: true
    createdAt?: true
    category?: true
  }

  export type TeacherCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    description?: true
    password?: true
    createdAt?: true
    category?: true
    _all?: true
  }

  export type TeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teacher to aggregate.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teachers
    **/
    _count?: true | TeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherMaxAggregateInputType
  }

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>
  }




  export type TeacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherWhereInput
    orderBy?: TeacherOrderByWithAggregationInput | TeacherOrderByWithAggregationInput[]
    by: TeacherScalarFieldEnum[] | TeacherScalarFieldEnum
    having?: TeacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherCountAggregateInputType | true
    _min?: TeacherMinAggregateInputType
    _max?: TeacherMaxAggregateInputType
  }

  export type TeacherGroupByOutputType = {
    id: string
    name: string
    email: string
    description: string
    password: string
    createdAt: Date
    category: $Enums.Category
    _count: TeacherCountAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  type GetTeacherGroupByPayload<T extends TeacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
        }
      >
    >


  export type TeacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    description?: boolean
    password?: boolean
    createdAt?: boolean
    category?: boolean
    dear?: boolean | Teacher$dearArgs<ExtArgs>
    scheduling?: boolean | Teacher$schedulingArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    description?: boolean
    password?: boolean
    createdAt?: boolean
    category?: boolean
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    description?: boolean
    password?: boolean
    createdAt?: boolean
    category?: boolean
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    description?: boolean
    password?: boolean
    createdAt?: boolean
    category?: boolean
  }

  export type TeacherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "description" | "password" | "createdAt" | "category", ExtArgs["result"]["teacher"]>
  export type TeacherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dear?: boolean | Teacher$dearArgs<ExtArgs>
    scheduling?: boolean | Teacher$schedulingArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeacherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeacherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teacher"
    objects: {
      dear: Prisma.$DearPayload<ExtArgs>[]
      scheduling: Prisma.$SchedulingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      description: string
      password: string
      createdAt: Date
      category: $Enums.Category
    }, ExtArgs["result"]["teacher"]>
    composites: {}
  }

  type TeacherGetPayload<S extends boolean | null | undefined | TeacherDefaultArgs> = $Result.GetResult<Prisma.$TeacherPayload, S>

  type TeacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherCountAggregateInputType | true
    }

  export interface TeacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teacher'], meta: { name: 'Teacher' } }
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {TeacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherFindUniqueArgs>(args: SelectSubset<T, TeacherFindUniqueArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teacher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherFindFirstArgs>(args?: SelectSubset<T, TeacherFindFirstArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherFindManyArgs>(args?: SelectSubset<T, TeacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teacher.
     * @param {TeacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     * 
     */
    create<T extends TeacherCreateArgs>(args: SelectSubset<T, TeacherCreateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teachers.
     * @param {TeacherCreateManyArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherCreateManyArgs>(args?: SelectSubset<T, TeacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teachers and returns the data saved in the database.
     * @param {TeacherCreateManyAndReturnArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Teacher.
     * @param {TeacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     * 
     */
    delete<T extends TeacherDeleteArgs>(args: SelectSubset<T, TeacherDeleteArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teacher.
     * @param {TeacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherUpdateArgs>(args: SelectSubset<T, TeacherUpdateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teachers.
     * @param {TeacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherDeleteManyArgs>(args?: SelectSubset<T, TeacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherUpdateManyArgs>(args: SelectSubset<T, TeacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers and returns the data updated in the database.
     * @param {TeacherUpdateManyAndReturnArgs} args - Arguments to update many Teachers.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeacherUpdateManyAndReturnArgs>(args: SelectSubset<T, TeacherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Teacher.
     * @param {TeacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
     */
    upsert<T extends TeacherUpsertArgs>(args: SelectSubset<T, TeacherUpsertArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends TeacherCountArgs>(
      args?: Subset<T, TeacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherAggregateArgs>(args: Subset<T, TeacherAggregateArgs>): Prisma.PrismaPromise<GetTeacherAggregateType<T>>

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupByArgs} args - Group by arguments.
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
      T extends TeacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherGroupByArgs['orderBy'] }
        : { orderBy?: TeacherGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teacher model
   */
  readonly fields: TeacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dear<T extends Teacher$dearArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$dearArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DearPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    scheduling<T extends Teacher$schedulingArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$schedulingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Teacher model
   */
  interface TeacherFieldRefs {
    readonly id: FieldRef<"Teacher", 'String'>
    readonly name: FieldRef<"Teacher", 'String'>
    readonly email: FieldRef<"Teacher", 'String'>
    readonly description: FieldRef<"Teacher", 'String'>
    readonly password: FieldRef<"Teacher", 'String'>
    readonly createdAt: FieldRef<"Teacher", 'DateTime'>
    readonly category: FieldRef<"Teacher", 'Category'>
  }
    

  // Custom InputTypes
  /**
   * Teacher findUnique
   */
  export type TeacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findUniqueOrThrow
   */
  export type TeacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findFirst
   */
  export type TeacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findFirstOrThrow
   */
  export type TeacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findMany
   */
  export type TeacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teachers to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher create
   */
  export type TeacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to create a Teacher.
     */
    data: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
  }

  /**
   * Teacher createMany
   */
  export type TeacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher createManyAndReturn
   */
  export type TeacherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher update
   */
  export type TeacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to update a Teacher.
     */
    data: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
    /**
     * Choose, which Teacher to update.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher updateMany
   */
  export type TeacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
  }

  /**
   * Teacher updateManyAndReturn
   */
  export type TeacherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
  }

  /**
   * Teacher upsert
   */
  export type TeacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The filter to search for the Teacher to update in case it exists.
     */
    where: TeacherWhereUniqueInput
    /**
     * In case the Teacher found by the `where` argument doesn't exist, create a new Teacher with this data.
     */
    create: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
    /**
     * In case the Teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
  }

  /**
   * Teacher delete
   */
  export type TeacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter which Teacher to delete.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher deleteMany
   */
  export type TeacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teachers to delete
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to delete.
     */
    limit?: number
  }

  /**
   * Teacher.dear
   */
  export type Teacher$dearArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dear
     */
    select?: DearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dear
     */
    omit?: DearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DearInclude<ExtArgs> | null
    where?: DearWhereInput
    orderBy?: DearOrderByWithRelationInput | DearOrderByWithRelationInput[]
    cursor?: DearWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DearScalarFieldEnum | DearScalarFieldEnum[]
  }

  /**
   * Teacher.scheduling
   */
  export type Teacher$schedulingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    where?: SchedulingWhereInput
    orderBy?: SchedulingOrderByWithRelationInput | SchedulingOrderByWithRelationInput[]
    cursor?: SchedulingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SchedulingScalarFieldEnum | SchedulingScalarFieldEnum[]
  }

  /**
   * Teacher without action
   */
  export type TeacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
  }


  /**
   * Model Scheduling
   */

  export type AggregateScheduling = {
    _count: SchedulingCountAggregateOutputType | null
    _min: SchedulingMinAggregateOutputType | null
    _max: SchedulingMaxAggregateOutputType | null
  }

  export type SchedulingMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    dearId: string | null
    teacherId: string | null
  }

  export type SchedulingMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    dearId: string | null
    teacherId: string | null
  }

  export type SchedulingCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    dearId: number
    teacherId: number
    _all: number
  }


  export type SchedulingMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    dearId?: true
    teacherId?: true
  }

  export type SchedulingMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    dearId?: true
    teacherId?: true
  }

  export type SchedulingCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    dearId?: true
    teacherId?: true
    _all?: true
  }

  export type SchedulingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scheduling to aggregate.
     */
    where?: SchedulingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedulings to fetch.
     */
    orderBy?: SchedulingOrderByWithRelationInput | SchedulingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchedulingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedulings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedulings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedulings
    **/
    _count?: true | SchedulingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchedulingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchedulingMaxAggregateInputType
  }

  export type GetSchedulingAggregateType<T extends SchedulingAggregateArgs> = {
        [P in keyof T & keyof AggregateScheduling]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScheduling[P]>
      : GetScalarType<T[P], AggregateScheduling[P]>
  }




  export type SchedulingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchedulingWhereInput
    orderBy?: SchedulingOrderByWithAggregationInput | SchedulingOrderByWithAggregationInput[]
    by: SchedulingScalarFieldEnum[] | SchedulingScalarFieldEnum
    having?: SchedulingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchedulingCountAggregateInputType | true
    _min?: SchedulingMinAggregateInputType
    _max?: SchedulingMaxAggregateInputType
  }

  export type SchedulingGroupByOutputType = {
    id: string
    name: string
    description: string
    createdAt: Date
    updatedAt: Date
    dearId: string
    teacherId: string
    _count: SchedulingCountAggregateOutputType | null
    _min: SchedulingMinAggregateOutputType | null
    _max: SchedulingMaxAggregateOutputType | null
  }

  type GetSchedulingGroupByPayload<T extends SchedulingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchedulingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchedulingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchedulingGroupByOutputType[P]>
            : GetScalarType<T[P], SchedulingGroupByOutputType[P]>
        }
      >
    >


  export type SchedulingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dearId?: boolean
    teacherId?: boolean
    dear?: boolean | DearDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduling"]>

  export type SchedulingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dearId?: boolean
    teacherId?: boolean
    dear?: boolean | DearDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduling"]>

  export type SchedulingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dearId?: boolean
    teacherId?: boolean
    dear?: boolean | DearDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduling"]>

  export type SchedulingSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dearId?: boolean
    teacherId?: boolean
  }

  export type SchedulingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt" | "dearId" | "teacherId", ExtArgs["result"]["scheduling"]>
  export type SchedulingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dear?: boolean | DearDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }
  export type SchedulingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dear?: boolean | DearDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }
  export type SchedulingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dear?: boolean | DearDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }

  export type $SchedulingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Scheduling"
    objects: {
      dear: Prisma.$DearPayload<ExtArgs>
      teacher: Prisma.$TeacherPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      createdAt: Date
      updatedAt: Date
      dearId: string
      teacherId: string
    }, ExtArgs["result"]["scheduling"]>
    composites: {}
  }

  type SchedulingGetPayload<S extends boolean | null | undefined | SchedulingDefaultArgs> = $Result.GetResult<Prisma.$SchedulingPayload, S>

  type SchedulingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchedulingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchedulingCountAggregateInputType | true
    }

  export interface SchedulingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Scheduling'], meta: { name: 'Scheduling' } }
    /**
     * Find zero or one Scheduling that matches the filter.
     * @param {SchedulingFindUniqueArgs} args - Arguments to find a Scheduling
     * @example
     * // Get one Scheduling
     * const scheduling = await prisma.scheduling.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchedulingFindUniqueArgs>(args: SelectSubset<T, SchedulingFindUniqueArgs<ExtArgs>>): Prisma__SchedulingClient<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Scheduling that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchedulingFindUniqueOrThrowArgs} args - Arguments to find a Scheduling
     * @example
     * // Get one Scheduling
     * const scheduling = await prisma.scheduling.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchedulingFindUniqueOrThrowArgs>(args: SelectSubset<T, SchedulingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchedulingClient<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scheduling that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingFindFirstArgs} args - Arguments to find a Scheduling
     * @example
     * // Get one Scheduling
     * const scheduling = await prisma.scheduling.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchedulingFindFirstArgs>(args?: SelectSubset<T, SchedulingFindFirstArgs<ExtArgs>>): Prisma__SchedulingClient<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scheduling that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingFindFirstOrThrowArgs} args - Arguments to find a Scheduling
     * @example
     * // Get one Scheduling
     * const scheduling = await prisma.scheduling.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchedulingFindFirstOrThrowArgs>(args?: SelectSubset<T, SchedulingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchedulingClient<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedulings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedulings
     * const schedulings = await prisma.scheduling.findMany()
     * 
     * // Get first 10 Schedulings
     * const schedulings = await prisma.scheduling.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schedulingWithIdOnly = await prisma.scheduling.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchedulingFindManyArgs>(args?: SelectSubset<T, SchedulingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Scheduling.
     * @param {SchedulingCreateArgs} args - Arguments to create a Scheduling.
     * @example
     * // Create one Scheduling
     * const Scheduling = await prisma.scheduling.create({
     *   data: {
     *     // ... data to create a Scheduling
     *   }
     * })
     * 
     */
    create<T extends SchedulingCreateArgs>(args: SelectSubset<T, SchedulingCreateArgs<ExtArgs>>): Prisma__SchedulingClient<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedulings.
     * @param {SchedulingCreateManyArgs} args - Arguments to create many Schedulings.
     * @example
     * // Create many Schedulings
     * const scheduling = await prisma.scheduling.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchedulingCreateManyArgs>(args?: SelectSubset<T, SchedulingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schedulings and returns the data saved in the database.
     * @param {SchedulingCreateManyAndReturnArgs} args - Arguments to create many Schedulings.
     * @example
     * // Create many Schedulings
     * const scheduling = await prisma.scheduling.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schedulings and only return the `id`
     * const schedulingWithIdOnly = await prisma.scheduling.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchedulingCreateManyAndReturnArgs>(args?: SelectSubset<T, SchedulingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Scheduling.
     * @param {SchedulingDeleteArgs} args - Arguments to delete one Scheduling.
     * @example
     * // Delete one Scheduling
     * const Scheduling = await prisma.scheduling.delete({
     *   where: {
     *     // ... filter to delete one Scheduling
     *   }
     * })
     * 
     */
    delete<T extends SchedulingDeleteArgs>(args: SelectSubset<T, SchedulingDeleteArgs<ExtArgs>>): Prisma__SchedulingClient<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Scheduling.
     * @param {SchedulingUpdateArgs} args - Arguments to update one Scheduling.
     * @example
     * // Update one Scheduling
     * const scheduling = await prisma.scheduling.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchedulingUpdateArgs>(args: SelectSubset<T, SchedulingUpdateArgs<ExtArgs>>): Prisma__SchedulingClient<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedulings.
     * @param {SchedulingDeleteManyArgs} args - Arguments to filter Schedulings to delete.
     * @example
     * // Delete a few Schedulings
     * const { count } = await prisma.scheduling.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchedulingDeleteManyArgs>(args?: SelectSubset<T, SchedulingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedulings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedulings
     * const scheduling = await prisma.scheduling.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchedulingUpdateManyArgs>(args: SelectSubset<T, SchedulingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedulings and returns the data updated in the database.
     * @param {SchedulingUpdateManyAndReturnArgs} args - Arguments to update many Schedulings.
     * @example
     * // Update many Schedulings
     * const scheduling = await prisma.scheduling.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schedulings and only return the `id`
     * const schedulingWithIdOnly = await prisma.scheduling.updateManyAndReturn({
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
    updateManyAndReturn<T extends SchedulingUpdateManyAndReturnArgs>(args: SelectSubset<T, SchedulingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Scheduling.
     * @param {SchedulingUpsertArgs} args - Arguments to update or create a Scheduling.
     * @example
     * // Update or create a Scheduling
     * const scheduling = await prisma.scheduling.upsert({
     *   create: {
     *     // ... data to create a Scheduling
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scheduling we want to update
     *   }
     * })
     */
    upsert<T extends SchedulingUpsertArgs>(args: SelectSubset<T, SchedulingUpsertArgs<ExtArgs>>): Prisma__SchedulingClient<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedulings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingCountArgs} args - Arguments to filter Schedulings to count.
     * @example
     * // Count the number of Schedulings
     * const count = await prisma.scheduling.count({
     *   where: {
     *     // ... the filter for the Schedulings we want to count
     *   }
     * })
    **/
    count<T extends SchedulingCountArgs>(
      args?: Subset<T, SchedulingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchedulingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Scheduling.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchedulingAggregateArgs>(args: Subset<T, SchedulingAggregateArgs>): Prisma.PrismaPromise<GetSchedulingAggregateType<T>>

    /**
     * Group by Scheduling.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingGroupByArgs} args - Group by arguments.
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
      T extends SchedulingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchedulingGroupByArgs['orderBy'] }
        : { orderBy?: SchedulingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SchedulingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchedulingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Scheduling model
   */
  readonly fields: SchedulingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Scheduling.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchedulingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dear<T extends DearDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DearDefaultArgs<ExtArgs>>): Prisma__DearClient<$Result.GetResult<Prisma.$DearPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teacher<T extends TeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherDefaultArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Scheduling model
   */
  interface SchedulingFieldRefs {
    readonly id: FieldRef<"Scheduling", 'String'>
    readonly name: FieldRef<"Scheduling", 'String'>
    readonly description: FieldRef<"Scheduling", 'String'>
    readonly createdAt: FieldRef<"Scheduling", 'DateTime'>
    readonly updatedAt: FieldRef<"Scheduling", 'DateTime'>
    readonly dearId: FieldRef<"Scheduling", 'String'>
    readonly teacherId: FieldRef<"Scheduling", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Scheduling findUnique
   */
  export type SchedulingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    /**
     * Filter, which Scheduling to fetch.
     */
    where: SchedulingWhereUniqueInput
  }

  /**
   * Scheduling findUniqueOrThrow
   */
  export type SchedulingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    /**
     * Filter, which Scheduling to fetch.
     */
    where: SchedulingWhereUniqueInput
  }

  /**
   * Scheduling findFirst
   */
  export type SchedulingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    /**
     * Filter, which Scheduling to fetch.
     */
    where?: SchedulingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedulings to fetch.
     */
    orderBy?: SchedulingOrderByWithRelationInput | SchedulingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedulings.
     */
    cursor?: SchedulingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedulings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedulings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedulings.
     */
    distinct?: SchedulingScalarFieldEnum | SchedulingScalarFieldEnum[]
  }

  /**
   * Scheduling findFirstOrThrow
   */
  export type SchedulingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    /**
     * Filter, which Scheduling to fetch.
     */
    where?: SchedulingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedulings to fetch.
     */
    orderBy?: SchedulingOrderByWithRelationInput | SchedulingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedulings.
     */
    cursor?: SchedulingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedulings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedulings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedulings.
     */
    distinct?: SchedulingScalarFieldEnum | SchedulingScalarFieldEnum[]
  }

  /**
   * Scheduling findMany
   */
  export type SchedulingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    /**
     * Filter, which Schedulings to fetch.
     */
    where?: SchedulingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedulings to fetch.
     */
    orderBy?: SchedulingOrderByWithRelationInput | SchedulingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedulings.
     */
    cursor?: SchedulingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedulings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedulings.
     */
    skip?: number
    distinct?: SchedulingScalarFieldEnum | SchedulingScalarFieldEnum[]
  }

  /**
   * Scheduling create
   */
  export type SchedulingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    /**
     * The data needed to create a Scheduling.
     */
    data: XOR<SchedulingCreateInput, SchedulingUncheckedCreateInput>
  }

  /**
   * Scheduling createMany
   */
  export type SchedulingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedulings.
     */
    data: SchedulingCreateManyInput | SchedulingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Scheduling createManyAndReturn
   */
  export type SchedulingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * The data used to create many Schedulings.
     */
    data: SchedulingCreateManyInput | SchedulingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Scheduling update
   */
  export type SchedulingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    /**
     * The data needed to update a Scheduling.
     */
    data: XOR<SchedulingUpdateInput, SchedulingUncheckedUpdateInput>
    /**
     * Choose, which Scheduling to update.
     */
    where: SchedulingWhereUniqueInput
  }

  /**
   * Scheduling updateMany
   */
  export type SchedulingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedulings.
     */
    data: XOR<SchedulingUpdateManyMutationInput, SchedulingUncheckedUpdateManyInput>
    /**
     * Filter which Schedulings to update
     */
    where?: SchedulingWhereInput
    /**
     * Limit how many Schedulings to update.
     */
    limit?: number
  }

  /**
   * Scheduling updateManyAndReturn
   */
  export type SchedulingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * The data used to update Schedulings.
     */
    data: XOR<SchedulingUpdateManyMutationInput, SchedulingUncheckedUpdateManyInput>
    /**
     * Filter which Schedulings to update
     */
    where?: SchedulingWhereInput
    /**
     * Limit how many Schedulings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Scheduling upsert
   */
  export type SchedulingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    /**
     * The filter to search for the Scheduling to update in case it exists.
     */
    where: SchedulingWhereUniqueInput
    /**
     * In case the Scheduling found by the `where` argument doesn't exist, create a new Scheduling with this data.
     */
    create: XOR<SchedulingCreateInput, SchedulingUncheckedCreateInput>
    /**
     * In case the Scheduling was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchedulingUpdateInput, SchedulingUncheckedUpdateInput>
  }

  /**
   * Scheduling delete
   */
  export type SchedulingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    /**
     * Filter which Scheduling to delete.
     */
    where: SchedulingWhereUniqueInput
  }

  /**
   * Scheduling deleteMany
   */
  export type SchedulingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedulings to delete
     */
    where?: SchedulingWhereInput
    /**
     * Limit how many Schedulings to delete.
     */
    limit?: number
  }

  /**
   * Scheduling without action
   */
  export type SchedulingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
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


  export const DearScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    teacherId: 'teacherId'
  };

  export type DearScalarFieldEnum = (typeof DearScalarFieldEnum)[keyof typeof DearScalarFieldEnum]


  export const TeacherScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    description: 'description',
    password: 'password',
    createdAt: 'createdAt',
    category: 'category'
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum]


  export const SchedulingScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    dearId: 'dearId',
    teacherId: 'teacherId'
  };

  export type SchedulingScalarFieldEnum = (typeof SchedulingScalarFieldEnum)[keyof typeof SchedulingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Category'
   */
  export type EnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category'>
    


  /**
   * Reference to a field of type 'Category[]'
   */
  export type ListEnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type DearWhereInput = {
    AND?: DearWhereInput | DearWhereInput[]
    OR?: DearWhereInput[]
    NOT?: DearWhereInput | DearWhereInput[]
    id?: StringFilter<"Dear"> | string
    name?: StringFilter<"Dear"> | string
    email?: StringFilter<"Dear"> | string
    password?: StringFilter<"Dear"> | string
    createdAt?: DateTimeFilter<"Dear"> | Date | string
    updatedAt?: DateTimeFilter<"Dear"> | Date | string
    teacherId?: StringFilter<"Dear"> | string
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    scheduling?: SchedulingListRelationFilter
  }

  export type DearOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teacherId?: SortOrder
    teacher?: TeacherOrderByWithRelationInput
    scheduling?: SchedulingOrderByRelationAggregateInput
  }

  export type DearWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    teacherId?: string
    AND?: DearWhereInput | DearWhereInput[]
    OR?: DearWhereInput[]
    NOT?: DearWhereInput | DearWhereInput[]
    name?: StringFilter<"Dear"> | string
    password?: StringFilter<"Dear"> | string
    createdAt?: DateTimeFilter<"Dear"> | Date | string
    updatedAt?: DateTimeFilter<"Dear"> | Date | string
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    scheduling?: SchedulingListRelationFilter
  }, "id" | "email" | "teacherId">

  export type DearOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teacherId?: SortOrder
    _count?: DearCountOrderByAggregateInput
    _max?: DearMaxOrderByAggregateInput
    _min?: DearMinOrderByAggregateInput
  }

  export type DearScalarWhereWithAggregatesInput = {
    AND?: DearScalarWhereWithAggregatesInput | DearScalarWhereWithAggregatesInput[]
    OR?: DearScalarWhereWithAggregatesInput[]
    NOT?: DearScalarWhereWithAggregatesInput | DearScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dear"> | string
    name?: StringWithAggregatesFilter<"Dear"> | string
    email?: StringWithAggregatesFilter<"Dear"> | string
    password?: StringWithAggregatesFilter<"Dear"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Dear"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Dear"> | Date | string
    teacherId?: StringWithAggregatesFilter<"Dear"> | string
  }

  export type TeacherWhereInput = {
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    id?: StringFilter<"Teacher"> | string
    name?: StringFilter<"Teacher"> | string
    email?: StringFilter<"Teacher"> | string
    description?: StringFilter<"Teacher"> | string
    password?: StringFilter<"Teacher"> | string
    createdAt?: DateTimeFilter<"Teacher"> | Date | string
    category?: EnumCategoryFilter<"Teacher"> | $Enums.Category
    dear?: DearListRelationFilter
    scheduling?: SchedulingListRelationFilter
  }

  export type TeacherOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    description?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    category?: SortOrder
    dear?: DearOrderByRelationAggregateInput
    scheduling?: SchedulingOrderByRelationAggregateInput
  }

  export type TeacherWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    name?: StringFilter<"Teacher"> | string
    description?: StringFilter<"Teacher"> | string
    password?: StringFilter<"Teacher"> | string
    createdAt?: DateTimeFilter<"Teacher"> | Date | string
    category?: EnumCategoryFilter<"Teacher"> | $Enums.Category
    dear?: DearListRelationFilter
    scheduling?: SchedulingListRelationFilter
  }, "id" | "email">

  export type TeacherOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    description?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    category?: SortOrder
    _count?: TeacherCountOrderByAggregateInput
    _max?: TeacherMaxOrderByAggregateInput
    _min?: TeacherMinOrderByAggregateInput
  }

  export type TeacherScalarWhereWithAggregatesInput = {
    AND?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    OR?: TeacherScalarWhereWithAggregatesInput[]
    NOT?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Teacher"> | string
    name?: StringWithAggregatesFilter<"Teacher"> | string
    email?: StringWithAggregatesFilter<"Teacher"> | string
    description?: StringWithAggregatesFilter<"Teacher"> | string
    password?: StringWithAggregatesFilter<"Teacher"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Teacher"> | Date | string
    category?: EnumCategoryWithAggregatesFilter<"Teacher"> | $Enums.Category
  }

  export type SchedulingWhereInput = {
    AND?: SchedulingWhereInput | SchedulingWhereInput[]
    OR?: SchedulingWhereInput[]
    NOT?: SchedulingWhereInput | SchedulingWhereInput[]
    id?: StringFilter<"Scheduling"> | string
    name?: StringFilter<"Scheduling"> | string
    description?: StringFilter<"Scheduling"> | string
    createdAt?: DateTimeFilter<"Scheduling"> | Date | string
    updatedAt?: DateTimeFilter<"Scheduling"> | Date | string
    dearId?: StringFilter<"Scheduling"> | string
    teacherId?: StringFilter<"Scheduling"> | string
    dear?: XOR<DearScalarRelationFilter, DearWhereInput>
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
  }

  export type SchedulingOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dearId?: SortOrder
    teacherId?: SortOrder
    dear?: DearOrderByWithRelationInput
    teacher?: TeacherOrderByWithRelationInput
  }

  export type SchedulingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SchedulingWhereInput | SchedulingWhereInput[]
    OR?: SchedulingWhereInput[]
    NOT?: SchedulingWhereInput | SchedulingWhereInput[]
    name?: StringFilter<"Scheduling"> | string
    description?: StringFilter<"Scheduling"> | string
    createdAt?: DateTimeFilter<"Scheduling"> | Date | string
    updatedAt?: DateTimeFilter<"Scheduling"> | Date | string
    dearId?: StringFilter<"Scheduling"> | string
    teacherId?: StringFilter<"Scheduling"> | string
    dear?: XOR<DearScalarRelationFilter, DearWhereInput>
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
  }, "id">

  export type SchedulingOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dearId?: SortOrder
    teacherId?: SortOrder
    _count?: SchedulingCountOrderByAggregateInput
    _max?: SchedulingMaxOrderByAggregateInput
    _min?: SchedulingMinOrderByAggregateInput
  }

  export type SchedulingScalarWhereWithAggregatesInput = {
    AND?: SchedulingScalarWhereWithAggregatesInput | SchedulingScalarWhereWithAggregatesInput[]
    OR?: SchedulingScalarWhereWithAggregatesInput[]
    NOT?: SchedulingScalarWhereWithAggregatesInput | SchedulingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Scheduling"> | string
    name?: StringWithAggregatesFilter<"Scheduling"> | string
    description?: StringWithAggregatesFilter<"Scheduling"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Scheduling"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Scheduling"> | Date | string
    dearId?: StringWithAggregatesFilter<"Scheduling"> | string
    teacherId?: StringWithAggregatesFilter<"Scheduling"> | string
  }

  export type DearCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher: TeacherCreateNestedOneWithoutDearInput
    scheduling?: SchedulingCreateNestedManyWithoutDearInput
  }

  export type DearUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teacherId: string
    scheduling?: SchedulingUncheckedCreateNestedManyWithoutDearInput
  }

  export type DearUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: TeacherUpdateOneRequiredWithoutDearNestedInput
    scheduling?: SchedulingUpdateManyWithoutDearNestedInput
  }

  export type DearUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherId?: StringFieldUpdateOperationsInput | string
    scheduling?: SchedulingUncheckedUpdateManyWithoutDearNestedInput
  }

  export type DearCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teacherId: string
  }

  export type DearUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DearUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherId?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherCreateInput = {
    id?: string
    name: string
    email: string
    description: string
    password: string
    createdAt?: Date | string
    category: $Enums.Category
    dear?: DearCreateNestedManyWithoutTeacherInput
    scheduling?: SchedulingCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    description: string
    password: string
    createdAt?: Date | string
    category: $Enums.Category
    dear?: DearUncheckedCreateNestedManyWithoutTeacherInput
    scheduling?: SchedulingUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    dear?: DearUpdateManyWithoutTeacherNestedInput
    scheduling?: SchedulingUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    dear?: DearUncheckedUpdateManyWithoutTeacherNestedInput
    scheduling?: SchedulingUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherCreateManyInput = {
    id?: string
    name: string
    email: string
    description: string
    password: string
    createdAt?: Date | string
    category: $Enums.Category
  }

  export type TeacherUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
  }

  export type TeacherUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
  }

  export type SchedulingCreateInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dear: DearCreateNestedOneWithoutSchedulingInput
    teacher: TeacherCreateNestedOneWithoutSchedulingInput
  }

  export type SchedulingUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dearId: string
    teacherId: string
  }

  export type SchedulingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dear?: DearUpdateOneRequiredWithoutSchedulingNestedInput
    teacher?: TeacherUpdateOneRequiredWithoutSchedulingNestedInput
  }

  export type SchedulingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dearId?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
  }

  export type SchedulingCreateManyInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dearId: string
    teacherId: string
  }

  export type SchedulingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchedulingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dearId?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
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

  export type TeacherScalarRelationFilter = {
    is?: TeacherWhereInput
    isNot?: TeacherWhereInput
  }

  export type SchedulingListRelationFilter = {
    every?: SchedulingWhereInput
    some?: SchedulingWhereInput
    none?: SchedulingWhereInput
  }

  export type SchedulingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DearCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teacherId?: SortOrder
  }

  export type DearMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teacherId?: SortOrder
  }

  export type DearMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teacherId?: SortOrder
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

  export type EnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type DearListRelationFilter = {
    every?: DearWhereInput
    some?: DearWhereInput
    none?: DearWhereInput
  }

  export type DearOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeacherCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    description?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    category?: SortOrder
  }

  export type TeacherMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    description?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    category?: SortOrder
  }

  export type TeacherMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    description?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    category?: SortOrder
  }

  export type EnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type DearScalarRelationFilter = {
    is?: DearWhereInput
    isNot?: DearWhereInput
  }

  export type SchedulingCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dearId?: SortOrder
    teacherId?: SortOrder
  }

  export type SchedulingMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dearId?: SortOrder
    teacherId?: SortOrder
  }

  export type SchedulingMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dearId?: SortOrder
    teacherId?: SortOrder
  }

  export type TeacherCreateNestedOneWithoutDearInput = {
    create?: XOR<TeacherCreateWithoutDearInput, TeacherUncheckedCreateWithoutDearInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutDearInput
    connect?: TeacherWhereUniqueInput
  }

  export type SchedulingCreateNestedManyWithoutDearInput = {
    create?: XOR<SchedulingCreateWithoutDearInput, SchedulingUncheckedCreateWithoutDearInput> | SchedulingCreateWithoutDearInput[] | SchedulingUncheckedCreateWithoutDearInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutDearInput | SchedulingCreateOrConnectWithoutDearInput[]
    createMany?: SchedulingCreateManyDearInputEnvelope
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
  }

  export type SchedulingUncheckedCreateNestedManyWithoutDearInput = {
    create?: XOR<SchedulingCreateWithoutDearInput, SchedulingUncheckedCreateWithoutDearInput> | SchedulingCreateWithoutDearInput[] | SchedulingUncheckedCreateWithoutDearInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutDearInput | SchedulingCreateOrConnectWithoutDearInput[]
    createMany?: SchedulingCreateManyDearInputEnvelope
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TeacherUpdateOneRequiredWithoutDearNestedInput = {
    create?: XOR<TeacherCreateWithoutDearInput, TeacherUncheckedCreateWithoutDearInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutDearInput
    upsert?: TeacherUpsertWithoutDearInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutDearInput, TeacherUpdateWithoutDearInput>, TeacherUncheckedUpdateWithoutDearInput>
  }

  export type SchedulingUpdateManyWithoutDearNestedInput = {
    create?: XOR<SchedulingCreateWithoutDearInput, SchedulingUncheckedCreateWithoutDearInput> | SchedulingCreateWithoutDearInput[] | SchedulingUncheckedCreateWithoutDearInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutDearInput | SchedulingCreateOrConnectWithoutDearInput[]
    upsert?: SchedulingUpsertWithWhereUniqueWithoutDearInput | SchedulingUpsertWithWhereUniqueWithoutDearInput[]
    createMany?: SchedulingCreateManyDearInputEnvelope
    set?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    disconnect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    delete?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    update?: SchedulingUpdateWithWhereUniqueWithoutDearInput | SchedulingUpdateWithWhereUniqueWithoutDearInput[]
    updateMany?: SchedulingUpdateManyWithWhereWithoutDearInput | SchedulingUpdateManyWithWhereWithoutDearInput[]
    deleteMany?: SchedulingScalarWhereInput | SchedulingScalarWhereInput[]
  }

  export type SchedulingUncheckedUpdateManyWithoutDearNestedInput = {
    create?: XOR<SchedulingCreateWithoutDearInput, SchedulingUncheckedCreateWithoutDearInput> | SchedulingCreateWithoutDearInput[] | SchedulingUncheckedCreateWithoutDearInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutDearInput | SchedulingCreateOrConnectWithoutDearInput[]
    upsert?: SchedulingUpsertWithWhereUniqueWithoutDearInput | SchedulingUpsertWithWhereUniqueWithoutDearInput[]
    createMany?: SchedulingCreateManyDearInputEnvelope
    set?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    disconnect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    delete?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    update?: SchedulingUpdateWithWhereUniqueWithoutDearInput | SchedulingUpdateWithWhereUniqueWithoutDearInput[]
    updateMany?: SchedulingUpdateManyWithWhereWithoutDearInput | SchedulingUpdateManyWithWhereWithoutDearInput[]
    deleteMany?: SchedulingScalarWhereInput | SchedulingScalarWhereInput[]
  }

  export type DearCreateNestedManyWithoutTeacherInput = {
    create?: XOR<DearCreateWithoutTeacherInput, DearUncheckedCreateWithoutTeacherInput> | DearCreateWithoutTeacherInput[] | DearUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: DearCreateOrConnectWithoutTeacherInput | DearCreateOrConnectWithoutTeacherInput[]
    createMany?: DearCreateManyTeacherInputEnvelope
    connect?: DearWhereUniqueInput | DearWhereUniqueInput[]
  }

  export type SchedulingCreateNestedManyWithoutTeacherInput = {
    create?: XOR<SchedulingCreateWithoutTeacherInput, SchedulingUncheckedCreateWithoutTeacherInput> | SchedulingCreateWithoutTeacherInput[] | SchedulingUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutTeacherInput | SchedulingCreateOrConnectWithoutTeacherInput[]
    createMany?: SchedulingCreateManyTeacherInputEnvelope
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
  }

  export type DearUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<DearCreateWithoutTeacherInput, DearUncheckedCreateWithoutTeacherInput> | DearCreateWithoutTeacherInput[] | DearUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: DearCreateOrConnectWithoutTeacherInput | DearCreateOrConnectWithoutTeacherInput[]
    createMany?: DearCreateManyTeacherInputEnvelope
    connect?: DearWhereUniqueInput | DearWhereUniqueInput[]
  }

  export type SchedulingUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<SchedulingCreateWithoutTeacherInput, SchedulingUncheckedCreateWithoutTeacherInput> | SchedulingCreateWithoutTeacherInput[] | SchedulingUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutTeacherInput | SchedulingCreateOrConnectWithoutTeacherInput[]
    createMany?: SchedulingCreateManyTeacherInputEnvelope
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
  }

  export type EnumCategoryFieldUpdateOperationsInput = {
    set?: $Enums.Category
  }

  export type DearUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<DearCreateWithoutTeacherInput, DearUncheckedCreateWithoutTeacherInput> | DearCreateWithoutTeacherInput[] | DearUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: DearCreateOrConnectWithoutTeacherInput | DearCreateOrConnectWithoutTeacherInput[]
    upsert?: DearUpsertWithWhereUniqueWithoutTeacherInput | DearUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: DearCreateManyTeacherInputEnvelope
    set?: DearWhereUniqueInput | DearWhereUniqueInput[]
    disconnect?: DearWhereUniqueInput | DearWhereUniqueInput[]
    delete?: DearWhereUniqueInput | DearWhereUniqueInput[]
    connect?: DearWhereUniqueInput | DearWhereUniqueInput[]
    update?: DearUpdateWithWhereUniqueWithoutTeacherInput | DearUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: DearUpdateManyWithWhereWithoutTeacherInput | DearUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: DearScalarWhereInput | DearScalarWhereInput[]
  }

  export type SchedulingUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<SchedulingCreateWithoutTeacherInput, SchedulingUncheckedCreateWithoutTeacherInput> | SchedulingCreateWithoutTeacherInput[] | SchedulingUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutTeacherInput | SchedulingCreateOrConnectWithoutTeacherInput[]
    upsert?: SchedulingUpsertWithWhereUniqueWithoutTeacherInput | SchedulingUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: SchedulingCreateManyTeacherInputEnvelope
    set?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    disconnect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    delete?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    update?: SchedulingUpdateWithWhereUniqueWithoutTeacherInput | SchedulingUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: SchedulingUpdateManyWithWhereWithoutTeacherInput | SchedulingUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: SchedulingScalarWhereInput | SchedulingScalarWhereInput[]
  }

  export type DearUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<DearCreateWithoutTeacherInput, DearUncheckedCreateWithoutTeacherInput> | DearCreateWithoutTeacherInput[] | DearUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: DearCreateOrConnectWithoutTeacherInput | DearCreateOrConnectWithoutTeacherInput[]
    upsert?: DearUpsertWithWhereUniqueWithoutTeacherInput | DearUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: DearCreateManyTeacherInputEnvelope
    set?: DearWhereUniqueInput | DearWhereUniqueInput[]
    disconnect?: DearWhereUniqueInput | DearWhereUniqueInput[]
    delete?: DearWhereUniqueInput | DearWhereUniqueInput[]
    connect?: DearWhereUniqueInput | DearWhereUniqueInput[]
    update?: DearUpdateWithWhereUniqueWithoutTeacherInput | DearUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: DearUpdateManyWithWhereWithoutTeacherInput | DearUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: DearScalarWhereInput | DearScalarWhereInput[]
  }

  export type SchedulingUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<SchedulingCreateWithoutTeacherInput, SchedulingUncheckedCreateWithoutTeacherInput> | SchedulingCreateWithoutTeacherInput[] | SchedulingUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutTeacherInput | SchedulingCreateOrConnectWithoutTeacherInput[]
    upsert?: SchedulingUpsertWithWhereUniqueWithoutTeacherInput | SchedulingUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: SchedulingCreateManyTeacherInputEnvelope
    set?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    disconnect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    delete?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    update?: SchedulingUpdateWithWhereUniqueWithoutTeacherInput | SchedulingUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: SchedulingUpdateManyWithWhereWithoutTeacherInput | SchedulingUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: SchedulingScalarWhereInput | SchedulingScalarWhereInput[]
  }

  export type DearCreateNestedOneWithoutSchedulingInput = {
    create?: XOR<DearCreateWithoutSchedulingInput, DearUncheckedCreateWithoutSchedulingInput>
    connectOrCreate?: DearCreateOrConnectWithoutSchedulingInput
    connect?: DearWhereUniqueInput
  }

  export type TeacherCreateNestedOneWithoutSchedulingInput = {
    create?: XOR<TeacherCreateWithoutSchedulingInput, TeacherUncheckedCreateWithoutSchedulingInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutSchedulingInput
    connect?: TeacherWhereUniqueInput
  }

  export type DearUpdateOneRequiredWithoutSchedulingNestedInput = {
    create?: XOR<DearCreateWithoutSchedulingInput, DearUncheckedCreateWithoutSchedulingInput>
    connectOrCreate?: DearCreateOrConnectWithoutSchedulingInput
    upsert?: DearUpsertWithoutSchedulingInput
    connect?: DearWhereUniqueInput
    update?: XOR<XOR<DearUpdateToOneWithWhereWithoutSchedulingInput, DearUpdateWithoutSchedulingInput>, DearUncheckedUpdateWithoutSchedulingInput>
  }

  export type TeacherUpdateOneRequiredWithoutSchedulingNestedInput = {
    create?: XOR<TeacherCreateWithoutSchedulingInput, TeacherUncheckedCreateWithoutSchedulingInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutSchedulingInput
    upsert?: TeacherUpsertWithoutSchedulingInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutSchedulingInput, TeacherUpdateWithoutSchedulingInput>, TeacherUncheckedUpdateWithoutSchedulingInput>
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

  export type NestedEnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type NestedEnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type TeacherCreateWithoutDearInput = {
    id?: string
    name: string
    email: string
    description: string
    password: string
    createdAt?: Date | string
    category: $Enums.Category
    scheduling?: SchedulingCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutDearInput = {
    id?: string
    name: string
    email: string
    description: string
    password: string
    createdAt?: Date | string
    category: $Enums.Category
    scheduling?: SchedulingUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutDearInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutDearInput, TeacherUncheckedCreateWithoutDearInput>
  }

  export type SchedulingCreateWithoutDearInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher: TeacherCreateNestedOneWithoutSchedulingInput
  }

  export type SchedulingUncheckedCreateWithoutDearInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teacherId: string
  }

  export type SchedulingCreateOrConnectWithoutDearInput = {
    where: SchedulingWhereUniqueInput
    create: XOR<SchedulingCreateWithoutDearInput, SchedulingUncheckedCreateWithoutDearInput>
  }

  export type SchedulingCreateManyDearInputEnvelope = {
    data: SchedulingCreateManyDearInput | SchedulingCreateManyDearInput[]
    skipDuplicates?: boolean
  }

  export type TeacherUpsertWithoutDearInput = {
    update: XOR<TeacherUpdateWithoutDearInput, TeacherUncheckedUpdateWithoutDearInput>
    create: XOR<TeacherCreateWithoutDearInput, TeacherUncheckedCreateWithoutDearInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutDearInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutDearInput, TeacherUncheckedUpdateWithoutDearInput>
  }

  export type TeacherUpdateWithoutDearInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    scheduling?: SchedulingUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutDearInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    scheduling?: SchedulingUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type SchedulingUpsertWithWhereUniqueWithoutDearInput = {
    where: SchedulingWhereUniqueInput
    update: XOR<SchedulingUpdateWithoutDearInput, SchedulingUncheckedUpdateWithoutDearInput>
    create: XOR<SchedulingCreateWithoutDearInput, SchedulingUncheckedCreateWithoutDearInput>
  }

  export type SchedulingUpdateWithWhereUniqueWithoutDearInput = {
    where: SchedulingWhereUniqueInput
    data: XOR<SchedulingUpdateWithoutDearInput, SchedulingUncheckedUpdateWithoutDearInput>
  }

  export type SchedulingUpdateManyWithWhereWithoutDearInput = {
    where: SchedulingScalarWhereInput
    data: XOR<SchedulingUpdateManyMutationInput, SchedulingUncheckedUpdateManyWithoutDearInput>
  }

  export type SchedulingScalarWhereInput = {
    AND?: SchedulingScalarWhereInput | SchedulingScalarWhereInput[]
    OR?: SchedulingScalarWhereInput[]
    NOT?: SchedulingScalarWhereInput | SchedulingScalarWhereInput[]
    id?: StringFilter<"Scheduling"> | string
    name?: StringFilter<"Scheduling"> | string
    description?: StringFilter<"Scheduling"> | string
    createdAt?: DateTimeFilter<"Scheduling"> | Date | string
    updatedAt?: DateTimeFilter<"Scheduling"> | Date | string
    dearId?: StringFilter<"Scheduling"> | string
    teacherId?: StringFilter<"Scheduling"> | string
  }

  export type DearCreateWithoutTeacherInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    scheduling?: SchedulingCreateNestedManyWithoutDearInput
  }

  export type DearUncheckedCreateWithoutTeacherInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    scheduling?: SchedulingUncheckedCreateNestedManyWithoutDearInput
  }

  export type DearCreateOrConnectWithoutTeacherInput = {
    where: DearWhereUniqueInput
    create: XOR<DearCreateWithoutTeacherInput, DearUncheckedCreateWithoutTeacherInput>
  }

  export type DearCreateManyTeacherInputEnvelope = {
    data: DearCreateManyTeacherInput | DearCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type SchedulingCreateWithoutTeacherInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dear: DearCreateNestedOneWithoutSchedulingInput
  }

  export type SchedulingUncheckedCreateWithoutTeacherInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dearId: string
  }

  export type SchedulingCreateOrConnectWithoutTeacherInput = {
    where: SchedulingWhereUniqueInput
    create: XOR<SchedulingCreateWithoutTeacherInput, SchedulingUncheckedCreateWithoutTeacherInput>
  }

  export type SchedulingCreateManyTeacherInputEnvelope = {
    data: SchedulingCreateManyTeacherInput | SchedulingCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type DearUpsertWithWhereUniqueWithoutTeacherInput = {
    where: DearWhereUniqueInput
    update: XOR<DearUpdateWithoutTeacherInput, DearUncheckedUpdateWithoutTeacherInput>
    create: XOR<DearCreateWithoutTeacherInput, DearUncheckedCreateWithoutTeacherInput>
  }

  export type DearUpdateWithWhereUniqueWithoutTeacherInput = {
    where: DearWhereUniqueInput
    data: XOR<DearUpdateWithoutTeacherInput, DearUncheckedUpdateWithoutTeacherInput>
  }

  export type DearUpdateManyWithWhereWithoutTeacherInput = {
    where: DearScalarWhereInput
    data: XOR<DearUpdateManyMutationInput, DearUncheckedUpdateManyWithoutTeacherInput>
  }

  export type DearScalarWhereInput = {
    AND?: DearScalarWhereInput | DearScalarWhereInput[]
    OR?: DearScalarWhereInput[]
    NOT?: DearScalarWhereInput | DearScalarWhereInput[]
    id?: StringFilter<"Dear"> | string
    name?: StringFilter<"Dear"> | string
    email?: StringFilter<"Dear"> | string
    password?: StringFilter<"Dear"> | string
    createdAt?: DateTimeFilter<"Dear"> | Date | string
    updatedAt?: DateTimeFilter<"Dear"> | Date | string
    teacherId?: StringFilter<"Dear"> | string
  }

  export type SchedulingUpsertWithWhereUniqueWithoutTeacherInput = {
    where: SchedulingWhereUniqueInput
    update: XOR<SchedulingUpdateWithoutTeacherInput, SchedulingUncheckedUpdateWithoutTeacherInput>
    create: XOR<SchedulingCreateWithoutTeacherInput, SchedulingUncheckedCreateWithoutTeacherInput>
  }

  export type SchedulingUpdateWithWhereUniqueWithoutTeacherInput = {
    where: SchedulingWhereUniqueInput
    data: XOR<SchedulingUpdateWithoutTeacherInput, SchedulingUncheckedUpdateWithoutTeacherInput>
  }

  export type SchedulingUpdateManyWithWhereWithoutTeacherInput = {
    where: SchedulingScalarWhereInput
    data: XOR<SchedulingUpdateManyMutationInput, SchedulingUncheckedUpdateManyWithoutTeacherInput>
  }

  export type DearCreateWithoutSchedulingInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher: TeacherCreateNestedOneWithoutDearInput
  }

  export type DearUncheckedCreateWithoutSchedulingInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teacherId: string
  }

  export type DearCreateOrConnectWithoutSchedulingInput = {
    where: DearWhereUniqueInput
    create: XOR<DearCreateWithoutSchedulingInput, DearUncheckedCreateWithoutSchedulingInput>
  }

  export type TeacherCreateWithoutSchedulingInput = {
    id?: string
    name: string
    email: string
    description: string
    password: string
    createdAt?: Date | string
    category: $Enums.Category
    dear?: DearCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutSchedulingInput = {
    id?: string
    name: string
    email: string
    description: string
    password: string
    createdAt?: Date | string
    category: $Enums.Category
    dear?: DearUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutSchedulingInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutSchedulingInput, TeacherUncheckedCreateWithoutSchedulingInput>
  }

  export type DearUpsertWithoutSchedulingInput = {
    update: XOR<DearUpdateWithoutSchedulingInput, DearUncheckedUpdateWithoutSchedulingInput>
    create: XOR<DearCreateWithoutSchedulingInput, DearUncheckedCreateWithoutSchedulingInput>
    where?: DearWhereInput
  }

  export type DearUpdateToOneWithWhereWithoutSchedulingInput = {
    where?: DearWhereInput
    data: XOR<DearUpdateWithoutSchedulingInput, DearUncheckedUpdateWithoutSchedulingInput>
  }

  export type DearUpdateWithoutSchedulingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: TeacherUpdateOneRequiredWithoutDearNestedInput
  }

  export type DearUncheckedUpdateWithoutSchedulingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherId?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherUpsertWithoutSchedulingInput = {
    update: XOR<TeacherUpdateWithoutSchedulingInput, TeacherUncheckedUpdateWithoutSchedulingInput>
    create: XOR<TeacherCreateWithoutSchedulingInput, TeacherUncheckedCreateWithoutSchedulingInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutSchedulingInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutSchedulingInput, TeacherUncheckedUpdateWithoutSchedulingInput>
  }

  export type TeacherUpdateWithoutSchedulingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    dear?: DearUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutSchedulingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    dear?: DearUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type SchedulingCreateManyDearInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teacherId: string
  }

  export type SchedulingUpdateWithoutDearInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: TeacherUpdateOneRequiredWithoutSchedulingNestedInput
  }

  export type SchedulingUncheckedUpdateWithoutDearInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherId?: StringFieldUpdateOperationsInput | string
  }

  export type SchedulingUncheckedUpdateManyWithoutDearInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherId?: StringFieldUpdateOperationsInput | string
  }

  export type DearCreateManyTeacherInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchedulingCreateManyTeacherInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dearId: string
  }

  export type DearUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduling?: SchedulingUpdateManyWithoutDearNestedInput
  }

  export type DearUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduling?: SchedulingUncheckedUpdateManyWithoutDearNestedInput
  }

  export type DearUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchedulingUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dear?: DearUpdateOneRequiredWithoutSchedulingNestedInput
  }

  export type SchedulingUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dearId?: StringFieldUpdateOperationsInput | string
  }

  export type SchedulingUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dearId?: StringFieldUpdateOperationsInput | string
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