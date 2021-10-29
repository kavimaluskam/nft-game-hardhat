const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Cliff Booth", "The Dude", "Hatchet Harry"],
    [
      "https://pbs.twimg.com/profile_images/1213590872857751553/PLJZ-svY_400x400.jpg",
      "https://cathleenfalsani.files.wordpress.com/2011/07/dude-robe.jpg",
      "https://sputnikreviews.files.wordpress.com/2010/05/hatchet-harry.jpg",
    ],
    [45, 250, 69],
    [10, 2, 5],
    "A random ape in pixels",
    "https://static01.nyt.com/images/2021/03/11/arts/11nft-auction-cryptopunks2/11nft-auction-cryptopunks2-jumbo.jpg",
    6965,
    15
  );

  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  // Get the value of the NFT's URI.
  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log("Token URI:", returnedTokenUri);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
