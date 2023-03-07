/**
 * we have to add an app level middleware for data validation
 *  app.useGlobalPipes(new ValidationPipe(
    {
      validatorPackage: require('@nestjs/class-validator'),
      transformerPackage: require('@nestjs/class-transformer')
    }
  ));
 on each controller we have to write the decorator function like Get, Post, to specify the request type of that end point of that controller.

 Param, Body these decorators are used to access the data that is comming through request.

 to create a custome validation we'll create a data transfer object "dto" folder inside that controller and have to create a file with name controller-type.dto.ts. 
 here we have to create a class and export that class. in class we have to write the attributes names that a request will have
 and for validation we just add that class as the type of body in controlle file. 
 class-validatore and class-transformer, these two packages are used for validation of types of each attribute
  */