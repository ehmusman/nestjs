/**
 * nestjs/common => this package contains vast majority of functions, classes, that we need from nest
 * nestjs/platform-express => Its Lets Nest to use Express JS for handeling HTTP requests, we can also use fastify
 * reflect-metadata => Helps make decorators work
 * 
 * typescript => we write nest app with TS
 */

/**
 * Modules and Controllers are two important components of Nestjs
 * In Modules we combine all the controllers
 * and in Controllers the API End points are created using @Controller() Decorators as well as @GET() Decorator
 * @Controller("/api") is for higher level routes
 * and @GET("/user") is for low level routes
 * and the combined result is "/api/user" 
 */