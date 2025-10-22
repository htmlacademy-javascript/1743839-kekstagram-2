const socialCommentTotalCount = document.querySelector('.social__comment-total-count');
const socialCommentTemplate = document.querySelector('.social__comment');
const socialComments = document.querySelector('.social__comments');
const commentsLoader = document.querySelector('.comments-loader');
const socialCommentShownCount = document.querySelector('.social__comment-shown-count');
const bigPictureCancel = document.querySelector('.big-picture__cancel');

const shownComments = function (numberOfLoopIterations, item) {
  socialComments.innerHTML = '';
  for (let i = 0; i < numberOfLoopIterations; i++) {
    const elementCom = socialCommentTemplate.cloneNode(true);
    const socialPicture = elementCom.querySelector('.social__picture');
    const socialText = elementCom.querySelector('.social__text');
    socialPicture.src = item.comments[i].avatar;
    socialPicture.alt = item.comments[i].name;
    socialText.textContent = item.comments[i].message;
    socialComments.appendChild(elementCom);
  }
};

const displayComments = function (item) {
  const quantityCommentsThePhoto = item.comments.length;
  const counterComment = 5;
  const steep = 5;
  let currentNumberOfComments = 0;
  let totalNumberOfComments = 0;
  let numberOfLoopIterations = 0;

  if(item.comments.length <= counterComment){
    commentsLoader.classList.add('hidden');
    currentNumberOfComments = quantityCommentsThePhoto;
    totalNumberOfComments = quantityCommentsThePhoto;
    numberOfLoopIterations = quantityCommentsThePhoto;
    socialCommentShownCount.textContent = currentNumberOfComments;
    socialCommentTotalCount.textContent = totalNumberOfComments;
  } else if(item.comments.length > counterComment){
    commentsLoader.classList.remove('hidden');
    currentNumberOfComments = counterComment;
    totalNumberOfComments = quantityCommentsThePhoto;
    numberOfLoopIterations = counterComment;
    socialCommentShownCount.textContent = currentNumberOfComments;
    socialCommentTotalCount.textContent = totalNumberOfComments;
    let counter = 0;

    const shownNextComments = function () {
      counter = counter + 1;
      const numberRemainingOfComments = totalNumberOfComments - counterComment * counter;
      if(numberRemainingOfComments > counterComment) {
        commentsLoader.classList.remove('hidden');
        currentNumberOfComments = counterComment + steep * counter;
        socialCommentShownCount.textContent = currentNumberOfComments;
        numberOfLoopIterations = currentNumberOfComments;
        shownComments(numberOfLoopIterations, item);
      } else {
        currentNumberOfComments = totalNumberOfComments;
        socialCommentShownCount.textContent = currentNumberOfComments;
        numberOfLoopIterations = currentNumberOfComments;
        commentsLoader.classList.add('hidden');
        shownComments(numberOfLoopIterations, item);
      }
    };

    commentsLoader.addEventListener('click', shownNextComments);

    const onKeydownEsc = function(evt){
      if (evt.key === 'Escape') {
        evt.preventDefault();
        commentsLoader.removeEventListener('click', shownNextComments);
        document.removeEventListener('keydown', onKeydownEsc);
      }
    };

    bigPictureCancel.addEventListener('click', ()=>{
      commentsLoader.removeEventListener('click', shownNextComments);
      document.removeEventListener('keydown', onKeydownEsc);
    });

    document.addEventListener('keydown', onKeydownEsc);
  }
  shownComments(numberOfLoopIterations, item);
};

export {displayComments};
