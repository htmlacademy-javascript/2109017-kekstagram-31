function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomArray(array) {
  return array[generateRandomNumber(0, array.length - 1)];
}

function generatePhoto() {
  const id = generateRandomNumber(1, 25);
  const url = `photos/${id}.jpg`;
  const description = 'Описание фотографии';
  const likes = generateRandomNumber(15, 200);
  const comments = [];

  for (let i = 0; i < generateRandomNumber(0, 30); i++) {
    const commentId = generateRandomNumber(1, 1000);
    const avatar = `img/avatar-${generateRandomNumber(1, 6)}.svg`;
    const message = generateRandomArray([
      'Всё отлично!',
      'В целом всё неплохо. Но не всё.',
      'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
      'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
      'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
      'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
    ]);
    const name = generateRandomArray(['Алина', 'Иван', 'Екатирина', 'Алексей', 'Татьяна', 'Егор']);

    comments.push({
      id: commentId,
      avatar: avatar,
      message: message,
      name: name
    });
  }

  return {
    id: id,
    url: url,
    description: description,
    likes: likes,
    comments: comments
  };
}

function generatePhotos() {
  const photos = [];

  for (let i = 0; i < 25; i++) {
    photos.push(generatePhoto());
  }

  return photos;
}

// console.log(generatePhotos());

generatePhotos();
