/*
Navicat MySQL Data Transfer

Source Server         : 139.129.234.71（安装)
Source Server Version : 50628
Source Host           : 139.129.234.71:3306
Source Database       : dl

Target Server Type    : MYSQL
Target Server Version : 50628
File Encoding         : 65001

Date: 2017-06-02 01:18:55
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `t_link_role_menu`
-- ----------------------------
DROP TABLE IF EXISTS `t_link_role_menu`;
CREATE TABLE `t_link_role_menu` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `create_date` datetime DEFAULT NULL,
  `modify_date` datetime DEFAULT NULL,
  `role_id` bigint(20) DEFAULT NULL,
  `menu_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_link_role_menu
-- ----------------------------

-- ----------------------------
-- Table structure for `t_link_role_operate`
-- ----------------------------
DROP TABLE IF EXISTS `t_link_role_operate`;
CREATE TABLE `t_link_role_operate` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `create_date` datetime NOT NULL,
  `modify_date` datetime NOT NULL,
  `role_id` bigint(20) NOT NULL,
  `operate_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_link_role_operate
-- ----------------------------

-- ----------------------------
-- Table structure for `t_rabc_role`
-- ----------------------------
DROP TABLE IF EXISTS `t_rabc_role`;
CREATE TABLE `t_rabc_role` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `create_date` datetime NOT NULL,
  `modify_date` datetime NOT NULL,
  `name` varchar(255) NOT NULL,
  `value` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `system_role` int(11) NOT NULL,
  `priority` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_rabc_role
-- ----------------------------

-- ----------------------------
-- Table structure for `t_rbac_admin`
-- ----------------------------
DROP TABLE IF EXISTS `t_rbac_admin`;
CREATE TABLE `t_rbac_admin` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `create_date` datetime NOT NULL COMMENT ' 创建时间',
  `modify_date` datetime NOT NULL COMMENT '修改时间',
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `last_login_date` varchar(255) NOT NULL,
  `last_login_id` varchar(255) NOT NULL,
  `login_failure_count` varchar(255) NOT NULL,
  `locked_date` datetime DEFAULT NULL,
  `account_locked` int(11) NOT NULL,
  `account_enabled` int(11) NOT NULL,
  `supper_admin` int(11) NOT NULL,
  `dept_id` bigint(20) NOT NULL,
  `role_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_rbac_admin
-- ----------------------------

-- ----------------------------
-- Table structure for `t_rbac_dept`
-- ----------------------------
DROP TABLE IF EXISTS `t_rbac_dept`;
CREATE TABLE `t_rbac_dept` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `create_date` datetime NOT NULL,
  `modify_date` datetime NOT NULL,
  `priority` bigint(20) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `up_dept_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_rbac_dept
-- ----------------------------

-- ----------------------------
-- Table structure for `t_rbac_menu`
-- ----------------------------
DROP TABLE IF EXISTS `t_rbac_menu`;
CREATE TABLE `t_rbac_menu` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `create_date` datetime NOT NULL,
  `modify_date` datetime NOT NULL,
  `priority` bigint(20) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `menu_enum` varchar(255) NOT NULL,
  `menu_icon` varchar(255) DEFAULT NULL,
  `menu_no` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `up_menu_id` bigint(20) DEFAULT NULL,
  `operate_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_rbac_menu
-- ----------------------------

-- ----------------------------
-- Table structure for `t_rbac_operate`
-- ----------------------------
DROP TABLE IF EXISTS `t_rbac_operate`;
CREATE TABLE `t_rbac_operate` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `create_date` datetime NOT NULL,
  `modify_date` datetime NOT NULL,
  `priority` bigint(20) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `pattern` varchar(255) DEFAULT NULL,
  `html` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `diaplay_in_tool_bar` int(11) DEFAULT NULL,
  `menu_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_rbac_operate
-- ----------------------------
