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

/**
 * Nest does the business logic or entertain the request 
 * for request/response it uses express or fastify
 */
/**
 * Some other NEST components are
 * 01- Pipe => Validate the data from incoming requests like we use JOI for request data validation or express-validator in case of Node-express app.
 * 02- Guard => Make sure the user is Authenticated, like we use middlewares for user authentications in case of express js.
 * 03- Controller => Route the request to the particular function
 * 04- Service => Run some business logic
 * 05- Repository => Access a database
 *  
 */