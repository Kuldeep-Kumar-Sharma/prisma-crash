import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //Create User
  // const user = await prisma.user.create({
  //     data: {
  //         name: 'John',
  //         email: 'John@unsc.in'
  //     }
  // });
  // console.log(user);
  // Get All users
  // const users = await prisma.user.findMany();
  // console.log(users);
  //Create article and associate it with user
  // const article = await prisma.article.create({
  //     data: {
  //         title: 'John First Article',
  //         body: 'John is thinking',
  //         author: {
  //             connect: {
  //                 id: 1,
  //             },
  //         },
  //     },
  // });
  // console.log(article);
  // Get All Articles
  //   const articles = await prisma.article.findMany();
  //   console.log(articles);
  //Create user and article and associate them
  // const user = await prisma.user.create({
  //     data: {
  //         name: 'sara',
  //         email: 'sara@unsc.in',
  //         articles: {
  //             create: {
  //                 title: 'JK',
  //                 body: 'jk is sarah article'
  //             }
  //         }
  //   }
  // });
  // console.log(user);
  // Create another article
  //   const article2 = await prisma.article.create({
  //       data: {
  //           title: 'Sarah Second Article',
  //           body: 'Sarah is thinking',
  //           author: {
  //               connect: {
  //                   id: 2,
  //               },
  //           },
  //       },
  //   });
  //   console.log(article2);
  //Loop over users articles
  // const users = await prisma.user.findMany({
  //     include: {
  //      articles: true,
  //  }
  // });
  // users.forEach((user) => {
  //     console.log(`User: ${user.name}, Email: ${user.email}`);
  //     console.log(`Articles:`);
  //     user.articles.forEach((article) => {
  //         console.log(`- Title: ${article.title}, Body: ${article.body}`);
  //     });
  //     console.log('\n');
  // });
  // Update data
  // const user = await prisma.user.update({
  //     where: {
  //         id: 1,
  //     },
  //     data: {
  //         name: 'John updated',
  //     },
  // });
  // console.log(user);
  //Remove data
  const article = await prisma.article.delete({
    where: {
      id: 2,
    },
  });
  console.log(article);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
