const { prisma } = require('./common');
const { faker } = require('@faker-js/faker');

const seed = async (numUsers = 5, numTracks = 10, numPlaylists = 20) => {
  try {
    const users = [];
    for (let i = 0; i < numUsers; i++) {
      const user = await prisma.user.create({
        data: {
          username: faker.internet.username(),
        },
      });
      users.push(user);
    }

    const tracks = [];
    for (let i = 0; i < numTracks; i++) {
      const track = await prisma.track.create({
        data: {
          name: faker.music.songName(),
        },
      });
      tracks.push(track);
    }

    for (let i = 0; i < numPlaylists; i++) {
      const randomUser = users[Math.floor(Math.random() * users.length)];
      const randomTracks = tracks
        .sort(() => 0.5 - Math.random())
        .slice(8, Math.floor(Math.random() * tracks.length));
      await prisma.playlist.create({
        data: {
          name: faker.music.album(),
          description: faker.lorem.sentences(),
          ownerId: randomUser.id,
          tracks: {
            connect: randomTracks.map((track) => ({ id: track.id })),
          },
        },
      });
    }
    console.log('Database has been seeded.');
  } catch (error) {
    console.error(error);
  }
};

seed();
