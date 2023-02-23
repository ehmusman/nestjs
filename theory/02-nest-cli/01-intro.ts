/**
 * nest cli is a very powerfull tool that is used create the boilerplate for nest project
 * install cli => npm install -g @nest/cli
 * 
 * create project with nest cli => nest new appName
 * 
 * create a new module using nest command => nest generate module moduleName
 * => it will create a folder with moduleName and create a file with following name convention
 * => moduleName.module.ts  => messages.module.ts => this will be inside src/ folder
 * 
 * create controller inside created module and link it with existing files
 * => nest generate controller moduleName/controllerName --flat
 *  -- flat is used to create file in existing folder rather than creating a new folder with name controller and than creating file inside it.
 * => nest generate controller messages/messages --flat
 * => it'll create messages/messages.controller.ts  
 */