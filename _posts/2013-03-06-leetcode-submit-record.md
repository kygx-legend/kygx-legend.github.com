---
layout: post
title: "leetcode submit record"
summary: "Solution"
category: LeetCode, algorithm
---

### 7->Regular Expression Matching
Implement regular expression matching with support for '.' and '*'.
'.' Matches any single character.
'*' Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).

The function prototype should be:
bool isMatch(const char *s, const char *p)

	Some examples:
	isMatch("aa","a") → false
	isMatch("aa","aa") → true
	isMatch("aaa","aa") → false
	isMatch("aa", "a*") → true
	isMatch("aa", ".*") → true
	isMatch("ab", ".*") → true
	isMatch("aab", "c*a*b") → true

Solution:
{% highlight c++ %}
bool isMatch(const char *s, const char *p) {
	if(*p==0)
		return *s==0;
	if(*(p+1)!='*'){
		if(*p==*s||*p=='.'&&*s!=0)
			return isMatch(s+1,p+1);
		return false;
	}
	else{
		while(*p==*s||*p=='.'&&*s!=0){
			if(isMatch(s,p+2))
				return true;
			s++;
		}
		return isMatch(s,p+2);
	}
}
{% endhighlight %}

### 6->Palindrome Number
Determine whether an integer is a palindrome. Do this without extra space.

Solution:
{% highlight c++ %}
bool isPalindrome(int x) {
	if(x>=0){
		vector<int> num;
		while(x!=0){
			num.push_back(x%10);
			x/=10;
		}	
		int n=num.size();
		for(int i=0;i<(n+1)/2;i++){
			if(num[i]!=num[n-i-1])
				return false;
		}
		return true;
	}
	else{
		return false;
	}
}
{% endhighlight %}

### 5->String To Integer
Implement atoi to convert a string to an integer.

Hint: Carefully consider all possible input cases. If you want a challenge, please do not see below and ask yourself what are the possible input cases.

Notes: It is intended for this problem to be specified vaguely (ie, no given input specs). You are responsible to gather all the input requirements up front.

Solution:
{% highlight c++ %}
int atoi(const char *str) {
	if(str==NULL)
		return 0;
	bool flag=false;// 符号标记
	int res=0;// 结果
	while(*str==' '){
		str++;
	}
	if(*str=='+'||*str=='-')
		flag=(*str++!='+');
	while(*str>='0'&&*str<='9'){
		if(2147483647/10>=res)
			res*=10;
		else
			return !flag?2147483647:-2147483648;
		if(2147483647-(*str-'0')>=res)
			res+=*str-'0';
		else
			return !flag?2147483647:-2147483648;
		str++;
	}
	return flag?0-res:res; 
}
{% endhighlight %}

### 4->Reverse Integer
Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321

Solution:
{% highlight c++ %}
int reverse(int x) {
	int result=0;
	while(x!=0){
		result=result*10+x%10;
		x=x/10;
	}
}
{% endhighlight %}

### 3->Add Two Numbers
You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8

Solution:
{% highlight c++ %}
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
{% endhighlight %}

### 2->Longest Substring Without Repeating Characters

Given a string, find the length of the longest substring without repeating characters. For example, the longest substring without repeating letters for "abcabcbb" is "abc", which the length is 3. For "bbbbb" the longest substring is "b", with the length of 1.

General Solution: Small Test->ms  Large Test->ms
{% highlight c++ %}
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
{% endhighlight %}

Improvement:
__max_len[i]=min(max_len[i-1]+1,i-position[i]);position[i] represents the previous position of the letter.
{% highlight c++ %}
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
{% endhighlight %}

### 1->Two Sum

Given an array of integers, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

You may assume that each input would have exactly one solution.

Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2

General Solution: Small Test->4ms  Large Test->44ms
{% highlight c++ %}
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
{% endhighlight %}

Improvement: Small Test->8ms  Large Test->12ms
{% highlight c++ %}
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
{% endhighlight %}
{% include href.md %}

