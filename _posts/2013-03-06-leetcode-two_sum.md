---
layout: post
title: "leetcode >two_sum"
description: "Solution"
category: 
tags: [LeetCode]
---

## Two Sum

Given an array of integers, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

You may assume that each input would have exactly one solution.

Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2

General Solution: Small Test->4ms  Large Test->44ms
	vector<int> twoSum(vector<int> &numbers, int target) {
		// Start typing your C/C++ solution below
		// DO NOT write int main() function
		vector<int> result;
		for(int i=0;i<numbers.size();i++)
			for(int j=i+1;j<numbers.size();j++){
				if(numbers[i]+numbers[j]==target){
					result.push_back(i+1);
					result.push_back(j+1);
					break;
				}
			}
		return result;
	}

Improvement: Small Test->8ms  Large Test->12ms
	vector<int> twoSum2(vector<int> &numbers, int target) {
		// Start typing your C/C++ solution below
		// DO NOT write int main() function
		vector<int> result;
		bool flag=false;
		for(int i=0;i<numbers.size();i++)
			if(numbers[i]<target){
				for(int j=i+1;j<numbers.size();j++){
					if(numbers[i]+numbers[j]==target){
						result.push_back(i+1);
						result.push_back(j+1);
						flag=true;
						break;
					}
				}
				if(flag)
					break;
			}
		return result;
	}
{% include href.md %}
