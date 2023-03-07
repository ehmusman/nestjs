/**
 * services
 * 01- its a class, 02- first place to implement all the business logic.
 * 03- Uses one or more repositories to find or store data
 * 
 * Repositories.
 * 01- its a class, 02- first place to put storage related logic
 * 03- Usually ends up being a TypeORM entity, a Mongoose schema or similar
 * 
 * Both have same methods names to perform any task
 */

/**
 * Nest cli has commands to automatically generate the services and similar commands to generate the repositories. 
 * 
 * for starting purpose, lets start to create it from scratch.
 */

/**
 * to create a services, import the repository to service file.
 * create a new service class and initiate the instance of repository in constructor function
 * By doing this, this service will create a dependency for its self.
 * We'll learn dependency injection later. for now keep in mind that we dont have to do this is production
 */

/**
 * for error handeling nest already provide a lot of  error throw classes like
 * 01- NotFoundException
 * 02- unAuthorize etc.
 */


/**
 * Dependency Injection
 * inversion of control
 * its means that classes should not create instane of any other class. this create a dependency for that class.
 */

/**
 * in dependency injection the classes that will be dependency of other classes and decorator is added on the toop of class @Injectable()
 * this will create the instance of that class and serve that single instance to every where there is a need of that instance
 * 
 * after that we add a provider key in Module to us these dependencies injection
  providers: [MessagesRepository, MessagesService]
 * 
 */