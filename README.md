# Node ES6 + Sequelize ORM
Currently, NodeJS 6+ support class based approach. Normal nodejs application hardly use ES6 class based approach. 
This NodeJS app try to use ES6 class to modularize codebase. This application following folder based on certain module:
+ Controllers: This module primarly responsible for handling request and Response to client
+ migrations:  This module is mostly responsible for handling database schema changes over period of time. 
+ Store: This module mainly follow Store pattern, where there is glue between controller & model for data interaction.
+ models: This module mainly hide the database internal from developers, provide a wrapper around schema, allow seamless interaction with db without worrying about query language implementation of each. It provide high level api which allow us to access the database & schema without writing db based SQL Query.
