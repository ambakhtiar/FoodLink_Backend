import{createRequire}from'module';const require=createRequire(import.meta.url);
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/dotenv/lib/main.js
var require_main = __commonJS({
  "node_modules/dotenv/lib/main.js"(exports, module) {
    "use strict";
    var fs = __require("fs");
    var path4 = __require("path");
    var os = __require("os");
    var crypto = __require("crypto");
    var TIPS = [
      "\u25C8 encrypted .env [www.dotenvx.com]",
      "\u25C8 secrets for agents [www.dotenvx.com]",
      "\u2301 auth for agents [www.vestauth.com]",
      "\u2318 custom filepath { path: '/custom/path/.env' }",
      "\u2318 enable debugging { debug: true }",
      "\u2318 override existing { override: true }",
      "\u2318 suppress logs { quiet: true }",
      "\u2318 multiple files { path: ['.env.local', '.env'] }"
    ];
    function _getRandomTip() {
      return TIPS[Math.floor(Math.random() * TIPS.length)];
    }
    function parseBoolean(value) {
      if (typeof value === "string") {
        return !["false", "0", "no", "off", ""].includes(value.toLowerCase());
      }
      return Boolean(value);
    }
    function supportsAnsi() {
      return process.stdout.isTTY;
    }
    function dim(text) {
      return supportsAnsi() ? `\x1B[2m${text}\x1B[0m` : text;
    }
    var LINE = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
    function parse(src) {
      const obj = {};
      let lines = src.toString();
      lines = lines.replace(/\r\n?/mg, "\n");
      let match;
      while ((match = LINE.exec(lines)) != null) {
        const key = match[1];
        let value = match[2] || "";
        value = value.trim();
        const maybeQuote = value[0];
        value = value.replace(/^(['"`])([\s\S]*)\1$/mg, "$2");
        if (maybeQuote === '"') {
          value = value.replace(/\\n/g, "\n");
          value = value.replace(/\\r/g, "\r");
        }
        obj[key] = value;
      }
      return obj;
    }
    function _parseVault(options) {
      options = options || {};
      const vaultPath = _vaultPath(options);
      options.path = vaultPath;
      const result = DotenvModule.configDotenv(options);
      if (!result.parsed) {
        const err = new Error(`MISSING_DATA: Cannot parse ${vaultPath} for an unknown reason`);
        err.code = "MISSING_DATA";
        throw err;
      }
      const keys = _dotenvKey(options).split(",");
      const length = keys.length;
      let decrypted;
      for (let i = 0; i < length; i++) {
        try {
          const key = keys[i].trim();
          const attrs = _instructions(result, key);
          decrypted = DotenvModule.decrypt(attrs.ciphertext, attrs.key);
          break;
        } catch (error) {
          if (i + 1 >= length) {
            throw error;
          }
        }
      }
      return DotenvModule.parse(decrypted);
    }
    function _warn(message) {
      console.error(`\u26A0 ${message}`);
    }
    function _debug(message) {
      console.log(`\u2506 ${message}`);
    }
    function _log(message) {
      console.log(`\u25C7 ${message}`);
    }
    function _dotenvKey(options) {
      if (options && options.DOTENV_KEY && options.DOTENV_KEY.length > 0) {
        return options.DOTENV_KEY;
      }
      if (process.env.DOTENV_KEY && process.env.DOTENV_KEY.length > 0) {
        return process.env.DOTENV_KEY;
      }
      return "";
    }
    function _instructions(result, dotenvKey) {
      let uri;
      try {
        uri = new URL(dotenvKey);
      } catch (error) {
        if (error.code === "ERR_INVALID_URL") {
          const err = new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");
          err.code = "INVALID_DOTENV_KEY";
          throw err;
        }
        throw error;
      }
      const key = uri.password;
      if (!key) {
        const err = new Error("INVALID_DOTENV_KEY: Missing key part");
        err.code = "INVALID_DOTENV_KEY";
        throw err;
      }
      const environment = uri.searchParams.get("environment");
      if (!environment) {
        const err = new Error("INVALID_DOTENV_KEY: Missing environment part");
        err.code = "INVALID_DOTENV_KEY";
        throw err;
      }
      const environmentKey = `DOTENV_VAULT_${environment.toUpperCase()}`;
      const ciphertext = result.parsed[environmentKey];
      if (!ciphertext) {
        const err = new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${environmentKey} in your .env.vault file.`);
        err.code = "NOT_FOUND_DOTENV_ENVIRONMENT";
        throw err;
      }
      return { ciphertext, key };
    }
    function _vaultPath(options) {
      let possibleVaultPath = null;
      if (options && options.path && options.path.length > 0) {
        if (Array.isArray(options.path)) {
          for (const filepath of options.path) {
            if (fs.existsSync(filepath)) {
              possibleVaultPath = filepath.endsWith(".vault") ? filepath : `${filepath}.vault`;
            }
          }
        } else {
          possibleVaultPath = options.path.endsWith(".vault") ? options.path : `${options.path}.vault`;
        }
      } else {
        possibleVaultPath = path4.resolve(process.cwd(), ".env.vault");
      }
      if (fs.existsSync(possibleVaultPath)) {
        return possibleVaultPath;
      }
      return null;
    }
    function _resolveHome(envPath) {
      return envPath[0] === "~" ? path4.join(os.homedir(), envPath.slice(1)) : envPath;
    }
    function _configVault(options) {
      const debug = parseBoolean(process.env.DOTENV_CONFIG_DEBUG || options && options.debug);
      const quiet = parseBoolean(process.env.DOTENV_CONFIG_QUIET || options && options.quiet);
      if (debug || !quiet) {
        _log("loading env from encrypted .env.vault");
      }
      const parsed = DotenvModule._parseVault(options);
      let processEnv = process.env;
      if (options && options.processEnv != null) {
        processEnv = options.processEnv;
      }
      DotenvModule.populate(processEnv, parsed, options);
      return { parsed };
    }
    function configDotenv(options) {
      const dotenvPath = path4.resolve(process.cwd(), ".env");
      let encoding = "utf8";
      let processEnv = process.env;
      if (options && options.processEnv != null) {
        processEnv = options.processEnv;
      }
      let debug = parseBoolean(processEnv.DOTENV_CONFIG_DEBUG || options && options.debug);
      let quiet = parseBoolean(processEnv.DOTENV_CONFIG_QUIET || options && options.quiet);
      if (options && options.encoding) {
        encoding = options.encoding;
      } else {
        if (debug) {
          _debug("no encoding is specified (UTF-8 is used by default)");
        }
      }
      let optionPaths = [dotenvPath];
      if (options && options.path) {
        if (!Array.isArray(options.path)) {
          optionPaths = [_resolveHome(options.path)];
        } else {
          optionPaths = [];
          for (const filepath of options.path) {
            optionPaths.push(_resolveHome(filepath));
          }
        }
      }
      let lastError;
      const parsedAll = {};
      for (const path5 of optionPaths) {
        try {
          const parsed = DotenvModule.parse(fs.readFileSync(path5, { encoding }));
          DotenvModule.populate(parsedAll, parsed, options);
        } catch (e) {
          if (debug) {
            _debug(`failed to load ${path5} ${e.message}`);
          }
          lastError = e;
        }
      }
      const populated = DotenvModule.populate(processEnv, parsedAll, options);
      debug = parseBoolean(processEnv.DOTENV_CONFIG_DEBUG || debug);
      quiet = parseBoolean(processEnv.DOTENV_CONFIG_QUIET || quiet);
      if (debug || !quiet) {
        const keysCount = Object.keys(populated).length;
        const shortPaths = [];
        for (const filePath of optionPaths) {
          try {
            const relative = path4.relative(process.cwd(), filePath);
            shortPaths.push(relative);
          } catch (e) {
            if (debug) {
              _debug(`failed to load ${filePath} ${e.message}`);
            }
            lastError = e;
          }
        }
        _log(`injected env (${keysCount}) from ${shortPaths.join(",")} ${dim(`// tip: ${_getRandomTip()}`)}`);
      }
      if (lastError) {
        return { parsed: parsedAll, error: lastError };
      } else {
        return { parsed: parsedAll };
      }
    }
    function config(options) {
      if (_dotenvKey(options).length === 0) {
        return DotenvModule.configDotenv(options);
      }
      const vaultPath = _vaultPath(options);
      if (!vaultPath) {
        _warn(`you set DOTENV_KEY but you are missing a .env.vault file at ${vaultPath}`);
        return DotenvModule.configDotenv(options);
      }
      return DotenvModule._configVault(options);
    }
    function decrypt(encrypted, keyStr) {
      const key = Buffer.from(keyStr.slice(-64), "hex");
      let ciphertext = Buffer.from(encrypted, "base64");
      const nonce = ciphertext.subarray(0, 12);
      const authTag = ciphertext.subarray(-16);
      ciphertext = ciphertext.subarray(12, -16);
      try {
        const aesgcm = crypto.createDecipheriv("aes-256-gcm", key, nonce);
        aesgcm.setAuthTag(authTag);
        return `${aesgcm.update(ciphertext)}${aesgcm.final()}`;
      } catch (error) {
        const isRange = error instanceof RangeError;
        const invalidKeyLength = error.message === "Invalid key length";
        const decryptionFailed = error.message === "Unsupported state or unable to authenticate data";
        if (isRange || invalidKeyLength) {
          const err = new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");
          err.code = "INVALID_DOTENV_KEY";
          throw err;
        } else if (decryptionFailed) {
          const err = new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");
          err.code = "DECRYPTION_FAILED";
          throw err;
        } else {
          throw error;
        }
      }
    }
    function populate(processEnv, parsed, options = {}) {
      const debug = Boolean(options && options.debug);
      const override = Boolean(options && options.override);
      const populated = {};
      if (typeof parsed !== "object") {
        const err = new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");
        err.code = "OBJECT_REQUIRED";
        throw err;
      }
      for (const key of Object.keys(parsed)) {
        if (Object.prototype.hasOwnProperty.call(processEnv, key)) {
          if (override === true) {
            processEnv[key] = parsed[key];
            populated[key] = parsed[key];
          }
          if (debug) {
            if (override === true) {
              _debug(`"${key}" is already defined and WAS overwritten`);
            } else {
              _debug(`"${key}" is already defined and was NOT overwritten`);
            }
          }
        } else {
          processEnv[key] = parsed[key];
          populated[key] = parsed[key];
        }
      }
      return populated;
    }
    var DotenvModule = {
      configDotenv,
      _configVault,
      _parseVault,
      config,
      decrypt,
      parse,
      populate
    };
    module.exports.configDotenv = DotenvModule.configDotenv;
    module.exports._configVault = DotenvModule._configVault;
    module.exports._parseVault = DotenvModule._parseVault;
    module.exports.config = DotenvModule.config;
    module.exports.decrypt = DotenvModule.decrypt;
    module.exports.parse = DotenvModule.parse;
    module.exports.populate = DotenvModule.populate;
    module.exports = DotenvModule;
  }
});

// src/app.ts
import cors from "cors";
import cookieParser from "cookie-parser";
import express from "express";

// src/app/middlewares/globalErrorHandler.ts
import httpStatus from "http-status";
import { ZodError as ZodError2 } from "zod";
import { Prisma } from "@prisma/client";

// src/app/utils/logger.ts
import { createLogger, format, transports } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import path from "path";
var { combine, timestamp, printf, colorize, json, errors } = format;
var logDir = path.join(process.cwd(), "logs");
var consoleFormat = printf((info) => {
  const safeMessage = typeof info.message === "object" && info.message !== null ? JSON.stringify(info.message, null, 2) : String(info.message ?? "");
  const ts = info.timestamp ?? (/* @__PURE__ */ new Date()).toISOString();
  const stackSuffix = info.stack ? `
${String(info.stack)}` : "";
  return `${ts} [${info.level}]: ${safeMessage}${stackSuffix}`;
});
var dailyRotateFileOptions = {
  dirname: logDir,
  datePattern: "YYYY-MM-DD",
  zippedArchive: true,
  maxSize: "20m",
  maxFiles: "14d"
};
var transportsList = [];
if (process.env["NODE_ENV"] === "production" || process.env["VERCEL"] === "1") {
  transportsList.push(
    new transports.Console({
      format: combine(
        timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        errors({ stack: true }),
        json()
      )
    })
  );
} else {
  transportsList.push(
    new transports.Console({
      format: combine(
        colorize({ all: true }),
        timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        errors({ stack: true }),
        consoleFormat
      )
    }),
    new DailyRotateFile({
      ...dailyRotateFileOptions,
      filename: "success-%DATE%.log",
      level: "info"
    }),
    new DailyRotateFile({
      ...dailyRotateFileOptions,
      filename: "error-%DATE%.log",
      level: "error"
    })
  );
}
var logger = createLogger({
  level: process.env["NODE_ENV"] === "production" ? "info" : "debug",
  format: combine(
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    errors({ stack: true }),
    json()
  ),
  defaultMeta: { service: "helpshare-backend" },
  transports: transportsList
});
var logger_default = logger;

// src/app/errors/handleZodError.ts
import { z } from "zod";
var handleZodError = (err) => {
  const errorSources = err.issues.map((issue) => {
    return {
      path: issue?.path[issue.path.length - 1] || "",
      message: issue.message
    };
  });
  const statusCode = 400;
  const message = z.prettifyError(err).replace(/\n/g, " | ");
  return {
    statusCode,
    message,
    errorSources
  };
};
var handleZodError_default = handleZodError;

// src/app/errors/handlePrismaError.ts
var handlePrismaError = (err) => {
  let errorSources = [];
  let statusCode = 400;
  let message = "Database Error";
  if (err.code === "P2002") {
    const target = err.meta?.["target"] || ["unknown"];
    statusCode = 409;
    message = "Duplicate Entry";
    errorSources = [
      {
        path: target.join("."),
        message: `${target.join(".")} already exists`
      }
    ];
  } else if (err.code === "P2025") {
    statusCode = 404;
    message = "Record Not Found";
    errorSources = [
      {
        path: "",
        message: err.meta?.["cause"] || "Record does not exist"
      }
    ];
  } else {
    errorSources = [
      {
        path: "",
        message: err.message
      }
    ];
  }
  return {
    statusCode,
    message,
    errorSources
  };
};
var handlePrismaError_default = handlePrismaError;

// src/app/utils/AppError.ts
var AppError = class extends Error {
  statusCode;
  constructor(statusCode, message, stack = "") {
    super(message);
    this.statusCode = statusCode;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
};
var AppError_default = AppError;

// src/app/middlewares/globalErrorHandler.ts
var globalErrorHandler = (err, _req, res, _next) => {
  let statusCode = err.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
  let message = err.message || "Something went wrong!";
  let errorSources = [
    {
      path: "",
      message: err.message || "Something went wrong!"
    }
  ];
  if (err instanceof ZodError2) {
    const simplifiedError = handleZodError_default(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;
  } else if (err instanceof Prisma.PrismaClientKnownRequestError) {
    const simplifiedError = handlePrismaError_default(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;
  } else if (err instanceof AppError_default) {
    statusCode = err.statusCode;
    message = err.message;
    errorSources = [
      {
        path: "",
        message: err.message
      }
    ];
  } else if (err instanceof Error) {
    message = err.message;
    errorSources = [
      {
        path: "",
        message: err.message
      }
    ];
  }
  logger_default.error(message, {
    statusCode,
    stack: err.stack,
    path: _req.originalUrl,
    method: _req.method
  });
  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    stack: process.env["NODE_ENV"] === "development" ? err?.stack : null
  });
};
var globalErrorHandler_default = globalErrorHandler;

// src/app/middlewares/rateLimiter.ts
import rateLimit from "express-rate-limit";
var globalRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1e3,
  // 15 minutes
  max: 100,
  // Limit each IP to 100 requests per windowMs
  standardHeaders: true,
  // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false,
  // Disable the `X-RateLimit-*` headers
  message: {
    success: false,
    message: "Too many requests from this IP, please try again after 15 minutes"
  }
});

// src/app/routes/index.ts
import { Router as Router9 } from "express";

// src/app/modules/admin/admin.route.ts
import { UserRole as UserRole2 } from "@prisma/client";
import { Router } from "express";

// src/app/middlewares/auth.ts
import { AccountStatus } from "@prisma/client";
import httpStatus2 from "http-status";
import jwt from "jsonwebtoken";

// src/app/config/index.ts
var import_dotenv = __toESM(require_main());
import path2 from "path";
import_dotenv.default.config({ path: path2.join(process.cwd(), ".env") });
var config_default = {
  NODE_ENV: process.env["NODE_ENV"],
  port: process.env["PORT"] || 5e3,
  database_url: process.env["DATABASE_URL"],
  bcrypt_salt_rounds: process.env["BCRYPT_SALT_ROUNDS"] || 12,
  jwt_access_secret: process.env["JWT_ACCESS_SECRET"] || "secret",
  jwt_access_expires_in: process.env["JWT_ACCESS_EXPIRES_IN"] || "15m",
  jwt_refresh_secret: process.env["JWT_REFRESH_SECRET"] || "refresh_secret",
  jwt_refresh_expires_in: process.env["JWT_REFRESH_EXPIRES_IN"] || "30d",
  cloudinary_cloud_name: process.env["CLOUDINARY_CLOUD_NAME"],
  cloudinary_api_key: process.env["CLOUDINARY_API_KEY"],
  cloudinary_api_secret: process.env["CLOUDINARY_API_SECRET"],
  cloudinary_upload_folder: process.env["CLOUDINARY_UPLOAD_FOLDER"] || "HelpShare",
  gemini_api_key: process.env["GEMINI_API_KEY"],
  google_client_id: process.env["GOOGLE_CLIENT_ID"],
  smtp_host: process.env["SMTP_HOST"],
  smtp_port: process.env["SMTP_PORT"] || 587,
  smtp_user: process.env["SMTP_USER"],
  smtp_pass: process.env["SMTP_PASS"]
};

// src/app/utils/catchAsync.ts
var catchAsync = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
};
var catchAsync_default = catchAsync;

// src/app/utils/prisma.ts
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
var globalForPrisma = global;
var dbUrl = process.env["DATABASE_URL"];
if (!dbUrl) {
  console.error("CRITICAL ERROR: DATABASE_URL is not defined in environment variables.");
}
var adapter = new PrismaPg({ connectionString: dbUrl });
var prisma = globalForPrisma.prisma || new PrismaClient({ adapter });
if (process.env["NODE_ENV"] !== "production") globalForPrisma.prisma = prisma;
var prisma_default = prisma;

// src/app/middlewares/auth.ts
var auth = (...requiredRoles) => {
  return catchAsync_default(
    async (req, _res, next) => {
      const token = req.headers.authorization;
      if (!token) {
        throw new AppError_default(httpStatus2.UNAUTHORIZED, "You are not authorized");
      }
      const accessToken = token.split(" ")[1];
      if (!accessToken) {
        throw new AppError_default(httpStatus2.UNAUTHORIZED, "Invalid token format");
      }
      let decoded;
      try {
        decoded = jwt.verify(
          accessToken,
          config_default.jwt_access_secret
        );
      } catch (_error) {
        throw new AppError_default(httpStatus2.UNAUTHORIZED, "Invalid or expired token");
      }
      const { userId, role } = decoded;
      const user = await prisma_default.user.findUnique({
        where: {
          id: userId
        }
      });
      if (!user) {
        throw new AppError_default(httpStatus2.NOT_FOUND, "User does not exist");
      }
      if (user.status === AccountStatus.BANNED) {
        throw new AppError_default(httpStatus2.FORBIDDEN, "User is banned");
      }
      if (requiredRoles.length && !requiredRoles.includes(role)) {
        throw new AppError_default(
          httpStatus2.FORBIDDEN,
          "You have no access to this resource"
        );
      }
      req.user = decoded;
      next();
    }
  );
};
var auth_default = auth;

// src/app/middlewares/validateRequest.ts
var validateRequest = (schema) => {
  return catchAsync_default(
    async (req, _res, next) => {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
        cookies: req.cookies
      });
      next();
    }
  );
};
var validateRequest_default = validateRequest;

// src/app/modules/admin/admin.controller.ts
import httpStatus4 from "http-status";

// src/app/utils/sendResponse.ts
var sendResponse = (res, data) => {
  res.status(data.statusCode).json({
    success: data.success,
    message: data.message,
    meta: data.meta,
    data: data.data
  });
};
var sendResponse_default = sendResponse;

// src/app/modules/admin/admin.service.ts
import { AccountStatus as AccountStatus2 } from "@prisma/client";
import httpStatus3 from "http-status";
var getSystemStats = async () => {
  const [totalUsers, totalPosts, successfulTransactions] = await prisma_default.$transaction([
    prisma_default.user.count(),
    prisma_default.post.count(),
    prisma_default.transactionRequest.count({
      where: { status: "COMPLETED" }
    })
  ]);
  return {
    totalUsers,
    totalPosts,
    successfulTransactions
  };
};
var getAllUsers = async (page = 1, limit = 10) => {
  const skip = (page - 1) * limit;
  const totalCount = await prisma_default.user.count();
  const users = await prisma_default.user.findMany({
    orderBy: { createdAt: "desc" },
    skip,
    take: limit
  });
  return {
    meta: {
      totalCount,
      currentPage: page,
      limit,
      totalPages: Math.ceil(totalCount / limit)
    },
    data: users
  };
};
var verifyNGO = async (userId) => {
  const user = await prisma_default.user.update({
    where: { id: userId },
    data: { status: AccountStatus2.ACTIVE }
  });
  return user;
};
var toggleBan = async (userId) => {
  const targetUser = await prisma_default.user.findUnique({
    where: { id: userId }
  });
  if (!targetUser) {
    throw new AppError_default(httpStatus3.NOT_FOUND, "User not found");
  }
  const newStatus = targetUser.status === AccountStatus2.BANNED ? AccountStatus2.ACTIVE : AccountStatus2.BANNED;
  const user = await prisma_default.user.update({
    where: { id: userId },
    data: { status: newStatus }
  });
  return user;
};
var AdminService = {
  getSystemStats,
  getAllUsers,
  verifyNGO,
  toggleBan
};

// src/app/modules/admin/admin.controller.ts
var getSystemStats2 = catchAsync_default(async (_req, res) => {
  const result = await AdminService.getSystemStats();
  sendResponse_default(res, {
    statusCode: httpStatus4.OK,
    success: true,
    message: "System stats retrieved successfully",
    data: result
  });
});
var getAllUsers2 = catchAsync_default(async (req, res) => {
  const page = parseInt(req.query["page"]) || 1;
  const limit = parseInt(req.query["limit"]) || 10;
  const result = await AdminService.getAllUsers(page, limit);
  sendResponse_default(res, {
    statusCode: httpStatus4.OK,
    success: true,
    message: "Users retrieved successfully",
    meta: result.meta,
    data: result.data
  });
});
var verifyNGO2 = catchAsync_default(async (req, res) => {
  const userId = req.params["userId"];
  const result = await AdminService.verifyNGO(userId);
  sendResponse_default(res, {
    statusCode: httpStatus4.OK,
    success: true,
    message: "User verified successfully",
    data: result
  });
});
var toggleBan2 = catchAsync_default(async (req, res) => {
  const userId = req.params["userId"];
  const result = await AdminService.toggleBan(userId);
  sendResponse_default(res, {
    statusCode: httpStatus4.OK,
    success: true,
    message: `User ${result.status === "BANNED" ? "banned" : "unbanned"} successfully`,
    data: result
  });
});
var AdminController = {
  getSystemStats: getSystemStats2,
  getAllUsers: getAllUsers2,
  verifyNGO: verifyNGO2,
  toggleBan: toggleBan2
};

// src/app/modules/admin/admin.validation.ts
import { z as z2 } from "zod";
var verifyNGOSchema = z2.object({
  params: z2.object({
    userId: z2.string({
      error: (issue) => issue.code === "invalid_type" && issue["received"] === "undefined" ? "User ID is required" : "Invalid User ID"
    })
  })
});
var AdminValidation = {
  verifyNGOSchema
};

// src/app/modules/admin/admin.route.ts
var router = Router();
router.get(
  "/stats",
  auth_default(UserRole2.ADMIN, UserRole2.SUPER_ADMIN),
  AdminController.getSystemStats
);
router.get(
  "/users",
  auth_default(UserRole2.ADMIN, UserRole2.SUPER_ADMIN),
  AdminController.getAllUsers
);
router.patch(
  "/users/:userId/verify",
  auth_default(UserRole2.ADMIN, UserRole2.SUPER_ADMIN),
  validateRequest_default(AdminValidation.verifyNGOSchema),
  AdminController.verifyNGO
);
router.patch(
  "/users/:userId/ban",
  auth_default(UserRole2.ADMIN, UserRole2.SUPER_ADMIN),
  validateRequest_default(AdminValidation.verifyNGOSchema),
  AdminController.toggleBan
);
var AdminRoutes = router;

// src/app/modules/auth/auth.route.ts
import { Router as Router2 } from "express";

// src/app/modules/auth/auth.controller.ts
import httpStatus6 from "http-status";

// src/app/modules/auth/auth.service.ts
import { AccountStatus as AccountStatus3, UserRole as UserRole3 } from "@prisma/client";
import bcrypt from "bcrypt";
import httpStatus5 from "http-status";
import jwt2 from "jsonwebtoken";

// src/app/utils/mailHelper.ts
import nodemailer from "nodemailer";
import ejs from "ejs";
import path3 from "path";
var transporter = nodemailer.createTransport({
  host: config_default.smtp_host,
  port: Number(config_default.smtp_port),
  secure: Number(config_default.smtp_port) === 465,
  auth: {
    user: config_default.smtp_user,
    pass: config_default.smtp_pass
  }
});
console.log("Nodemailer initialized for host:", config_default.smtp_host);
var sendEmail = async (to, subject, templateName, data) => {
  try {
    const templatePath = path3.join(process.cwd(), "src", "app", "views", "emails", `${templateName}.ejs`);
    const html = await ejs.renderFile(templatePath, data);
    const info = await transporter.sendMail({
      from: `"HelpShare" <${config_default.smtp_user}>`,
      to,
      subject,
      html
    });
    return info;
  } catch (error) {
    console.error("Email sending failed:", error);
    throw error;
  }
};
var MailHelper = {
  sendEmail
};

// src/app/modules/auth/auth.service.ts
var generateAccessToken = (user) => {
  const jwtPayload = {
    userId: user.id,
    role: user.role,
    status: user.status
  };
  return jwt2.sign(
    jwtPayload,
    config_default.jwt_access_secret,
    {
      expiresIn: config_default.jwt_access_expires_in
    }
  );
};
var generateRefreshToken = (user) => {
  const jwtPayload = {
    userId: user.id,
    role: user.role,
    status: user.status
  };
  return jwt2.sign(
    jwtPayload,
    config_default.jwt_refresh_secret,
    {
      expiresIn: config_default.jwt_refresh_expires_in
    }
  );
};
var registerUser = async (payload) => {
  const isUserExists = await prisma_default.user.findUnique({
    where: { email: payload.email }
  });
  if (isUserExists) {
    throw new AppError_default(httpStatus5.BAD_REQUEST, "User already exists");
  }
  const role = payload.role ?? UserRole3.USER;
  if (role === UserRole3.ADMIN || role === UserRole3.SUPER_ADMIN) {
    throw new AppError_default(
      httpStatus5.FORBIDDEN,
      "Cannot register as admin via public endpoint"
    );
  }
  const hashedPassword = await bcrypt.hash(
    payload.password,
    Number(config_default.bcrypt_salt_rounds)
  );
  const status = role === UserRole3.ORGANIZATION ? AccountStatus3.PENDING : AccountStatus3.ACTIVE;
  const newUser = await prisma_default.user.create({
    data: {
      email: payload.email,
      passwordHash: hashedPassword,
      phone: payload.phone,
      role,
      status,
      authProvider: "local",
      ...role === UserRole3.USER && {
        userProfile: {
          create: {
            name: payload.name,
            latitude: payload.latitude,
            longitude: payload.longitude
          }
        }
      },
      ...role === UserRole3.ORGANIZATION && {
        organizationProfile: {
          create: {
            orgName: payload.orgName,
            latitude: payload.latitude,
            longitude: payload.longitude,
            ...payload.establishedYear !== void 0 && {
              establishedYear: payload.establishedYear
            },
            ...payload.registrationNumber !== void 0 && {
              registrationNumber: payload.registrationNumber
            }
          }
        }
      }
    }
  });
  return newUser;
};
var loginUser = async (payload, clientInfo) => {
  const user = await prisma_default.user.findFirst({
    where: {
      OR: [
        { email: payload.email },
        { phone: payload.email }
      ]
    }
  });
  if (!user) {
    throw new AppError_default(httpStatus5.NOT_FOUND, "User not found");
  }
  if (user.status === AccountStatus3.PENDING) {
    throw new AppError_default(
      httpStatus5.FORBIDDEN,
      "Your organization account is waiting for admin approval."
    );
  }
  if (!user.passwordHash) {
    throw new AppError_default(
      httpStatus5.FORBIDDEN,
      "This account uses OAuth. Please login with Google."
    );
  }
  const isPasswordMatched = await bcrypt.compare(
    payload.password,
    user.passwordHash
  );
  if (!isPasswordMatched) {
    throw new AppError_default(httpStatus5.FORBIDDEN, "Password does not match");
  }
  const accessToken = generateAccessToken(user);
  const refreshToken3 = generateRefreshToken(user);
  await prisma_default.session.create({
    data: {
      userId: user.id,
      refreshToken: refreshToken3,
      userAgent: clientInfo.userAgent || null,
      ipAddress: clientInfo.ipAddress || null,
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1e3)
      // 30 days
    }
  });
  return {
    accessToken,
    refreshToken: refreshToken3
  };
};
var getMe = async (userId) => {
  const user = await prisma_default.user.findUnique({
    where: {
      id: userId
    },
    include: {
      userProfile: true,
      organizationProfile: true,
      adminProfile: true
    }
  });
  if (!user) {
    throw new AppError_default(httpStatus5.NOT_FOUND, "User not found");
  }
  const profile = user.userProfile ?? user.organizationProfile ?? user.adminProfile;
  return {
    id: user.id,
    email: user.email,
    phone: user.phone,
    role: user.role,
    status: user.status,
    authProvider: user.authProvider,
    profilePictureUrl: user.profilePictureUrl,
    name: user.userProfile?.name ?? user.organizationProfile?.orgName ?? user.adminProfile?.name,
    latitude: user.userProfile?.latitude ?? user.organizationProfile?.latitude,
    longitude: user.userProfile?.longitude ?? user.organizationProfile?.longitude,
    impactScore: user.userProfile?.impactScore ?? user.organizationProfile?.impactScore,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    profile
  };
};
var changePassword = async (userId, currentPassword, newPassword) => {
  const user = await prisma_default.user.findUnique({
    where: { id: userId }
  });
  if (!user) {
    throw new AppError_default(httpStatus5.NOT_FOUND, "User not found");
  }
  if (!user.passwordHash) {
    throw new AppError_default(
      httpStatus5.FORBIDDEN,
      "This account uses OAuth. Password cannot be changed."
    );
  }
  const isPasswordMatched = await bcrypt.compare(
    currentPassword,
    user.passwordHash
  );
  if (!isPasswordMatched) {
    throw new AppError_default(httpStatus5.FORBIDDEN, "Current password is incorrect");
  }
  const hashedNewPassword = await bcrypt.hash(
    newPassword,
    Number(config_default.bcrypt_salt_rounds)
  );
  await prisma_default.$transaction([
    prisma_default.user.update({
      where: { id: userId },
      data: { passwordHash: hashedNewPassword }
    }),
    prisma_default.session.deleteMany({
      where: { userId }
    })
  ]);
};
var forgotPassword = async (email) => {
  const user = await prisma_default.user.findUnique({
    where: { email }
  });
  if (!user) {
    throw new AppError_default(httpStatus5.NOT_FOUND, "User not found");
  }
  if (!user.passwordHash || user.authProvider === "google") {
    throw new AppError_default(
      httpStatus5.FORBIDDEN,
      "This account uses Google Login. Password reset is not available."
    );
  }
  const otp = Math.floor(1e5 + Math.random() * 9e5).toString();
  const otpExpiry = new Date(Date.now() + 5 * 60 * 1e3);
  await prisma_default.user.update({
    where: { id: user.id },
    data: { otp, otpExpiry }
  });
  await MailHelper.sendEmail(
    email,
    "Your HelpShare Security Code",
    "otp",
    { otp }
  );
  console.log(`[OTP Sent] Email: ${email} | OTP: ${otp}`);
};
var verifyOtp = async (email, otp) => {
  const user = await prisma_default.user.findUnique({
    where: { email }
  });
  if (!user) {
    throw new AppError_default(httpStatus5.NOT_FOUND, "User not found");
  }
  if (!user.otp || !user.otpExpiry) {
    throw new AppError_default(httpStatus5.BAD_REQUEST, "No OTP found");
  }
  if (user.otp !== otp) {
    throw new AppError_default(httpStatus5.BAD_REQUEST, "Invalid OTP");
  }
  if (/* @__PURE__ */ new Date() > user.otpExpiry) {
    throw new AppError_default(httpStatus5.BAD_REQUEST, "OTP has expired");
  }
};
var resetPassword = async (email, otp, newPassword) => {
  await verifyOtp(email, otp);
  const user = await prisma_default.user.findUnique({ where: { email } });
  if (!user) {
    throw new AppError_default(httpStatus5.NOT_FOUND, "User not found");
  }
  if (!user.passwordHash || user.authProvider === "google") {
    throw new AppError_default(
      httpStatus5.FORBIDDEN,
      "This account uses Google Login. Password reset is not available."
    );
  }
  const hashedNewPassword = await bcrypt.hash(
    newPassword,
    Number(config_default.bcrypt_salt_rounds)
  );
  await prisma_default.$transaction([
    prisma_default.user.update({
      where: { email },
      data: {
        passwordHash: hashedNewPassword,
        otp: null,
        otpExpiry: null
      }
    }),
    prisma_default.session.deleteMany({
      where: { userId: user.id }
    })
  ]);
};
var googleLogin = async (payload, clientInfo) => {
  const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${payload.googleToken}`);
  const payload_google = await response.json();
  if (!payload_google || !payload_google.email) {
    throw new AppError_default(httpStatus5.BAD_REQUEST, "Invalid Google token");
  }
  const { email, name } = payload_google;
  let user = await prisma_default.user.findUnique({
    where: { email }
  });
  if (!user) {
    user = await prisma_default.user.create({
      data: {
        email,
        passwordHash: null,
        phone: null,
        role: UserRole3.USER,
        status: AccountStatus3.INCOMPLETE_PROFILE,
        authProvider: "google",
        isVerified: true,
        userProfile: {
          create: {
            name: name || "Google User"
          }
        }
      }
    });
  }
  const accessToken = generateAccessToken(user);
  const refreshToken3 = generateRefreshToken(user);
  await prisma_default.session.create({
    data: {
      userId: user.id,
      refreshToken: refreshToken3,
      userAgent: clientInfo.userAgent || null,
      ipAddress: clientInfo.ipAddress || null,
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1e3)
    }
  });
  return { accessToken, refreshToken: refreshToken3 };
};
var completeProfile = async (userId, payload, clientInfo) => {
  const user = await prisma_default.user.findUnique({
    where: { id: userId },
    include: { userProfile: true }
  });
  if (!user) {
    throw new AppError_default(httpStatus5.NOT_FOUND, "User not found");
  }
  if (user.status !== AccountStatus3.INCOMPLETE_PROFILE) {
    throw new AppError_default(
      httpStatus5.BAD_REQUEST,
      "Profile is already complete"
    );
  }
  const updatedUser = await prisma_default.$transaction(async (tx) => {
    const updated = await tx.user.update({
      where: { id: userId },
      data: {
        phone: payload.phone,
        status: AccountStatus3.ACTIVE
      }
    });
    await tx.userProfile.update({
      where: { userId },
      data: {
        latitude: payload.latitude,
        longitude: payload.longitude
      }
    });
    return updated;
  });
  const accessToken = generateAccessToken(updatedUser);
  const refreshToken3 = generateRefreshToken(updatedUser);
  await prisma_default.session.create({
    data: {
      userId: updatedUser.id,
      refreshToken: refreshToken3,
      userAgent: clientInfo.userAgent || null,
      ipAddress: clientInfo.ipAddress || null,
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1e3)
    }
  });
  return { accessToken, refreshToken: refreshToken3 };
};
var refreshToken = async (token) => {
  let verifiedToken;
  try {
    verifiedToken = jwt2.verify(
      token,
      config_default.jwt_refresh_secret
    );
  } catch (error) {
    throw new AppError_default(httpStatus5.UNAUTHORIZED, "Invalid refresh token");
  }
  const { userId } = verifiedToken;
  const session = await prisma_default.session.findUnique({
    where: { refreshToken: token }
  });
  if (!session || /* @__PURE__ */ new Date() > session.expiresAt) {
    throw new AppError_default(httpStatus5.UNAUTHORIZED, "Session expired or invalid");
  }
  const user = await prisma_default.user.findUnique({
    where: { id: userId }
  });
  if (!user) {
    throw new AppError_default(httpStatus5.NOT_FOUND, "User not found");
  }
  const accessToken = generateAccessToken(user);
  return { accessToken };
};
var logout = async (token) => {
  await prisma_default.session.delete({
    where: { refreshToken: token }
  }).catch(() => {
  });
};
var AuthService = {
  registerUser,
  loginUser,
  getMe,
  changePassword,
  forgotPassword,
  verifyOtp,
  resetPassword,
  googleLogin,
  completeProfile,
  refreshToken,
  logout
};

// src/app/modules/auth/auth.controller.ts
var registerUser2 = catchAsync_default(async (req, res) => {
  const result = await AuthService.registerUser(req.body);
  const { passwordHash, ...userWithoutPassword } = result;
  sendResponse_default(res, {
    statusCode: httpStatus6.CREATED,
    success: true,
    message: "User registered successfully",
    data: userWithoutPassword
  });
});
var loginUser2 = catchAsync_default(async (req, res) => {
  const userAgent = req.headers["user-agent"];
  const ipAddress = req.ip;
  const result = await AuthService.loginUser(req.body, { userAgent, ipAddress });
  const { refreshToken: refreshToken3, accessToken } = result;
  const cookieOptions = {
    secure: config_default.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "strict"
  };
  res.cookie("refreshToken", refreshToken3, cookieOptions);
  sendResponse_default(res, {
    statusCode: httpStatus6.OK,
    success: true,
    message: "User logged in successfully",
    data: { accessToken }
  });
});
var getMeHandler = catchAsync_default(async (req, res) => {
  const userId = req.user.userId;
  const result = await AuthService.getMe(userId);
  sendResponse_default(res, {
    statusCode: httpStatus6.OK,
    success: true,
    message: "User profile retrieved successfully",
    data: result
  });
});
var changePassword2 = catchAsync_default(async (req, res) => {
  const { userId } = req.user;
  const { currentPassword, newPassword } = req.body;
  await AuthService.changePassword(userId, currentPassword, newPassword);
  sendResponse_default(res, {
    statusCode: httpStatus6.OK,
    success: true,
    message: "Password changed successfully",
    data: null
  });
});
var forgotPassword2 = catchAsync_default(async (req, res) => {
  const { email } = req.body;
  await AuthService.forgotPassword(email);
  sendResponse_default(res, {
    statusCode: httpStatus6.OK,
    success: true,
    message: "OTP sent to email successfully",
    data: null
  });
});
var verifyOtp2 = catchAsync_default(async (req, res) => {
  const { email, otp } = req.body;
  await AuthService.verifyOtp(email, otp);
  sendResponse_default(res, {
    statusCode: httpStatus6.OK,
    success: true,
    message: "OTP verified successfully",
    data: null
  });
});
var resetPassword2 = catchAsync_default(async (req, res) => {
  const { email, otp, newPassword } = req.body;
  await AuthService.resetPassword(email, otp, newPassword);
  sendResponse_default(res, {
    statusCode: httpStatus6.OK,
    success: true,
    message: "Password reset successfully",
    data: null
  });
});
var googleLogin2 = catchAsync_default(async (req, res) => {
  const userAgent = req.headers["user-agent"];
  const ipAddress = req.ip;
  const result = await AuthService.googleLogin(req.body, { userAgent, ipAddress });
  const { refreshToken: refreshToken3, accessToken } = result;
  const cookieOptions = {
    secure: config_default.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "strict"
  };
  res.cookie("refreshToken", refreshToken3, cookieOptions);
  sendResponse_default(res, {
    statusCode: httpStatus6.OK,
    success: true,
    message: "Google login successful",
    data: { accessToken }
  });
});
var completeProfile2 = catchAsync_default(async (req, res) => {
  const userId = req.user.userId;
  const userAgent = req.headers["user-agent"];
  const ipAddress = req.ip;
  const result = await AuthService.completeProfile(userId, req.body, { userAgent, ipAddress });
  const { refreshToken: refreshToken3, accessToken } = result;
  const cookieOptions = {
    secure: config_default.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "strict"
  };
  res.cookie("refreshToken", refreshToken3, cookieOptions);
  sendResponse_default(res, {
    statusCode: httpStatus6.OK,
    success: true,
    message: "Profile completed successfully",
    data: { accessToken }
  });
});
var refreshToken2 = catchAsync_default(async (req, res) => {
  const { refreshToken: refreshToken3 } = req.cookies;
  const result = await AuthService.refreshToken(refreshToken3);
  sendResponse_default(res, {
    statusCode: httpStatus6.OK,
    success: true,
    message: "Access token retrieved successfully",
    data: result
  });
});
var logout2 = catchAsync_default(async (req, res) => {
  const { refreshToken: refreshToken3 } = req.cookies;
  if (refreshToken3) {
    await AuthService.logout(refreshToken3);
  }
  res.clearCookie("refreshToken");
  sendResponse_default(res, {
    statusCode: httpStatus6.OK,
    success: true,
    message: "Logged out successfully",
    data: null
  });
});
var AuthController = {
  registerUser: registerUser2,
  loginUser: loginUser2,
  getMeHandler,
  changePassword: changePassword2,
  forgotPassword: forgotPassword2,
  verifyOtp: verifyOtp2,
  resetPassword: resetPassword2,
  googleLogin: googleLogin2,
  completeProfile: completeProfile2,
  refreshToken: refreshToken2,
  logout: logout2
};

// src/app/modules/auth/auth.validation.ts
import { UserRole as UserRole4 } from "@prisma/client";
import { z as z3 } from "zod";
var registerValidationSchema = z3.object({
  body: z3.object({
    name: z3.string({
      error: (issue) => issue.code === "invalid_type" && issue["received"] === "undefined" ? "Name is required" : "Invalid name"
    }).optional(),
    email: z3.string({
      error: (issue) => issue.code === "invalid_type" && issue["received"] === "undefined" ? "Email is required" : "Invalid email"
    }).email("Invalid email format"),
    password: z3.string({
      error: (issue) => issue.code === "invalid_type" && issue["received"] === "undefined" ? "Password is required" : "Invalid password"
    }).min(6, "Password must be at least 6 characters"),
    phone: z3.string({
      error: (issue) => issue.code === "invalid_type" && issue["received"] === "undefined" ? "Phone number is required" : "Invalid phone number"
    }).regex(/^\+8801[3-9]\d{8}$/, "Invalid Bangladesh phone number. Format: +8801XXXXXXXXX"),
    role: z3.nativeEnum(UserRole4, {
      error: (issue) => (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        issue.code === "invalid_type" && issue["received"] === "undefined" ? "Role is required" : "Invalid role"
      )
    }).refine(
      (val) => val !== UserRole4.ADMIN && val !== UserRole4.SUPER_ADMIN,
      {
        message: "Cannot register as ADMIN or SUPER_ADMIN via public endpoint"
      }
    ),
    orgName: z3.string({
      error: (issue) => issue.code === "invalid_type" && issue["received"] === "undefined" ? "Organization name is required" : "Invalid organization name"
    }).optional(),
    establishedYear: z3.number({
      error: (issue) => issue.code === "invalid_type" && issue["received"] === "undefined" ? "Established year is required" : "Invalid established year"
    }).optional(),
    registrationNumber: z3.string({
      error: (issue) => issue.code === "invalid_type" && issue["received"] === "undefined" ? "Registration number is required" : "Invalid registration number"
    }).optional(),
    latitude: z3.number({
      error: (issue) => issue.code === "invalid_type" && issue["received"] === "undefined" ? "Latitude is required" : "Invalid latitude"
    }),
    longitude: z3.number({
      error: (issue) => issue.code === "invalid_type" && issue["received"] === "undefined" ? "Longitude is required" : "Invalid longitude"
    })
  }).refine(
    (data) => {
      if (data.role === UserRole4.USER) {
        return data.name !== void 0 && data.name.trim().length > 0;
      }
      if (data.role === UserRole4.ORGANIZATION) {
        return data.orgName !== void 0 && data.orgName.trim().length > 0;
      }
      return false;
    },
    {
      message: "Name is required for USER role. orgName is required for ORGANIZATION role",
      path: ["name"]
    }
  )
});
var loginValidationSchema = z3.object({
  body: z3.object({
    email: z3.string({
      error: (issue) => issue.code === "invalid_type" && issue["received"] === "undefined" ? "Email or phone is required" : "Invalid email or phone"
    }),
    password: z3.string({
      error: (issue) => issue.code === "invalid_type" && issue["received"] === "undefined" ? "Password is required" : "Invalid password"
    })
  })
});
var changePasswordSchema = z3.object({
  body: z3.object({
    currentPassword: z3.string({
      error: (issue) => issue.code === "invalid_type" && issue["received"] === "undefined" ? "Current password is required" : "Invalid current password"
    }),
    newPassword: z3.string({
      error: (issue) => issue.code === "invalid_type" && issue["received"] === "undefined" ? "New password is required" : "Invalid new password"
    }).min(6, "New password must be at least 6 characters")
  })
});
var forgotPasswordSchema = z3.object({
  body: z3.object({
    email: z3.string({
      error: (issue) => issue.code === "invalid_type" && issue["received"] === "undefined" ? "Email is required" : "Invalid email"
    }).email("Invalid email format")
  })
});
var verifyOtpSchema = z3.object({
  body: z3.object({
    email: z3.string({
      error: (issue) => issue.code === "invalid_type" && issue["received"] === "undefined" ? "Email is required" : "Invalid email"
    }).email("Invalid email format"),
    otp: z3.string({
      error: (issue) => issue.code === "invalid_type" && issue["received"] === "undefined" ? "OTP is required" : "Invalid OTP"
    }).length(6, "OTP must be exactly 6 digits")
  })
});
var resetPasswordSchema = z3.object({
  body: z3.object({
    email: z3.string({
      error: (issue) => issue.code === "invalid_type" && issue["received"] === "undefined" ? "Email is required" : "Invalid email"
    }).email("Invalid email format"),
    otp: z3.string({
      error: (issue) => issue.code === "invalid_type" && issue["received"] === "undefined" ? "OTP is required" : "Invalid OTP"
    }).length(6, "OTP must be exactly 6 digits"),
    newPassword: z3.string({
      error: (issue) => issue.code === "invalid_type" && issue["received"] === "undefined" ? "New password is required" : "Invalid new password"
    }).min(6, "New password must be at least 6 characters")
  })
});
var googleLoginSchema = z3.object({
  body: z3.object({
    googleToken: z3.string({
      error: (issue) => issue.code === "invalid_type" && issue["received"] === "undefined" ? "Google token is required" : "Invalid Google token"
    })
  })
});
var completeProfileSchema = z3.object({
  body: z3.object({
    phone: z3.string({
      error: (issue) => issue.code === "invalid_type" && issue["received"] === "undefined" ? "Phone number is required" : "Invalid phone number"
    }).regex(/^\+8801[3-9]\d{8}$/, "Invalid Bangladesh phone number. Format: +8801XXXXXXXXX"),
    latitude: z3.number({
      error: (issue) => issue.code === "invalid_type" && issue["received"] === "undefined" ? "Latitude is required" : "Invalid latitude"
    }),
    longitude: z3.number({
      error: (issue) => issue.code === "invalid_type" && issue["received"] === "undefined" ? "Longitude is required" : "Invalid longitude"
    })
  })
});
var AuthValidation = {
  registerValidationSchema,
  loginValidationSchema,
  changePasswordSchema,
  forgotPasswordSchema,
  verifyOtpSchema,
  resetPasswordSchema,
  googleLoginSchema,
  completeProfileSchema
};

// src/app/modules/auth/auth.route.ts
var router2 = Router2();
router2.post(
  "/register",
  validateRequest_default(AuthValidation.registerValidationSchema),
  AuthController.registerUser
);
router2.post(
  "/login",
  validateRequest_default(AuthValidation.loginValidationSchema),
  AuthController.loginUser
);
router2.get("/me", auth_default(), AuthController.getMeHandler);
router2.patch(
  "/change-password",
  auth_default(),
  validateRequest_default(AuthValidation.changePasswordSchema),
  AuthController.changePassword
);
router2.post(
  "/forgot-password",
  validateRequest_default(AuthValidation.forgotPasswordSchema),
  AuthController.forgotPassword
);
router2.post(
  "/verify-otp",
  validateRequest_default(AuthValidation.verifyOtpSchema),
  AuthController.verifyOtp
);
router2.post(
  "/reset-password",
  validateRequest_default(AuthValidation.resetPasswordSchema),
  AuthController.resetPassword
);
router2.post(
  "/google",
  validateRequest_default(AuthValidation.googleLoginSchema),
  AuthController.googleLogin
);
router2.post(
  "/complete-profile",
  auth_default(),
  validateRequest_default(AuthValidation.completeProfileSchema),
  AuthController.completeProfile
);
router2.post("/refresh", AuthController.refreshToken);
router2.post("/logout", AuthController.logout);
var AuthRoutes = router2;

// src/app/modules/post/post.route.ts
import { Router as Router3 } from "express";

// src/app/middlewares/upload.ts
import multer from "multer";
var storage = multer.memoryStorage();
var upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024
  }
});
var upload_default = upload;

// src/app/middlewares/optionalAuth.ts
import { AccountStatus as AccountStatus4 } from "@prisma/client";
import jwt3 from "jsonwebtoken";
var optionalAuth = async (req, _res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return next();
  }
  const accessToken = token.split(" ")[1];
  if (!accessToken) {
    return next();
  }
  try {
    const decoded = jwt3.verify(
      accessToken,
      config_default.jwt_access_secret
    );
    const { userId } = decoded;
    const user = await prisma_default.user.findUnique({
      where: { id: userId }
    });
    if (user && user.status !== AccountStatus4.BANNED) {
      req.user = decoded;
    }
  } catch (_error) {
  }
  next();
};
var optionalAuth_default = optionalAuth;

// src/app/modules/post/post.controller.ts
import httpStatus10 from "http-status";

// src/app/modules/post/post.service.ts
import { PostType } from "@prisma/client";
import httpStatus8 from "http-status";

// src/app/modules/ai/ai.service.ts
import { GoogleGenerativeAI } from "@google/generative-ai";
import httpStatus7 from "http-status";
var generateFoodDetails = async (imageUrl, userTitle, userDescription) => {
  const apiKey = config_default.gemini_api_key;
  if (!apiKey) {
    throw new AppError_default(
      httpStatus7.INTERNAL_SERVER_ERROR,
      "Gemini API key not configured"
    );
  }
  try {
    const imageResp = await fetch(imageUrl);
    if (!imageResp.ok) {
      throw new AppError_default(
        httpStatus7.BAD_REQUEST,
        "Failed to fetch image from URL"
      );
    }
    const imageBuffer = await imageResp.arrayBuffer();
    const base64 = Buffer.from(imageBuffer).toString("base64");
    const mimeType = imageResp.headers.get("content-type") || "image/jpeg";
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    let prompt = 'Analyze this food image and return ONLY a JSON object with exactly these keys: "title" (string, max 5 words), "description" (string, 1-2 sentences), "estimatedShelfLife" (ISO 8601 date string). Do not include markdown, code blocks, or any extra text.';
    if (userTitle || userDescription) {
      prompt += "\n\nThe user provided some manual details for this food. Please enhance or incorporate these details based on the image, and only add what is missing or correct inaccuracies:";
      if (userTitle) prompt += `
User Title: "${userTitle}"`;
      if (userDescription) prompt += `
User Description: "${userDescription}"`;
    }
    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          data: base64,
          mimeType
        }
      }
    ]);
    const response = await result.response;
    const text = response.text();
    let jsonText = text.trim();
    if (jsonText.startsWith("```json")) {
      jsonText = jsonText.slice(7);
    } else if (jsonText.startsWith("```")) {
      jsonText = jsonText.slice(3);
    }
    if (jsonText.endsWith("```")) {
      jsonText = jsonText.slice(0, -3);
    }
    jsonText = jsonText.trim();
    const parsed = JSON.parse(jsonText);
    const estimatedShelfLife = new Date(parsed.estimatedShelfLife);
    if (isNaN(estimatedShelfLife.getTime())) {
      throw new AppError_default(
        httpStatus7.INTERNAL_SERVER_ERROR,
        "Invalid date returned from AI"
      );
    }
    await logAiAction("GENERATE_FOOD_DETAILS", prompt, text);
    return {
      title: parsed.title,
      description: parsed.description,
      estimatedShelfLife
    };
  } catch (error) {
    console.error("AI Generation Error:", error);
    if (error instanceof AppError_default) throw error;
    throw new AppError_default(
      httpStatus7.INTERNAL_SERVER_ERROR,
      `AI generation failed: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
};
var logAiAction = async (actionType, prompt, response) => {
  await prisma_default.aiLog.create({
    data: {
      actionType,
      prompt,
      response
    }
  });
};
var AiService = {
  generateFoodDetails,
  logAiAction
};

// src/app/modules/post/post.service.ts
var createPost = async (payload) => {
  const {
    type,
    category,
    quantity,
    latitude,
    longitude,
    imageUrls,
    title,
    description,
    metadata,
    authorId
  } = payload;
  let postTitle = title;
  let postDescription = description;
  let estimatedShelfLife;
  if (type === PostType.DONATION && imageUrls && imageUrls.length > 0) {
    try {
      const aiDetails = await AiService.generateFoodDetails(imageUrls[0], title || "", description || "");
      postTitle = aiDetails.title;
      postDescription = aiDetails.description;
      estimatedShelfLife = aiDetails.estimatedShelfLife;
    } catch (error) {
      console.error("AI Generation failed during post creation, falling back to manual details", error);
      postTitle = title;
      postDescription = description;
    }
  }
  if (!postTitle || !postDescription) {
    if (type === PostType.REQUEST) {
      postTitle = postTitle ?? "Item Request";
      postDescription = postDescription ?? "Requesting item donation";
    } else {
      postTitle = postTitle ?? "Item Donation";
      postDescription = postDescription ?? "Donation of items";
    }
  }
  const post = await prisma_default.post.create({
    data: {
      type,
      category,
      title: postTitle,
      description: postDescription,
      quantity,
      latitude,
      longitude,
      imageUrls: imageUrls || [],
      estimatedShelfLife: estimatedShelfLife ?? null,
      ...metadata !== void 0 && { metadata },
      authorId
    }
  });
  return post;
};
var fetchAvailablePostsWithinRadius = async (latitude, longitude, page = 1, limit = 10, type, radiusInKm = 5) => {
  const skip = (page - 1) * limit;
  const dLat = radiusInKm / 111.32;
  const dLng = radiusInKm / (111.32 * Math.cos(latitude * (Math.PI / 180)));
  const where = {
    status: "AVAILABLE",
    latitude: {
      gte: latitude - dLat,
      lte: latitude + dLat
    },
    longitude: {
      gte: longitude - dLng,
      lte: longitude + dLng
    }
  };
  if (type) {
    where.type = type;
  }
  const totalCount = await prisma_default.post.count({ where });
  const posts = await prisma_default.post.findMany({
    where,
    include: {
      author: {
        include: {
          userProfile: { select: { name: true, impactScore: true } },
          organizationProfile: { select: { orgName: true, impactScore: true } }
        }
      },
      _count: {
        select: {
          transactionRequests: true,
          likes: true,
          comments: true
        }
      }
    },
    orderBy: {
      createdAt: "desc"
    },
    skip,
    take: limit
  });
  return {
    meta: {
      totalCount,
      currentPage: page,
      limit,
      totalPages: Math.ceil(totalCount / limit)
    },
    data: posts.map((post) => ({
      ...post,
      likesCount: post._count?.likes || 0,
      commentsCount: post._count?.comments || 0
    }))
  };
};
var getMyPosts = async (userId, page = 1, limit = 10) => {
  const skip = (page - 1) * limit;
  const [posts, totalCount] = await Promise.all([
    prisma_default.post.findMany({
      where: {
        authorId: userId
      },
      include: {
        author: {
          include: {
            userProfile: { select: { name: true, impactScore: true } },
            organizationProfile: { select: { orgName: true, impactScore: true } }
          }
        },
        _count: {
          select: {
            transactionRequests: true,
            likes: true,
            comments: true
          }
        }
      },
      orderBy: {
        createdAt: "desc"
      },
      skip,
      take: limit
    }),
    prisma_default.post.count({
      where: {
        authorId: userId
      }
    })
  ]);
  return {
    meta: {
      totalCount,
      currentPage: page,
      limit,
      totalPages: Math.ceil(totalCount / limit)
    },
    data: posts.map((post) => ({
      ...post,
      likesCount: post._count?.likes || 0,
      commentsCount: post._count?.comments || 0
    }))
  };
};
var getPostById = async (id, userId) => {
  const post = await prisma_default.post.findUnique({
    where: { id },
    include: {
      author: {
        include: {
          userProfile: {
            select: { name: true }
          },
          organizationProfile: {
            select: { orgName: true }
          }
        }
      },
      transactionRequests: {
        include: {
          actor: {
            include: {
              userProfile: {
                select: { name: true }
              },
              organizationProfile: {
                select: { orgName: true }
              }
            }
          }
        }
      },
      likes: {
        select: {
          userId: true,
          user: {
            include: {
              userProfile: { select: { name: true } },
              organizationProfile: { select: { orgName: true } }
            }
          }
        },
        take: 5
        // Show a few users who liked it
      }
    }
  });
  if (!post) {
    throw new AppError_default(httpStatus8.NOT_FOUND, "Post not found");
  }
  const isLikedByMe = userId ? post.likes.some((like) => like.userId === userId) : false;
  return {
    ...post,
    isLikedByMe
  };
};
var updatePost = async (id, userId, payload) => {
  const post = await prisma_default.post.findUnique({
    where: { id }
  });
  if (!post) {
    throw new AppError_default(httpStatus8.NOT_FOUND, "Post not found");
  }
  if (post.authorId !== userId) {
    throw new AppError_default(httpStatus8.FORBIDDEN, "You can only update your own posts");
  }
  const approvedTransaction = await prisma_default.transactionRequest.findFirst({
    where: {
      postId: id,
      status: "APPROVED"
    }
  });
  if (approvedTransaction) {
    throw new AppError_default(
      httpStatus8.BAD_REQUEST,
      "Cannot update post with approved transactions"
    );
  }
  const {
    id: _id,
    authorId: _authorId,
    createdAt: _createdAt,
    updatedAt: _updatedAt,
    commentsCount: _commentsCount,
    ...updateData
  } = payload;
  const result = await prisma_default.post.update({
    where: { id },
    data: updateData
  });
  return result;
};
var deletePost = async (id, userId) => {
  const post = await prisma_default.post.findUnique({
    where: { id }
  });
  if (!post) {
    throw new AppError_default(httpStatus8.NOT_FOUND, "Post not found");
  }
  if (post.authorId !== userId) {
    throw new AppError_default(httpStatus8.FORBIDDEN, "You can only delete your own posts");
  }
  if (post.status !== "AVAILABLE" && post.status !== "EXPIRED") {
    throw new AppError_default(
      httpStatus8.BAD_REQUEST,
      "Can only delete AVAILABLE or EXPIRED posts"
    );
  }
  const activeTransaction = await prisma_default.transactionRequest.findFirst({
    where: {
      postId: id,
      status: {
        in: ["PENDING", "APPROVED"]
      }
    }
  });
  if (activeTransaction) {
    throw new AppError_default(
      httpStatus8.BAD_REQUEST,
      "Cannot delete post with pending or approved transactions"
    );
  }
  await prisma_default.post.delete({
    where: { id }
  });
  return null;
};
var getAllPosts = async (query) => {
  const {
    searchTerm,
    category,
    type,
    sortBy = "createdAt",
    sortOrder = "desc",
    page = 1,
    limit = 10,
    userId
  } = query;
  const skip = (page - 1) * limit;
  const where = {
    status: "AVAILABLE"
  };
  if (searchTerm) {
    where.OR = [
      { title: { contains: searchTerm, mode: "insensitive" } },
      { description: { contains: searchTerm, mode: "insensitive" } }
    ];
  }
  if (category) {
    where.category = category;
  }
  if (type) {
    where.type = type;
  }
  const [posts, totalCount] = await Promise.all([
    prisma_default.post.findMany({
      where,
      orderBy: {
        [sortBy]: sortOrder
      },
      skip,
      take: limit,
      select: {
        id: true,
        title: true,
        description: true,
        imageUrls: true,
        type: true,
        category: true,
        quantity: true,
        status: true,
        likesCount: true,
        commentsCount: true,
        createdAt: true,
        estimatedShelfLife: true,
        author: {
          select: {
            id: true,
            profilePictureUrl: true,
            userProfile: {
              select: { name: true, impactScore: true }
            },
            organizationProfile: {
              select: { orgName: true, impactScore: true }
            }
          }
        }
      }
    }),
    prisma_default.post.count({ where })
  ]);
  const totalPages = Math.ceil(totalCount / limit);
  let likedPostIds = /* @__PURE__ */ new Set();
  if (userId && posts.length > 0) {
    const postIds = posts.map((p) => p.id);
    const userLikes = await prisma_default.like.findMany({
      where: {
        userId,
        postId: { in: postIds }
      },
      select: { postId: true }
    });
    likedPostIds = new Set(userLikes.map((l) => l.postId));
  }
  const postsWithLiked = posts.map((p) => ({
    ...p,
    isLikedByMe: likedPostIds.has(p.id)
  }));
  return {
    meta: {
      totalCount,
      currentPage: page,
      limit,
      totalPages,
      hasNextPage: page < totalPages
    },
    data: postsWithLiked
  };
};
var PostService = {
  createPost,
  getAllPosts,
  fetchAvailablePostsWithinRadius,
  getMyPosts,
  getPostById,
  updatePost,
  deletePost
};

// src/app/utils/cloudinary.ts
import { v2 as cloudinary } from "cloudinary";
import httpStatus9 from "http-status";
cloudinary.config({
  cloud_name: config_default.cloudinary_cloud_name,
  api_key: config_default.cloudinary_api_key,
  api_secret: config_default.cloudinary_api_secret
});
var uploadImageToCloudinary = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: process.env["CLOUDINARY_UPLOAD_FOLDER"] || "HelpShare",
        resource_type: "image"
      },
      (error, result) => {
        if (error) {
          return reject(
            new AppError_default(
              httpStatus9.INTERNAL_SERVER_ERROR,
              `Cloudinary upload failed: ${error.message}`
            )
          );
        }
        if (!result) {
          return reject(
            new AppError_default(
              httpStatus9.INTERNAL_SERVER_ERROR,
              "Cloudinary upload returned no result"
            )
          );
        }
        resolve(result.secure_url);
      }
    );
    stream.end(fileBuffer);
  });
};
var deleteImageFromCloudinary = async (publicId) => {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    throw new AppError_default(
      httpStatus9.INTERNAL_SERVER_ERROR,
      "Failed to delete image from Cloudinary"
    );
  }
};
var extractPublicIdFromUrl = (url) => {
  try {
    const regex = /\/upload\/(?:v\d+\/)?(.+)\.[a-z]+$/;
    const match = url.match(regex);
    return match?.[1] || null;
  } catch (error) {
    return null;
  }
};
var uploadMultipleImagesToCloudinary = async (fileBuffers) => {
  const uploadPromises = fileBuffers.map((buffer) => uploadImageToCloudinary(buffer));
  return Promise.all(uploadPromises);
};

// src/app/modules/post/post.controller.ts
var createPostHandler = catchAsync_default(async (req, res) => {
  const userId = req.user.userId;
  let imageUrls = [];
  const files = req.files;
  if (files && files.length > 0) {
    const fileBuffers = files.map((file) => file.buffer);
    imageUrls = await uploadMultipleImagesToCloudinary(fileBuffers);
  } else if (req.body.imageUrls) {
    imageUrls = Array.isArray(req.body.imageUrls) ? req.body.imageUrls : [req.body.imageUrls];
  }
  const result = await PostService.createPost({
    ...req.body,
    quantity: Number(req.body.quantity),
    latitude: Number(req.body.latitude),
    longitude: Number(req.body.longitude),
    authorId: userId,
    imageUrls
  });
  sendResponse_default(res, {
    statusCode: httpStatus10.CREATED,
    success: true,
    message: "Post created successfully",
    data: result
  });
});
var nearbyPostsHandler = catchAsync_default(async (req, res) => {
  const lat = parseFloat(req.query["lat"]);
  const lng = parseFloat(req.query["lng"]);
  const page = parseInt(req.query["page"]) || 1;
  const limit = parseInt(req.query["limit"]) || 10;
  const type = req.query["type"];
  if (isNaN(lat) || isNaN(lng)) {
    return sendResponse_default(res, {
      statusCode: httpStatus10.BAD_REQUEST,
      success: false,
      message: "Invalid latitude or longitude",
      data: null
    });
  }
  const result = await PostService.fetchAvailablePostsWithinRadius(
    lat,
    lng,
    page,
    limit,
    type
  );
  sendResponse_default(res, {
    statusCode: httpStatus10.OK,
    success: true,
    message: "Nearby posts fetched successfully",
    data: result.data,
    meta: result.meta
  });
});
var getMyPostsHandler = catchAsync_default(async (req, res) => {
  const userId = req.user.userId;
  const page = parseInt(req.query["page"]) || 1;
  const limit = parseInt(req.query["limit"]) || 10;
  const result = await PostService.getMyPosts(userId, page, limit);
  sendResponse_default(res, {
    statusCode: httpStatus10.OK,
    success: true,
    message: "My posts fetched successfully",
    data: result.data,
    meta: result.meta
  });
});
var getPostByIdHandler = catchAsync_default(async (req, res) => {
  const { id } = req.params;
  const userId = req.user?.userId;
  const result = await PostService.getPostById(id, userId);
  sendResponse_default(res, {
    statusCode: httpStatus10.OK,
    success: true,
    message: "Post details fetched successfully",
    data: result
  });
});
var updatePostHandler = catchAsync_default(async (req, res) => {
  const { id } = req.params;
  const userId = req.user.userId;
  const result = await PostService.updatePost(id, userId, req.body);
  sendResponse_default(res, {
    statusCode: httpStatus10.OK,
    success: true,
    message: "Post updated successfully",
    data: result
  });
});
var deletePostHandler = catchAsync_default(async (req, res) => {
  const { id } = req.params;
  const userId = req.user.userId;
  await PostService.deletePost(id, userId);
  sendResponse_default(res, {
    statusCode: httpStatus10.OK,
    success: true,
    message: "Post deleted successfully",
    data: null
  });
});
var getAllPostsHandler = catchAsync_default(async (req, res) => {
  const userId = req.user?.userId;
  const query = {
    searchTerm: req.query["searchTerm"] ? String(req.query["searchTerm"]) : void 0,
    category: req.query["category"],
    type: req.query["type"],
    sortBy: req.query["sortBy"] ? String(req.query["sortBy"]) : "createdAt",
    sortOrder: req.query["sortOrder"] === "asc" ? "asc" : "desc",
    page: req.query["page"] ? parseInt(req.query["page"]) : 1,
    limit: req.query["limit"] ? parseInt(req.query["limit"]) : 10,
    userId
  };
  const result = await PostService.getAllPosts(query);
  sendResponse_default(res, {
    statusCode: httpStatus10.OK,
    success: true,
    message: "Posts fetched successfully",
    data: result.data,
    meta: result.meta
  });
});
var PostController = {
  createPostHandler,
  getAllPostsHandler,
  nearbyPostsHandler,
  getMyPostsHandler,
  getPostByIdHandler,
  updatePostHandler,
  deletePostHandler
};

// src/app/modules/post/post.validation.ts
import { PostCategory as PostCategory2, PostType as PostType2 } from "@prisma/client";
import { z as z4 } from "zod";
var createPostSchema = z4.object({
  body: z4.object({
    type: z4.nativeEnum(PostType2, {
      error: (issue) => (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        issue.code === "invalid_type" && issue["received"] === "undefined" ? "Post type is required" : "Invalid post type"
      )
    }),
    category: z4.nativeEnum(PostCategory2, {
      error: (issue) => (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        issue.code === "invalid_type" && issue["received"] === "undefined" ? "Category is required" : "Invalid category"
      )
    }),
    quantity: z4.preprocess(
      (val) => typeof val === "string" ? Number(val) : val,
      z4.number({
        error: (issue) => issue.code === "invalid_type" && issue["received"] === "undefined" ? "Quantity is required" : "Invalid quantity"
      }).int().positive()
    ),
    latitude: z4.preprocess(
      (val) => typeof val === "string" ? Number(val) : val,
      z4.number({
        error: (issue) => issue.code === "invalid_type" && issue["received"] === "undefined" ? "Latitude is required" : "Invalid latitude"
      })
    ),
    longitude: z4.preprocess(
      (val) => typeof val === "string" ? Number(val) : val,
      z4.number({
        error: (issue) => issue.code === "invalid_type" && issue["received"] === "undefined" ? "Longitude is required" : "Invalid longitude"
      })
    ),
    imageUrls: z4.array(z4.string()).optional(),
    title: z4.string().optional(),
    description: z4.string().optional(),
    metadata: z4.record(z4.string(), z4.unknown()).optional()
  })
});
var updatePostSchema = z4.object({
  body: z4.object({
    title: z4.string().optional(),
    description: z4.string().optional(),
    quantity: z4.preprocess(
      (val) => typeof val === "string" ? Number(val) : val,
      z4.number().int().positive().optional()
    ),
    status: z4.enum(["AVAILABLE", "PENDING", "COMPLETED", "EXPIRED"]).optional()
  })
});
var PostValidation = {
  createPostSchema,
  updatePostSchema
};

// src/app/modules/post/post.route.ts
var router3 = Router3();
router3.get("/", optionalAuth_default, PostController.getAllPostsHandler);
router3.post(
  "/create",
  auth_default(),
  upload_default.array("images", 3),
  validateRequest_default(PostValidation.createPostSchema),
  PostController.createPostHandler
);
router3.get("/my-posts", auth_default(), PostController.getMyPostsHandler);
router3.get("/nearby", PostController.nearbyPostsHandler);
router3.get("/:id", optionalAuth_default, PostController.getPostByIdHandler);
router3.patch(
  "/:id",
  auth_default(),
  validateRequest_default(PostValidation.updatePostSchema),
  PostController.updatePostHandler
);
router3.delete("/:id", auth_default(), PostController.deletePostHandler);
var PostRoutes = router3;

// src/app/modules/review/review.route.ts
import { UserRole as UserRole6 } from "@prisma/client";
import { Router as Router4 } from "express";

// src/app/modules/review/review.controller.ts
import httpStatus12 from "http-status";

// src/app/modules/review/review.service.ts
import { TransactionStatus } from "@prisma/client";
import httpStatus11 from "http-status";
var createReview = async (payload) => {
  const transaction = await prisma_default.transactionRequest.findUnique({
    where: { id: payload.transactionId },
    include: { post: true }
  });
  if (!transaction) {
    throw new AppError_default(httpStatus11.NOT_FOUND, "Transaction not found");
  }
  if (transaction.status !== TransactionStatus.COMPLETED) {
    throw new AppError_default(
      httpStatus11.BAD_REQUEST,
      "Can only review completed transactions"
    );
  }
  const isAuthor = transaction.post.authorId === payload.reviewerId;
  const isActor = transaction.actorId === payload.reviewerId;
  if (!isAuthor && !isActor) {
    throw new AppError_default(
      httpStatus11.FORBIDDEN,
      "You were not part of this transaction"
    );
  }
  const existingReview = await prisma_default.review.findFirst({
    where: {
      reviewerId: payload.reviewerId,
      transactionId: payload.transactionId
    }
  });
  if (existingReview) {
    throw new AppError_default(
      httpStatus11.BAD_REQUEST,
      "You have already reviewed this transaction"
    );
  }
  const review = await prisma_default.$transaction(async (tx) => {
    const created = await tx.review.create({
      data: {
        reviewerId: payload.reviewerId,
        revieweeId: payload.revieweeId,
        transactionId: payload.transactionId,
        rating: payload.rating,
        comment: payload.comment ?? null
      }
    });
    const reviews = await tx.review.findMany({
      where: { revieweeId: payload.revieweeId }
    });
    const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
    const reviewee = await tx.user.findUnique({
      where: { id: payload.revieweeId },
      include: {
        userProfile: true,
        organizationProfile: true
      }
    });
    if (reviewee?.userProfile) {
      await tx.userProfile.update({
        where: { userId: payload.revieweeId },
        data: { impactScore: avgRating }
      });
    } else if (reviewee?.organizationProfile) {
      await tx.organizationProfile.update({
        where: { userId: payload.revieweeId },
        data: { impactScore: avgRating }
      });
    }
    return created;
  });
  return review;
};
var ReviewService = {
  createReview
};

// src/app/modules/review/review.controller.ts
var handleCreateReview = catchAsync_default(
  async (req, res) => {
    const { userId } = req.user;
    const result = await ReviewService.createReview({
      reviewerId: userId,
      ...req.body
    });
    sendResponse_default(res, {
      statusCode: httpStatus12.CREATED,
      success: true,
      message: "Review created successfully",
      data: result
    });
  }
);
var ReviewController = {
  handleCreateReview
};

// src/app/modules/review/review.validation.ts
import { z as z5 } from "zod";
var createReviewSchema = z5.object({
  body: z5.object({
    revieweeId: z5.string({
      error: (issue) => issue.code === "invalid_type" && issue["received"] === "undefined" ? "Reviewee ID is required" : "Invalid Reviewee ID"
    }),
    transactionId: z5.string({
      error: (issue) => issue.code === "invalid_type" && issue["received"] === "undefined" ? "Transaction ID is required" : "Invalid Transaction ID"
    }),
    rating: z5.number().min(1, "Rating must be at least 1").max(5, "Rating must be at most 5"),
    comment: z5.string().optional()
  })
});
var ReviewValidation = {
  createReviewSchema
};

// src/app/modules/review/review.route.ts
var router4 = Router4();
router4.post(
  "/create",
  auth_default(UserRole6.USER, UserRole6.ORGANIZATION),
  validateRequest_default(ReviewValidation.createReviewSchema),
  ReviewController.handleCreateReview
);
var ReviewRoutes = router4;

// src/app/modules/transaction/transaction.route.ts
import { UserRole as UserRole7 } from "@prisma/client";
import { Router as Router5 } from "express";

// src/app/modules/transaction/transaction.controller.ts
import httpStatus14 from "http-status";

// src/app/modules/transaction/transaction.service.ts
import { PostStatus, TransactionStatus as TransactionStatus2 } from "@prisma/client";
import httpStatus13 from "http-status";
var createTransactionRequest = async (userId, payload) => {
  const post = await prisma_default.post.findUnique({
    where: { id: payload.postId }
  });
  if (!post) {
    throw new AppError_default(httpStatus13.NOT_FOUND, "Post not found");
  }
  if (post.status !== PostStatus.AVAILABLE) {
    throw new AppError_default(
      httpStatus13.BAD_REQUEST,
      "Post is not available for request"
    );
  }
  if (post.authorId === userId) {
    throw new AppError_default(
      httpStatus13.FORBIDDEN,
      "You cannot transact on your own post"
    );
  }
  const result = await prisma_default.$transaction(async (tx) => {
    const transactionRequest = await tx.transactionRequest.create({
      data: {
        postId: payload.postId,
        actorId: userId,
        quantity: payload.quantity,
        message: payload.deliveryNote || null,
        status: TransactionStatus2.PENDING
      }
    });
    await tx.notification.create({
      data: {
        userId: post.authorId,
        message: "Someone requested your item.",
        type: "REQUEST",
        link: `/feed/${post.id}`
      }
    });
    return transactionRequest;
  });
  return result;
};
var getMyRequests = async (userId, page = 1, limit = 10) => {
  const skip = (page - 1) * limit;
  const totalCount = await prisma_default.transactionRequest.count({
    where: { actorId: userId }
  });
  const data = await prisma_default.transactionRequest.findMany({
    where: { actorId: userId },
    include: { post: true },
    orderBy: { createdAt: "desc" },
    skip,
    take: limit
  });
  return {
    meta: {
      totalCount,
      currentPage: page,
      limit,
      totalPages: Math.ceil(totalCount / limit)
    },
    data
  };
};
var getRequestsByPostId = async (userId, postId) => {
  const post = await prisma_default.post.findUnique({
    where: { id: postId }
  });
  if (!post) {
    throw new AppError_default(httpStatus13.NOT_FOUND, "Post not found");
  }
  if (post.authorId !== userId) {
    throw new AppError_default(
      httpStatus13.FORBIDDEN,
      "You are not authorized to view requests for this post"
    );
  }
  return prisma_default.transactionRequest.findMany({
    where: { postId },
    include: { actor: true },
    orderBy: { createdAt: "desc" }
  });
};
var respondToTransaction = async (userId, transactionId, status) => {
  const transactionRequest = await prisma_default.transactionRequest.findUnique({
    where: { id: transactionId },
    include: { post: true }
  });
  if (!transactionRequest) {
    throw new AppError_default(httpStatus13.NOT_FOUND, "Transaction request not found");
  }
  if (transactionRequest.post.authorId !== userId) {
    throw new AppError_default(
      httpStatus13.FORBIDDEN,
      "You are not authorized to respond to this transaction"
    );
  }
  if (transactionRequest.status !== TransactionStatus2.PENDING) {
    throw new AppError_default(
      httpStatus13.BAD_REQUEST,
      "Transaction is already processed"
    );
  }
  const result = await prisma_default.$transaction(async (tx) => {
    const updatedTransaction = await tx.transactionRequest.update({
      where: { id: transactionId },
      data: { status }
    });
    let postStatus = PostStatus.AVAILABLE;
    if (status === TransactionStatus2.APPROVED) {
      postStatus = PostStatus.PENDING_HANDOVER;
    } else if (status === TransactionStatus2.REJECTED) {
      postStatus = PostStatus.AVAILABLE;
    }
    await tx.post.update({
      where: { id: transactionRequest.postId },
      data: { status: postStatus }
    });
    const notificationMessage = status === TransactionStatus2.APPROVED ? "Your request was approved!" : "Your request was rejected.";
    await tx.notification.create({
      data: {
        userId: transactionRequest.actorId,
        message: notificationMessage,
        type: status,
        link: `/feed/${transactionRequest.postId}`
      }
    });
    return updatedTransaction;
  });
  return result;
};
var completeTransaction = async (userId, transactionId) => {
  const transactionRequest = await prisma_default.transactionRequest.findUnique({
    where: { id: transactionId },
    include: { post: true }
  });
  if (!transactionRequest) {
    throw new AppError_default(httpStatus13.NOT_FOUND, "Transaction request not found");
  }
  if (transactionRequest.status !== TransactionStatus2.APPROVED) {
    throw new AppError_default(
      httpStatus13.BAD_REQUEST,
      "Only approved transactions can be marked as completed"
    );
  }
  const isAuthor = transactionRequest.post.authorId === userId;
  const isActor = transactionRequest.actorId === userId;
  if (!isAuthor && !isActor) {
    throw new AppError_default(
      httpStatus13.FORBIDDEN,
      "You are not authorized to complete this transaction"
    );
  }
  const result = await prisma_default.$transaction(async (tx) => {
    const updated = await tx.transactionRequest.update({
      where: { id: transactionId },
      data: { status: TransactionStatus2.COMPLETED }
    });
    await tx.post.update({
      where: { id: transactionRequest.postId },
      data: { status: PostStatus.COMPLETED }
    });
    const notifyUserId = isAuthor ? transactionRequest.actorId : transactionRequest.post.authorId;
    await tx.notification.create({
      data: {
        userId: notifyUserId,
        message: "A transaction has been marked as completed.",
        type: "COMPLETED",
        link: `/feed/${transactionRequest.postId}`
      }
    });
    return updated;
  });
  return result;
};
var TransactionService = {
  createTransactionRequest,
  getMyRequests,
  getRequestsByPostId,
  respondToTransaction,
  completeTransaction
};

// src/app/modules/transaction/transaction.controller.ts
var handleCreateTransaction = catchAsync_default(
  async (req, res) => {
    const { userId } = req.user;
    const result = await TransactionService.createTransactionRequest(
      userId,
      req.body
    );
    sendResponse_default(res, {
      statusCode: httpStatus14.CREATED,
      success: true,
      message: "Transaction request created successfully",
      data: result
    });
  }
);
var handleGetMyRequests = catchAsync_default(
  async (req, res) => {
    const { userId } = req.user;
    const page = parseInt(req.query["page"]) || 1;
    const limit = parseInt(req.query["limit"]) || 10;
    const result = await TransactionService.getMyRequests(userId, page, limit);
    sendResponse_default(res, {
      statusCode: httpStatus14.OK,
      success: true,
      message: "My transaction requests retrieved successfully",
      meta: result.meta,
      data: result.data
    });
  }
);
var handleGetRequestsByPostId = catchAsync_default(
  async (req, res) => {
    const { userId } = req.user;
    const { postId } = req.params;
    const result = await TransactionService.getRequestsByPostId(
      userId,
      postId
    );
    sendResponse_default(res, {
      statusCode: httpStatus14.OK,
      success: true,
      message: "Post transaction requests retrieved successfully",
      data: result
    });
  }
);
var handleRespondTransaction = catchAsync_default(
  async (req, res) => {
    const { userId } = req.user;
    const { id } = req.params;
    const { status } = req.body;
    const result = await TransactionService.respondToTransaction(
      userId,
      id,
      status
    );
    sendResponse_default(res, {
      statusCode: httpStatus14.OK,
      success: true,
      message: `Transaction request ${status.toLowerCase()} successfully`,
      data: result
    });
  }
);
var handleCompleteTransaction = catchAsync_default(
  async (req, res) => {
    const { userId } = req.user;
    const { id } = req.params;
    const result = await TransactionService.completeTransaction(
      userId,
      id
    );
    sendResponse_default(res, {
      statusCode: httpStatus14.OK,
      success: true,
      message: "Transaction marked as completed successfully",
      data: result
    });
  }
);
var TransactionController = {
  handleCreateTransaction,
  handleGetMyRequests,
  handleGetRequestsByPostId,
  handleRespondTransaction,
  handleCompleteTransaction
};

// src/app/modules/transaction/transaction.validation.ts
import { TransactionStatus as TransactionStatus3 } from "@prisma/client";
import { z as z6 } from "zod";
var createTransactionSchema = z6.object({
  body: z6.object({
    postId: z6.string({
      error: (issue) => issue.code === "invalid_type" && issue["received"] === "undefined" ? "Post ID is required" : "Invalid Post ID"
    }),
    quantity: z6.string({
      error: (issue) => issue.code === "invalid_type" && issue["received"] === "undefined" ? "Quantity is required" : "Invalid quantity"
    }),
    deliveryNote: z6.string().optional()
  })
});
var updateTransactionStatusSchema = z6.object({
  body: z6.object({
    status: z6.nativeEnum(TransactionStatus3, {
      error: (issue) => (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        issue.code === "invalid_type" && issue["received"] === "undefined" ? "Status is required (APPROVED or REJECTED)" : "Invalid Status"
      )
    })
  })
});
var TransactionValidation = {
  createTransactionSchema,
  updateTransactionStatusSchema
};

// src/app/modules/transaction/transaction.route.ts
var router5 = Router5();
router5.post(
  "/request",
  auth_default(UserRole7.USER, UserRole7.ORGANIZATION),
  validateRequest_default(TransactionValidation.createTransactionSchema),
  TransactionController.handleCreateTransaction
);
router5.get(
  "/my-requests",
  auth_default(UserRole7.USER, UserRole7.ORGANIZATION),
  TransactionController.handleGetMyRequests
);
router5.get(
  "/post/:postId",
  auth_default(UserRole7.USER, UserRole7.ORGANIZATION),
  TransactionController.handleGetRequestsByPostId
);
router5.patch(
  "/:id/respond",
  auth_default(UserRole7.USER, UserRole7.ORGANIZATION),
  validateRequest_default(TransactionValidation.updateTransactionStatusSchema),
  TransactionController.handleRespondTransaction
);
router5.patch(
  "/:id/complete",
  auth_default(UserRole7.USER, UserRole7.ORGANIZATION),
  TransactionController.handleCompleteTransaction
);
var TransactionRoutes = router5;

// src/app/modules/user/user.route.ts
import { Router as Router6 } from "express";

// src/app/modules/user/user.controller.ts
import httpStatus16 from "http-status";

// src/app/modules/user/user.service.ts
import { UserRole as UserRole8 } from "@prisma/client";
import httpStatus15 from "http-status";
var updateMyProfile = async (userId, payload) => {
  const user = await prisma_default.user.findUnique({
    where: { id: userId }
  });
  if (!user) {
    throw new AppError_default(httpStatus15.NOT_FOUND, "User not found");
  }
  if (payload.profilePictureUrl) {
    await prisma_default.user.update({
      where: { id: userId },
      data: { profilePictureUrl: payload.profilePictureUrl }
    });
  }
  if (user.role === UserRole8.USER) {
    await prisma_default.userProfile.update({
      where: { userId },
      data: {
        ...payload.name && { name: payload.name },
        ...payload.latitude && { latitude: payload.latitude },
        ...payload.longitude && { longitude: payload.longitude }
      }
    });
  } else if (user.role === UserRole8.ORGANIZATION) {
    await prisma_default.organizationProfile.update({
      where: { userId },
      data: {
        ...payload.orgName && { orgName: payload.orgName },
        ...payload.latitude && { latitude: payload.latitude },
        ...payload.longitude && { longitude: payload.longitude },
        ...payload.establishedYear && { establishedYear: payload.establishedYear },
        ...payload.registrationNumber && { registrationNumber: payload.registrationNumber }
      }
    });
  } else if (user.role === UserRole8.ADMIN || user.role === UserRole8.SUPER_ADMIN) {
    await prisma_default.adminProfile.update({
      where: { userId },
      data: {
        ...payload.name && { name: payload.name }
      }
    });
  }
  return await prisma_default.user.findUnique({
    where: { id: userId },
    include: {
      userProfile: true,
      organizationProfile: true,
      adminProfile: true
    }
  });
};
var getPublicProfile = async (userId) => {
  const user = await prisma_default.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      role: true,
      status: true,
      profilePictureUrl: true,
      isVerified: true,
      createdAt: true,
      userProfile: {
        select: {
          name: true,
          impactScore: true,
          latitude: true,
          longitude: true
        }
      },
      organizationProfile: {
        select: {
          orgName: true,
          establishedYear: true,
          registrationNumber: true,
          impactScore: true,
          latitude: true,
          longitude: true
        }
      },
      adminProfile: {
        select: {
          name: true,
          department: true
        }
      }
    }
  });
  if (!user) {
    throw new AppError_default(httpStatus15.NOT_FOUND, "User not found");
  }
  return user;
};
var UserService = {
  updateMyProfile,
  getPublicProfile
};

// src/app/modules/user/user.controller.ts
var updateMyProfile2 = catchAsync_default(async (req, res) => {
  const { userId } = req.user;
  let payload = { ...req.body };
  if (req.file) {
    const imageUrl = await uploadImageToCloudinary(req.file.buffer);
    payload.profilePictureUrl = imageUrl;
  }
  const result = await UserService.updateMyProfile(userId, payload);
  sendResponse_default(res, {
    statusCode: httpStatus16.OK,
    success: true,
    message: "Profile updated successfully",
    data: result
  });
});
var updateProfilePicture = catchAsync_default(async (req, res) => {
  const { userId } = req.user;
  if (!req.file) {
    throw new AppError_default(httpStatus16.BAD_REQUEST, "Please upload a file");
  }
  const user = await prisma_default.user.findUnique({
    where: { id: userId },
    select: { profilePictureUrl: true }
  });
  if (user?.profilePictureUrl) {
    const publicId = extractPublicIdFromUrl(user.profilePictureUrl);
    if (publicId) {
      await deleteImageFromCloudinary(publicId);
    }
  }
  const imageUrl = await uploadImageToCloudinary(req.file.buffer);
  const result = await UserService.updateMyProfile(userId, {
    profilePictureUrl: imageUrl
  });
  sendResponse_default(res, {
    statusCode: httpStatus16.OK,
    success: true,
    message: "Profile picture updated successfully",
    data: result
  });
});
var deleteProfilePicture = catchAsync_default(async (req, res) => {
  const { userId } = req.user;
  const user = await prisma_default.user.findUnique({
    where: { id: userId },
    select: { profilePictureUrl: true }
  });
  if (!user?.profilePictureUrl) {
    throw new AppError_default(httpStatus16.NOT_FOUND, "No profile picture found");
  }
  const publicId = extractPublicIdFromUrl(user.profilePictureUrl);
  if (publicId) {
    await deleteImageFromCloudinary(publicId);
  }
  await prisma_default.user.update({
    where: { id: userId },
    data: { profilePictureUrl: null }
  });
  sendResponse_default(res, {
    statusCode: httpStatus16.OK,
    success: true,
    message: "Profile picture deleted successfully",
    data: null
  });
});
var getPublicProfile2 = catchAsync_default(async (req, res) => {
  const { id } = req.params;
  const result = await UserService.getPublicProfile(id);
  sendResponse_default(res, {
    statusCode: httpStatus16.OK,
    success: true,
    message: "Public profile retrieved successfully",
    data: result
  });
});
var UserController = {
  updateMyProfile: updateMyProfile2,
  updateProfilePicture,
  deleteProfilePicture,
  getPublicProfile: getPublicProfile2
};

// src/app/modules/user/user.validation.ts
import { z as z7 } from "zod";
var updateProfileSchema = z7.object({
  body: z7.object({
    name: z7.string().optional(),
    orgName: z7.string().optional(),
    latitude: z7.number().optional(),
    longitude: z7.number().optional(),
    profilePictureUrl: z7.string().optional(),
    establishedYear: z7.number().optional(),
    registrationNumber: z7.string().optional()
  })
});
var UserValidation = {
  updateProfileSchema
};

// src/app/modules/user/user.route.ts
import multer2 from "multer";
var upload2 = multer2({
  storage: multer2.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024
    // 5MB limit
  }
});
var router6 = Router6();
router6.patch(
  "/update-profile",
  auth_default(),
  upload2.single("profilePicture"),
  (req, _res, next) => {
    if (req.body.data) {
      req.body = JSON.parse(req.body.data);
    }
    next();
  },
  validateRequest_default(UserValidation.updateProfileSchema),
  UserController.updateMyProfile
);
router6.patch(
  "/profile-picture",
  auth_default(),
  upload2.single("file"),
  UserController.updateProfilePicture
);
router6.delete(
  "/profile-picture",
  auth_default(),
  UserController.deleteProfilePicture
);
router6.get(
  "/public-profile/:id",
  UserController.getPublicProfile
);
var UserRoutes = router6;

// src/app/modules/like/like.route.ts
import { Router as Router7 } from "express";

// src/app/modules/like/like.controller.ts
import httpStatus18 from "http-status";

// src/app/modules/like/like.service.ts
import httpStatus17 from "http-status";
var toggleLike = async (postId, userId) => {
  const post = await prisma_default.post.findUnique({
    where: { id: postId }
  });
  if (!post) {
    throw new AppError_default(httpStatus17.NOT_FOUND, "Post not found");
  }
  const existingLike = await prisma_default.like.findUnique({
    where: {
      postId_userId: {
        postId,
        userId
      }
    }
  });
  return await prisma_default.$transaction(async (tx) => {
    if (existingLike) {
      await tx.like.delete({
        where: {
          postId_userId: {
            postId,
            userId
          }
        }
      });
      const updatedPost = await tx.post.update({
        where: { id: postId },
        data: {
          likesCount: {
            decrement: 1
          }
        }
      });
      return { isLiked: false, likesCount: updatedPost.likesCount };
    } else {
      await tx.like.create({
        data: {
          postId,
          userId
        }
      });
      const updatedPost = await tx.post.update({
        where: { id: postId },
        data: {
          likesCount: {
            increment: 1
          }
        }
      });
      return { isLiked: true, likesCount: updatedPost.likesCount };
    }
  });
};
var LikeService = {
  toggleLike
};

// src/app/modules/like/like.controller.ts
var toggleLikeHandler = catchAsync_default(async (req, res) => {
  const { id: postId } = req.params;
  const userId = req.user.userId;
  const result = await LikeService.toggleLike(postId, userId);
  sendResponse_default(res, {
    statusCode: httpStatus18.OK,
    success: true,
    message: result.isLiked ? "Post liked" : "Post unliked",
    data: result
  });
});
var LikeController = {
  toggleLikeHandler
};

// src/app/modules/like/like.route.ts
var router7 = Router7();
router7.post(
  "/:id/like",
  auth_default(),
  LikeController.toggleLikeHandler
);
var LikeRoutes = router7;

// src/app/modules/comment/comment.route.ts
import { Router as Router8 } from "express";

// src/app/modules/comment/comment.controller.ts
import httpStatus20 from "http-status";

// src/app/modules/comment/comment.service.ts
import httpStatus19 from "http-status";
var createComment = async (payload) => {
  const { content, postId, userId, parentId } = payload;
  const post = await prisma_default.post.findUnique({
    where: { id: postId }
  });
  if (!post) {
    throw new AppError_default(httpStatus19.NOT_FOUND, "Post not found");
  }
  if (parentId) {
    const parentComment = await prisma_default.comment.findUnique({
      where: { id: parentId }
    });
    if (!parentComment) {
      throw new AppError_default(httpStatus19.NOT_FOUND, "Parent comment not found");
    }
    if (parentComment.parentId) {
      throw new AppError_default(
        httpStatus19.BAD_REQUEST,
        "Only 1-level deep replies are allowed (Comment -> Reply)"
      );
    }
  }
  return await prisma_default.$transaction(async (tx) => {
    const comment = await tx.comment.create({
      data: {
        content,
        postId,
        userId,
        parentId: parentId || null
      },
      include: {
        user: {
          include: {
            userProfile: { select: { name: true } },
            organizationProfile: { select: { orgName: true } }
          }
        }
      }
    });
    await tx.post.update({
      where: { id: postId },
      data: {
        commentsCount: {
          increment: 1
        }
      }
    });
    return comment;
  });
};
var getCommentsByPostId = async (postId) => {
  const comments = await prisma_default.comment.findMany({
    where: {
      postId,
      parentId: null
    },
    include: {
      user: {
        include: {
          userProfile: { select: { name: true } },
          organizationProfile: { select: { orgName: true } }
        }
      },
      replies: {
        include: {
          user: {
            include: {
              userProfile: { select: { name: true } },
              organizationProfile: { select: { orgName: true } }
            }
          }
        },
        orderBy: {
          createdAt: "asc"
        }
      }
    },
    orderBy: {
      createdAt: "desc"
    }
  });
  return comments;
};
var deleteComment = async (commentId, userId) => {
  const comment = await prisma_default.comment.findUnique({
    where: { id: commentId },
    include: { replies: true }
  });
  if (!comment) {
    throw new AppError_default(httpStatus19.NOT_FOUND, "Comment not found");
  }
  if (comment.userId !== userId) {
    throw new AppError_default(httpStatus19.FORBIDDEN, "You can only delete your own comments");
  }
  return await prisma_default.$transaction(async (tx) => {
    const repliesCount = comment.replies.length;
    await tx.comment.delete({
      where: { id: commentId }
    });
    await tx.post.update({
      where: { id: comment.postId },
      data: {
        commentsCount: {
          decrement: 1 + repliesCount
        }
      }
    });
    return { success: true };
  });
};
var CommentService = {
  createComment,
  getCommentsByPostId,
  deleteComment
};

// src/app/modules/comment/comment.controller.ts
var createCommentHandler = catchAsync_default(async (req, res) => {
  const { id: postId } = req.params;
  const userId = req.user.userId;
  const { content, parentId } = req.body;
  const result = await CommentService.createComment({
    content,
    postId,
    userId,
    parentId
  });
  sendResponse_default(res, {
    statusCode: httpStatus20.CREATED,
    success: true,
    message: "Comment added successfully",
    data: result
  });
});
var getCommentsHandler = catchAsync_default(async (req, res) => {
  const { id: postId } = req.params;
  const result = await CommentService.getCommentsByPostId(postId);
  sendResponse_default(res, {
    statusCode: httpStatus20.OK,
    success: true,
    message: "Comments fetched successfully",
    data: result
  });
});
var deleteCommentHandler = catchAsync_default(async (req, res) => {
  const { commentId } = req.params;
  const userId = req.user.userId;
  await CommentService.deleteComment(commentId, userId);
  sendResponse_default(res, {
    statusCode: httpStatus20.OK,
    success: true,
    message: "Comment deleted successfully",
    data: null
  });
});
var CommentController = {
  createCommentHandler,
  getCommentsHandler,
  deleteCommentHandler
};

// src/app/modules/comment/comment.route.ts
var router8 = Router8();
router8.post(
  "/:id/comment",
  auth_default(),
  CommentController.createCommentHandler
);
router8.get(
  "/:id/comments",
  CommentController.getCommentsHandler
);
router8.delete(
  "/comment/:commentId",
  auth_default(),
  CommentController.deleteCommentHandler
);
var CommentRoutes = router8;

// src/app/routes/index.ts
var router9 = Router9();
var moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes
  },
  {
    path: "/user",
    route: UserRoutes
  },
  {
    path: "/post",
    route: PostRoutes
  },
  {
    path: "/post",
    route: LikeRoutes
  },
  {
    path: "/post",
    route: CommentRoutes
  },
  {
    path: "/transaction",
    route: TransactionRoutes
  },
  {
    path: "/review",
    route: ReviewRoutes
  },
  {
    path: "/admin",
    route: AdminRoutes
  }
];
moduleRoutes.forEach((route) => router9.use(route.path, route.route));
var routes_default = router9;

// src/app.ts
var app = express();
app.set("trust proxy", 1);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
var allowedOrigins = [
  process.env.FRONTEND_URL || "http://localhost:3000",
  process.env.BACKEND_URL || "http://localhost:5000"
].filter(Boolean);
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      const isAllowed = allowedOrigins.includes(origin) || /^https:\/\/next-blog-client.*\.vercel\.app$/.test(origin) || /^https:\/\/.*\.vercel\.app$/.test(origin);
      if (isAllowed) {
        callback(null, true);
      } else {
        callback(new Error(`Origin ${origin} not allowed by CORS`));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Cookie"],
    exposedHeaders: ["Set-Cookie"]
  })
);
app.use(globalRateLimiter);
app.use("/api/v1", routes_default);
app.get("/", (_req, res) => {
  res.send("Welcome to HelpShare AI Backend!");
});
app.use(globalErrorHandler_default);
app.use((_req, res) => {
  res.status(404).json({
    success: false,
    message: "API Not Found",
    errorSources: [
      {
        path: _req.originalUrl,
        message: "API Not Found"
      }
    ]
  });
});
var app_default = app;

// src/index.ts
var index_default = app_default;
export {
  index_default as default
};
