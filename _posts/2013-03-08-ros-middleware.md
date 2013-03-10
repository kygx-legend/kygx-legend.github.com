---
layout: post
title: "ROS Middleware"
description: "Notes of Learning and Using ROS, Added simple tutorials."
category: 
tags: [ROS, Note, Tutorials]
---
_All is at Ubuntu 12.04._

## Simple tutorials for beginners

__Assuming that ROS is installed.__

set workspace:
	$ mkdir workspace
	$ cd workspace
	$ mkdir sandbox
	$ rosws set sandbox
	
confirmation:
	$ echo $ROS_PACKAGE_PATH

create package:
	$ roscd
	$ cd sandbox
	$ roscreate-pkg beginner_tutorials std_msgs rospy roscpp

building package:
	$ rosmake beginner_tutorials

run core server:
	$ roscore

run test node:
	$ rosrun turtlesim turtlesim_node

run teleoperation:
	$ rosrun turtlesim turtle_teleop_key

run topic pub:
	$ rostopic pub -1 /turtle1/command_velocity turtlesim/Velocity  -- 2.0  1.8

{% include href.md %}
