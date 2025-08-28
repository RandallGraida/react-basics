export default function GetImageUrl(person) {
  return (
    `/images/${person.imageId}.jpg`
  );
}

/**
export default function GetImageUrl(person) {
  return (
    <img
      src=`/images/{person.imageId}.jpg` 
    />
  );
}
 */