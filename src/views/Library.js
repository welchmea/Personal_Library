import ViewCard from "../components/ViewCard";

function Library() {

  return (
    <>
      <ViewCard 
      collection={'library'}
      title={"Track the books that you have read."}
      label={'Bookshelf'}
      />
    </>
  );
}

export default Library;
