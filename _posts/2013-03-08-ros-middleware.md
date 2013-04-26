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


## Navigation

If having some troubles in the part of _[Setup and Configuration of the Navigation Stack on a Robot](http://www.ros.org/wiki/navigation/Tutorials/RobotSetup)_, you need to understand _Setup_ and _Configuration_.

Just as the tutorial says, it needs these parts:  

1. Transform Configuration (other transforms)
2. Sensor Information (sensor sources)
3. Odometry Information (odometry source)
4. Base Controller (base controller)
5. Mapping (map_server)


Then you should set up them one by one as their own example. Also, you can click as the following.  

1. [tf](http://www.ros.org/wiki/navigation/Tutorials/RobotSetup/TF)
2. [sensor](http://www.ros.org/wiki/navigation/Tutorials/RobotSetup/Sensors)
3. [odometry](http://www.ros.org/wiki/navigation/Tutorials/RobotSetup/Odom)
4. [map_server](http://www.ros.org/wiki/slam_gmapping/Tutorials/MappingFromLoggedData)

Perhaps the base controller is to use geometry_msgs/Twist depends on the "cmd_vel" topic. But I ignore this now!  

The all steps of the packages(stacks) are like this.  
    $ roscreate-pkg robot_setup_tf roscpp tf geometry_msgs
    $ roscd robot_setup_tf/src
    $ vim/emacs tf_broadcaster.cpp
    $ roscd robot_setup_tf
    $ vim CMakeLists.txt
then add  `rosbuild add excutable($(typename) $(packagename)/filename.cpp)`  
    $ rosmake

So, to create another is that:
    $ roscreate-pkg robot_setup_sensor roscpp sensor_msgs ||===> need sensor_msgs
    $ roscreate-pkg robot_setup_odometry roscpp nav_msgs tf ||===> need nav_msgs and tf
    $ vim (their) CMakeLists.txt
then add  `rosbuild add excutable($(typename) $(packagename)/filename.cpp)`  
    $ rosmake

Until you can `rosrun eachpackage eachexcutable` successfully.  

Then you can follow _Navigation Stack Setup_.  

You will see:  
    $ roscreate-pkg my_robot_name_2dnav move_base my_tf_configuration_dep my_odom_configuration_dep my_sensor_configuration_dep
To change them:
    $ roscreate-pkg my_robot_name_2dnav move_base robot_setup_tf robot_setup_sensor robot_setup_odometry roscpp
The same as the _my_robot_configuration.launch_.  
    <launch>
    <node pkg="sensor_node_pkg" type="sensor_node_type" name="sensor_node_name" output="screen">
    <param name="sensor_param" value="param_value" />
    </node>

    <node pkg="odom_node_pkg" type="odom_node_type" name="odom_node" output="screen">
    <param name="odom_param" value="param_value" />
    </node>

    <node pkg="transform_configuration_pkg" type="transform_configuration_type" name="transform_configuration_name" output="screen">
    <param name="transform_configuration_param" value="param_value" />
    </node>
    </launch>
Now your file is:  
    <launch>
    <node pkg="robot_setup_sensor" type="LaserScan" name="sensor_node_name" output="screen">
    <param name="sensor_param" value="param_value" />
    </node>

    <node pkg="robot_setup_odom" type="odom" name="odom_node" output="screen">
    <param name="odom_param" value="param_value" />
    </node>

    <node pkg="robot_setup_tf" type="tf_broadcaster" name="tf_broadcaster" output="screen">
    <param name="tf_broadcaster_param" value="param_value" />
    </node>

    <node pkg="robot_setup_tf" type="tf_listener" name="tf_listener" output="screen">
    <param name="tf_listener_param" value="param_value" />
    </node>
    </launch>

The rest of _Setup_ depend on how much you understand.  
Perhaps you will debug when you are running these commands.  
    $ roslaunch my_robot_configuration.launch
    $ roslaunch move_base.launch

Finally, I can run my_robot_name_2dnav but there is some troubles at the part of _[map](http://www.ros.org/wiki/slam_gmapping/Tutorials/MappingFromLoggedData)_. The file you obtain is *.pgm. You can run `gimp *.pgm` to check. 

If having some problems, you can talk with me by e-mail or leave comments.
    



{% include href.md %}
