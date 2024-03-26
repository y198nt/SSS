import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";

describe("Lock", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployOneYearLockFixture() {
    const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    const ONE_GWEI = 1_000_000_000;

    const lockedAmount = ONE_GWEI;
    const unlockTime = (await time.latest()) + ONE_YEAR_IN_SECS;

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount, account3] = await hre.ethers.getSigners();

    const Lock = await hre.ethers.getContractFactory("SSS");
    const lock = await Lock.deploy();

    return { lock, owner, otherAccount, account3 };
  }

  describe("Deployment", function () {
    it("Should set the right unlockTime", async function () {
      const { lock,owner,otherAccount, account3 } = await loadFixture(
        deployOneYearLockFixture
      );
      await lock.connect(owner).transfer(account3.address, hre.ethers.parseEther("0.6"));
      let x = await lock.balanceOf(account3.address)
      console.log(x,"truoc khi chuyen")//truoc khi chuyen
      await lock.connect(account3).transfer(account3.address, hre.ethers.parseEther("0.1"));
      x = await lock.balanceOf(account3.address)
      console.log(x,"sau khi chuyen")
  });  

});
});
