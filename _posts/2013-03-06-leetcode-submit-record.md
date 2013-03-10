---
layout: post
title: "leetcode submit record"
description: "Solution"
category: 
tags: [LeetCode]
---

## 3->Add Two Numbers
You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8

Solution:
	ListNode *addTwoNumbers(ListNode *l1, ListNode *l2) {
		if(l1==NULL&&l2==NULL)
			return NULL;
		ListNode *result;
		ListNode *sum;
		ListNode *p1,*p2;
		sum=result;
		p1=l1;
		p2=l2;
		int tmp=0,carry=0;
		while(p1!=NULL&&p2!=NULL){
			tmp=(p1->val+p2->val+carry)%10;
			carry=(p1->val+p2->val+carry)/10;
			sum->next=new ListNode(tmp);	
			sum=sum->next;
			p1=p1->next;
			p2=p2->next;
		}
		while(p1!=NULL){
			tmp=(p1->val+carry)%10;
			carry=(p1->val+carry)/10;
			sum->next=new ListNode(tmp);	
			sum=sum->next;
			p1=p1->next;
		}
		while(p2!=NULL){
			tmp=(p2->val+carry)%10;
			carry=(p2->val+carry)/10;
			sum->next=new ListNode(tmp);	
			sum=sum->next;
			p2=p2->next;
		}
		if(carry)
			sum->next=new ListNode(carry);	
		return result->next;
	}

## 2->Longest Substring Without Repeating Characters

Given a string, find the length of the longest substring without repeating characters. For example, the longest substring without repeating letters for "abcabcbb" is "abc", which the length is 3. For "bbbbb" the longest substring is "b", with the length of 1.

General Solution: Small Test->ms  Large Test->ms
	bool isused[26];
	int lengthOfLongestSubstring(string s) {
		if(s.length()==0)
			return 0;
		memset(isused,false,sizeof(isused));	
		int result=1;
		for(int i=0;i<s.length();i++){
			isused[s[i]-'a']=true;
			for(int j=i+1;j<s.length();j++){
				if(isused[s[j]-'a']){
					if(j-i>result)
						result=j-i;
					break;
				}
				else
					isused[s[j]-'a']=true;
				if(j==s.length()-1){
					if(j-i+1>result)
						result=j-i+1;
				}
			}
			memset(isused,false,sizeof(isused));	
		}
		return result;
	}

Improvement:
__max_len[i]=min(max_len[i-1]+1,i-position[i]);position[i] represents the previous position of the letter.
	int position[26];
	int lengthOfLongestSubstring2(string s){
		if(s.length()==0)
			return 0;
		memset(position,-1,sizeof(position));
		int *max_len=new int[s.length()];
		position[s[0]-'a']=0;
		max_len[0]=1;
		int max=1;
		for(int i=1;i<s.length();i++){
			if(position[s[i]-'a']!=-1)
				max_len[i]=min(max_len[i-1]+1,i-position[s[i]-'a']);
			else
				max_len[i]=max_len[i-1]+1;
			max=max>max_len[i]?max:max_len[i];
			position[s[i]-'a']=i;
		}
		return max;
	}

## 1->Two Sum

Given an array of integers, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

You may assume that each input would have exactly one solution.

Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2

General Solution: Small Test->4ms  Large Test->44ms
	vector<int> twoSum(vector<int> &numbers, int target) {
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
