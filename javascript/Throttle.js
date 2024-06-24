function teste() {
  console.log("Executei");
}

function throtleTeste() {
  let timeout = null;
  return () => {
    let result = null;
    if (!timeout) {
      result = teste();
      timeout = setTimeout(() => {
        timeout = null;
      }, 500);
    }

    return result;
  };
}

const thTest = throtleTeste();

thTest();
thTest();
thTest();
thTest();
thTest();
thTest();
thTest();
thTest();
thTest();
thTest();
thTest();
thTest();
thTest();
thTest();
thTest();
thTest();
thTest();
thTest();
thTest();
thTest();
thTest();
thTest();
thTest();
thTest();
