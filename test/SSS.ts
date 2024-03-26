import {
	time,
	loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";

describe("SSS", function() {
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

		const SSS = await hre.ethers.getContractFactory("SSS");
		const sss = await SSS.deploy();

		return { sss, owner, otherAccount, account3 };
	}

	describe("Deployment", function() {
		it("Reproduce", async function() {
			const { sss, owner, otherAccount, account3 } = await loadFixture(
				deployOneYearLockFixture
			);

			await sss
				.connect(owner)
				.transfer(account3.address, hre.ethers.parseEther("0.0001"));
			let x = await sss.balanceOf(account3.address);
			console.log("before transfer:", x);

			await sss
				.connect(account3)
				.transfer(account3.address, hre.ethers.parseEther("0.0001"));
			x = await sss.balanceOf(account3.address);
			console.log("after transfer:", x);
		});
	});
});
