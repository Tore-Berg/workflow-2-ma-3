import ApolloClient, { gql } from 'apollo-boost';


const getData = async () => {
  const client = new ApolloClient({
      uri: "https://noroff-wf2-ma3.herokuapp.com/graphql"
  });

  const response = await client.query({
      query: gql`{ 
            users(id: 5){
              username
              posts {
              title
              body
              }
          }
        }
      `,
  });
const users = response.data.users
renderUserData(users)
};

getData();

const renderUserData = (users) => {
  users.forEach(user => {
    user.posts.forEach(post => {
      console.log(post.title)
    })
  })
}