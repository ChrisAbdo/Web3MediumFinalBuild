const hre = require("hardhat");

async function main() {
  const Medium = await hre.ethers.getContractFactory("Medium");
  const medium = await Medium.deploy("Web3Me", "WEB3ME", "1000000000000000000");

  await medium.deployed();

  console.log("Web3Me deployed :", medium.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
