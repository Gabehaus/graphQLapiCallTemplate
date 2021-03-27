const express = require("express")
const app = express()
const { graphqlHTTP } = require("express-graphql") //to create the server
const schema = require("./schema")

// const RootQuery = "query"
// const Mutation = "mutation"

// const UserType = new GraphQLObjectType({
//     name: "User",
//     fields: () => ({
//       id: { type: GraphQLInt },
//       firstName: { type: GraphQLString },
//       lastName: { type: GraphQLString },
//       email: { type: GraphQLString },
//       password: { type: GraphQLString },
//     }),
//   });

//   const RootQuery = new GraphQLObjectType({
//       name: "RootQueryType",
//       fields: {
//           getAllUsers: {
//               type: new GraphQLList(userType),
//               args: { id: { type: GraphQLInt}}
//         }
//       }
//   })

// const schema = new GraphQLSchema({ query: RootQuery, mutation: Mutation })

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true //this allows you to visualize all your queries
  })
) //graphql must be always be accessed through this endpoint

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`)
})
