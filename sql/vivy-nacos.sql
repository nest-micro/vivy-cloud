/*
 Navicat Premium Data Transfer

 Source Server         : 127.0.0.1
 Source Server Type    : MySQL
 Source Server Version : 80027
 Source Host           : localhost:3306
 Source Schema         : vivy-nacos

 Target Server Type    : MySQL
 Target Server Version : 80027
 File Encoding         : 65001

 Date: 01/06/2023 15:30:44
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for config_info
-- ----------------------------
DROP TABLE IF EXISTS `config_info`;
CREATE TABLE `config_info` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT 'id',
  `data_id` varchar(255) COLLATE utf8_bin NOT NULL COMMENT 'data_id',
  `group_id` varchar(128) COLLATE utf8_bin DEFAULT NULL,
  `content` longtext COLLATE utf8_bin NOT NULL COMMENT 'content',
  `md5` varchar(32) COLLATE utf8_bin DEFAULT NULL COMMENT 'md5',
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  `src_user` text COLLATE utf8_bin COMMENT 'source user',
  `src_ip` varchar(50) COLLATE utf8_bin DEFAULT NULL COMMENT 'source ip',
  `app_name` varchar(128) COLLATE utf8_bin DEFAULT NULL,
  `tenant_id` varchar(128) COLLATE utf8_bin DEFAULT '' COMMENT '租户字段',
  `c_desc` varchar(256) COLLATE utf8_bin DEFAULT NULL,
  `c_use` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `effect` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `type` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `c_schema` text COLLATE utf8_bin,
  `encrypted_data_key` text COLLATE utf8_bin NOT NULL COMMENT '秘钥',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_configinfo_datagrouptenant` (`data_id`,`group_id`,`tenant_id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin COMMENT='config_info';

-- ----------------------------
-- Records of config_info
-- ----------------------------
BEGIN;
INSERT INTO `config_info` VALUES (1, 'vivy-config.yaml', 'DEFAULT_GROUP', '# Http 配置\nhttp:\n  axios:\n    timeout: 60000\n\n# Swagger 配置\nswagger:\n  enabled: true\n  title: vivy-cloud\n  description: Nest Micro / Nest Cloud\n  contact:\n    name: nest-micro\n    url: https://github.com/nest-micro\n    email: haiweilian@foxmail.com\n  license:\n    name: MIT\n    url: https://github.com/nest-micro/vivy-cloud/blob/main/LICENSE\n', '963c9a2666f52767d96ddbe68292f04d', '2023-04-17 12:23:25', '2023-05-21 08:01:16', 'nacos', '172.18.0.1', '', '', '', '', '', 'yaml', '', '');
INSERT INTO `config_info` VALUES (2, 'vivy-system.yaml', 'DEFAULT_GROUP', '# Mysql 配置\ndatasource:\n  defalut:\n    type: mysql\n    port: 3306\n    host: localhost\n    username: root\n    password: Aa@123456\n    database: vivy-cloud\n    synchronize: true\n    autoLoadEntities: true\n\n# Redis 配置\nredis:\n  defalut:\n    port: 6379\n    host: localhost\n    username: default\n    password: Aa@123456\n    db: 0\n', 'aaac54e040065506cbf7918255ef0f66', '2023-04-17 12:23:56', '2023-05-06 12:08:18', 'nacos', '172.18.0.1', '', '08bf469d-b01d-4409-867c-991660aca7ee', '', '', '', 'yaml', '', '');
INSERT INTO `config_info` VALUES (7, 'vivy-gen.yaml', 'DEFAULT_GROUP', '# Mysql 配置\ndatasource:\n  defalut:\n    type: mysql\n    port: 3306\n    host: localhost\n    username: root\n    password: Aa@123456\n    database: vivy-cloud\n    synchronize: true\n    autoLoadEntities: true\n\n# Redis 配置\nredis:\n  defalut:\n    port: 6379\n    host: localhost\n    username: default\n    password: Aa@123456\n    db: 0\n', 'aaac54e040065506cbf7918255ef0f66', '2023-04-20 04:37:58', '2023-05-06 12:08:28', 'nacos', '172.18.0.1', '', '08bf469d-b01d-4409-867c-991660aca7ee', '', '', '', 'yaml', '', '');
INSERT INTO `config_info` VALUES (8, 'vivy-file.yaml', 'DEFAULT_GROUP', '# Mysql 配置\ndatasource:\n  defalut:\n    type: mysql\n    port: 3306\n    host: localhost\n    username: root\n    password: Aa@123456\n    database: vivy-cloud\n    synchronize: true\n    autoLoadEntities: true\n\n# Redis 配置\nredis:\n  defalut:\n    port: 6379\n    host: localhost\n    username: default\n    password: Aa@123456\n    db: 0\n', 'aaac54e040065506cbf7918255ef0f66', '2023-04-20 04:37:58', '2023-05-06 12:08:40', 'nacos', '172.18.0.1', '', '08bf469d-b01d-4409-867c-991660aca7ee', '', '', '', 'yaml', '', '');
INSERT INTO `config_info` VALUES (9, 'vivy-auth.yaml', 'DEFAULT_GROUP', '# Mysql 配置\ndatasource:\n  defalut:\n    type: mysql\n    port: 3306\n    host: localhost\n    username: root\n    password: Aa@123456\n    database: vivy-cloud\n    synchronize: true\n    autoLoadEntities: true\n\n# Redis 配置\nredis:\n  defalut:\n    port: 6379\n    host: localhost\n    username: default\n    password: Aa@123456\n    db: 0\n', 'aaac54e040065506cbf7918255ef0f66', '2023-04-20 04:37:58', '2023-05-06 12:08:49', 'nacos', '172.18.0.1', '', '08bf469d-b01d-4409-867c-991660aca7ee', '', '', '', 'yaml', '', '');
INSERT INTO `config_info` VALUES (10, 'vivy-gateway.yaml', 'DEFAULT_GROUP', '# Mysql 配置\ndatasource:\n  defalut:\n    type: mysql\n    port: 3306\n    host: localhost\n    username: root\n    password: Aa@123456\n    database: vivy-cloud\n    synchronize: true\n    autoLoadEntities: true\n\n# Redis 配置\nredis:\n  defalut:\n    port: 6379\n    host: localhost\n    username: default\n    password: Aa@123456\n    db: 0\n\n# 网关转发规则配置\nproxy:\n  extras:\n    - timeout: 60000\n  routes:\n    - id: auth\n      uri: lb://vivy-auth\n      filters:\n        - name: RequestPathFilter\n          parameters:\n            strip: 1\n    - id: system\n      uri: lb://vivy-system\n      filters:\n        - name: RequestPathFilter\n          parameters:\n            strip: 1\n    - id: file\n      uri: lb://vivy-file\n      filters:\n        - name: RequestPathFilter\n          parameters:\n            strip: 1\n    - id: gen\n      uri: lb://vivy-gen\n      filters:\n        - name: RequestPathFilter\n          parameters:\n            strip: 1\n\n# 网关权限白名单规则配置\nauthWhites:\n  - /auth/login\n  - /auth/logout\n', '67c671f82c24feec8fdc043b7811499c', '2023-04-20 04:37:58', '2023-05-21 08:03:24', 'nacos', '172.18.0.1', '', '08bf469d-b01d-4409-867c-991660aca7ee', '', '', '', 'yaml', '', '');
COMMIT;

-- ----------------------------
-- Table structure for config_info_aggr
-- ----------------------------
DROP TABLE IF EXISTS `config_info_aggr`;
CREATE TABLE `config_info_aggr` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT 'id',
  `data_id` varchar(255) COLLATE utf8_bin NOT NULL COMMENT 'data_id',
  `group_id` varchar(128) COLLATE utf8_bin NOT NULL COMMENT 'group_id',
  `datum_id` varchar(255) COLLATE utf8_bin NOT NULL COMMENT 'datum_id',
  `content` longtext COLLATE utf8_bin NOT NULL COMMENT '内容',
  `gmt_modified` datetime NOT NULL COMMENT '修改时间',
  `app_name` varchar(128) COLLATE utf8_bin DEFAULT NULL,
  `tenant_id` varchar(128) COLLATE utf8_bin DEFAULT '' COMMENT '租户字段',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_configinfoaggr_datagrouptenantdatum` (`data_id`,`group_id`,`tenant_id`,`datum_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin COMMENT='增加租户字段';

-- ----------------------------
-- Records of config_info_aggr
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for config_info_beta
-- ----------------------------
DROP TABLE IF EXISTS `config_info_beta`;
CREATE TABLE `config_info_beta` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT 'id',
  `data_id` varchar(255) COLLATE utf8_bin NOT NULL COMMENT 'data_id',
  `group_id` varchar(128) COLLATE utf8_bin NOT NULL COMMENT 'group_id',
  `app_name` varchar(128) COLLATE utf8_bin DEFAULT NULL COMMENT 'app_name',
  `content` longtext COLLATE utf8_bin NOT NULL COMMENT 'content',
  `beta_ips` varchar(1024) COLLATE utf8_bin DEFAULT NULL COMMENT 'betaIps',
  `md5` varchar(32) COLLATE utf8_bin DEFAULT NULL COMMENT 'md5',
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  `src_user` text COLLATE utf8_bin COMMENT 'source user',
  `src_ip` varchar(50) COLLATE utf8_bin DEFAULT NULL COMMENT 'source ip',
  `tenant_id` varchar(128) COLLATE utf8_bin DEFAULT '' COMMENT '租户字段',
  `encrypted_data_key` text COLLATE utf8_bin NOT NULL COMMENT '秘钥',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_configinfobeta_datagrouptenant` (`data_id`,`group_id`,`tenant_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin COMMENT='config_info_beta';

-- ----------------------------
-- Records of config_info_beta
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for config_info_tag
-- ----------------------------
DROP TABLE IF EXISTS `config_info_tag`;
CREATE TABLE `config_info_tag` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT 'id',
  `data_id` varchar(255) COLLATE utf8_bin NOT NULL COMMENT 'data_id',
  `group_id` varchar(128) COLLATE utf8_bin NOT NULL COMMENT 'group_id',
  `tenant_id` varchar(128) COLLATE utf8_bin DEFAULT '' COMMENT 'tenant_id',
  `tag_id` varchar(128) COLLATE utf8_bin NOT NULL COMMENT 'tag_id',
  `app_name` varchar(128) COLLATE utf8_bin DEFAULT NULL COMMENT 'app_name',
  `content` longtext COLLATE utf8_bin NOT NULL COMMENT 'content',
  `md5` varchar(32) COLLATE utf8_bin DEFAULT NULL COMMENT 'md5',
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  `src_user` text COLLATE utf8_bin COMMENT 'source user',
  `src_ip` varchar(50) COLLATE utf8_bin DEFAULT NULL COMMENT 'source ip',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_configinfotag_datagrouptenanttag` (`data_id`,`group_id`,`tenant_id`,`tag_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin COMMENT='config_info_tag';

-- ----------------------------
-- Records of config_info_tag
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for config_tags_relation
-- ----------------------------
DROP TABLE IF EXISTS `config_tags_relation`;
CREATE TABLE `config_tags_relation` (
  `id` bigint NOT NULL COMMENT 'id',
  `tag_name` varchar(128) COLLATE utf8_bin NOT NULL COMMENT 'tag_name',
  `tag_type` varchar(64) COLLATE utf8_bin DEFAULT NULL COMMENT 'tag_type',
  `data_id` varchar(255) COLLATE utf8_bin NOT NULL COMMENT 'data_id',
  `group_id` varchar(128) COLLATE utf8_bin NOT NULL COMMENT 'group_id',
  `tenant_id` varchar(128) COLLATE utf8_bin DEFAULT '' COMMENT 'tenant_id',
  `nid` bigint NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`nid`),
  UNIQUE KEY `uk_configtagrelation_configidtag` (`id`,`tag_name`,`tag_type`),
  KEY `idx_tenant_id` (`tenant_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin COMMENT='config_tag_relation';

-- ----------------------------
-- Records of config_tags_relation
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for group_capacity
-- ----------------------------
DROP TABLE IF EXISTS `group_capacity`;
CREATE TABLE `group_capacity` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `group_id` varchar(128) COLLATE utf8_bin NOT NULL DEFAULT '' COMMENT 'Group ID，空字符表示整个集群',
  `quota` int unsigned NOT NULL DEFAULT '0' COMMENT '配额，0表示使用默认值',
  `usage` int unsigned NOT NULL DEFAULT '0' COMMENT '使用量',
  `max_size` int unsigned NOT NULL DEFAULT '0' COMMENT '单个配置大小上限，单位为字节，0表示使用默认值',
  `max_aggr_count` int unsigned NOT NULL DEFAULT '0' COMMENT '聚合子配置最大个数，，0表示使用默认值',
  `max_aggr_size` int unsigned NOT NULL DEFAULT '0' COMMENT '单个聚合数据的子配置大小上限，单位为字节，0表示使用默认值',
  `max_history_count` int unsigned NOT NULL DEFAULT '0' COMMENT '最大变更历史数量',
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_group_id` (`group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin COMMENT='集群、各Group容量信息表';

-- ----------------------------
-- Records of group_capacity
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for his_config_info
-- ----------------------------
DROP TABLE IF EXISTS `his_config_info`;
CREATE TABLE `his_config_info` (
  `id` bigint unsigned NOT NULL,
  `nid` bigint unsigned NOT NULL AUTO_INCREMENT,
  `data_id` varchar(255) COLLATE utf8_bin NOT NULL,
  `group_id` varchar(128) COLLATE utf8_bin NOT NULL,
  `app_name` varchar(128) COLLATE utf8_bin DEFAULT NULL COMMENT 'app_name',
  `content` longtext COLLATE utf8_bin NOT NULL,
  `md5` varchar(32) COLLATE utf8_bin DEFAULT NULL,
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `src_user` text COLLATE utf8_bin,
  `src_ip` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `op_type` char(10) COLLATE utf8_bin DEFAULT NULL,
  `tenant_id` varchar(128) COLLATE utf8_bin DEFAULT '' COMMENT '租户字段',
  `encrypted_data_key` text COLLATE utf8_bin NOT NULL COMMENT '秘钥',
  PRIMARY KEY (`nid`),
  KEY `idx_gmt_create` (`gmt_create`),
  KEY `idx_gmt_modified` (`gmt_modified`),
  KEY `idx_did` (`data_id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin COMMENT='多租户改造';

-- ----------------------------
-- Records of his_config_info
-- ----------------------------
BEGIN;
INSERT INTO `his_config_info` VALUES (10, 30, 'vivy-gateway.yaml', 'DEFAULT_GROUP', '', 'datasource:\n  defalut:\n    type: mysql\n    host: localhost\n    port: 3306\n    username: root\n    password: Aa@123456\n    database: vivy-cloud\n    synchronize: true\n    autoLoadEntities: true\n\nproxy:\n  routes:\n    - id: auth\n      uri: lb://vivy-auth\n      filters:\n        - name: RequestPathFilter\n          parameters:\n            strip: 1\n    - id: system\n      uri: lb://vivy-system\n      filters:\n        - name: RequestPathFilter\n          parameters:\n            strip: 1\n    - id: file\n      uri: lb://vivy-file\n      filters:\n        - name: RequestPathFilter\n          parameters:\n            strip: 1\n    - id: gen\n      uri: lb://vivy-gen\n      filters:\n        - name: RequestPathFilter\n          parameters:\n            strip: 1\n    - id: xxx\n      uri: http://172.0.0.1:4000\n      filters:\n        - name: RequestPathFilter\n          parameters:\n            strip: 1\n', '75714057b37a8b7f5d4f68932f526a4b', '2023-05-02 20:39:48', '2023-05-02 12:39:48', 'nacos', '172.18.0.1', 'U', '08bf469d-b01d-4409-867c-991660aca7ee', '');
INSERT INTO `his_config_info` VALUES (9, 31, 'vivy-auth.yaml', 'DEFAULT_GROUP', '', 'datasource:\n  defalut:\n    type: mysql\n    host: localhost\n    port: 3306\n    username: root\n    password: Aa@123456\n    database: vivy-cloud\n    synchronize: true\n    autoLoadEntities: true\n', '50190ab368c083e2a3a7666125d28a1f', '2023-05-06 16:36:01', '2023-05-06 08:36:01', 'nacos', '172.18.0.1', 'U', '08bf469d-b01d-4409-867c-991660aca7ee', '');
INSERT INTO `his_config_info` VALUES (2, 32, 'vivy-system.yaml', 'DEFAULT_GROUP', '', 'datasource:\n  defalut:\n    type: mysql\n    host: localhost\n    port: 3306\n    username: root\n    password: Aa@123456\n    database: vivy-cloud\n    synchronize: true\n    autoLoadEntities: true\n', '50190ab368c083e2a3a7666125d28a1f', '2023-05-06 16:37:36', '2023-05-06 08:37:36', 'nacos', '172.18.0.1', 'U', '08bf469d-b01d-4409-867c-991660aca7ee', '');
INSERT INTO `his_config_info` VALUES (7, 33, 'vivy-gen.yaml', 'DEFAULT_GROUP', '', 'datasource:\n  defalut:\n    type: mysql\n    host: localhost\n    port: 3306\n    username: root\n    password: Aa@123456\n    database: vivy-cloud\n    synchronize: true\n    autoLoadEntities: true\n', '50190ab368c083e2a3a7666125d28a1f', '2023-05-06 16:37:46', '2023-05-06 08:37:47', 'nacos', '172.18.0.1', 'U', '08bf469d-b01d-4409-867c-991660aca7ee', '');
INSERT INTO `his_config_info` VALUES (8, 34, 'vivy-file.yaml', 'DEFAULT_GROUP', '', 'datasource:\n  defalut:\n    type: mysql\n    host: localhost\n    port: 3306\n    username: root\n    password: Aa@123456\n    database: vivy-cloud\n    synchronize: true\n    autoLoadEntities: true\n', '50190ab368c083e2a3a7666125d28a1f', '2023-05-06 16:37:59', '2023-05-06 08:37:59', 'nacos', '172.18.0.1', 'U', '08bf469d-b01d-4409-867c-991660aca7ee', '');
INSERT INTO `his_config_info` VALUES (10, 35, 'vivy-gateway.yaml', 'DEFAULT_GROUP', '', 'datasource:\n  defalut:\n    type: mysql\n    host: localhost\n    port: 3306\n    username: root\n    password: Aa@123456\n    database: vivy-cloud\n    synchronize: true\n    autoLoadEntities: true\n\nproxy:\n  routes:\n    - id: auth\n      uri: lb://vivy-auth\n      filters:\n        - name: RequestPathFilter\n          parameters:\n            strip: 1\n    - id: system\n      uri: lb://vivy-system\n      filters:\n        - name: RequestPathFilter\n          parameters:\n            strip: 1\n    - id: file\n      uri: lb://vivy-file\n      filters:\n        - name: RequestPathFilter\n          parameters:\n            strip: 1\n    - id: gen\n      uri: lb://vivy-gen\n      filters:\n        - name: RequestPathFilter\n          parameters:\n            strip: 1\n', 'ceec084818a5cc74c1eaaa74cb50b062', '2023-05-06 16:38:34', '2023-05-06 08:38:34', 'nacos', '172.18.0.1', 'U', '08bf469d-b01d-4409-867c-991660aca7ee', '');
INSERT INTO `his_config_info` VALUES (10, 36, 'vivy-gateway.yaml', 'DEFAULT_GROUP', '', 'datasource:\n  defalut:\n    type: mysql\n    port: 3306\n    host: localhost\n    username: root\n    password: Aa@123456\n    database: vivy-cloud\n    synchronize: true\n    autoLoadEntities: true\n\nredis:\n  defalut:\n    port: 6379\n    host: localhost\n    username: default\n    password: Aa@123456\n    db: 0\n\nproxy:\n  routes:\n    - id: auth\n      uri: lb://vivy-auth\n      filters:\n        - name: RequestPathFilter\n          parameters:\n            strip: 1\n    - id: system\n      uri: lb://vivy-system\n      filters:\n        - name: RequestPathFilter\n          parameters:\n            strip: 1\n    - id: file\n      uri: lb://vivy-file\n      filters:\n        - name: RequestPathFilter\n          parameters:\n            strip: 1\n    - id: gen\n      uri: lb://vivy-gen\n      filters:\n        - name: RequestPathFilter\n          parameters:\n            strip: 1\n', '3c39d84415422ca2da1a164e6cbfe955', '2023-05-06 20:07:46', '2023-05-06 12:07:46', 'nacos', '172.18.0.1', 'U', '08bf469d-b01d-4409-867c-991660aca7ee', '');
INSERT INTO `his_config_info` VALUES (2, 37, 'vivy-system.yaml', 'DEFAULT_GROUP', '', 'datasource:\n  defalut:\n    type: mysql\n    port: 3306\n    host: localhost\n    username: root\n    password: Aa@123456\n    database: vivy-cloud\n    synchronize: true\n    autoLoadEntities: true\n\nredis:\n  defalut:\n    port: 6379\n    host: localhost\n    username: default\n    password: Aa@123456\n    db: 0\n', '6cd0fe00d39b325bb9b1db6d180339d2', '2023-05-06 20:08:18', '2023-05-06 12:08:18', 'nacos', '172.18.0.1', 'U', '08bf469d-b01d-4409-867c-991660aca7ee', '');
INSERT INTO `his_config_info` VALUES (7, 38, 'vivy-gen.yaml', 'DEFAULT_GROUP', '', 'datasource:\n  defalut:\n    type: mysql\n    port: 3306\n    host: localhost\n    username: root\n    password: Aa@123456\n    database: vivy-cloud\n    synchronize: true\n    autoLoadEntities: true\n\nredis:\n  defalut:\n    port: 6379\n    host: localhost\n    username: default\n    password: Aa@123456\n    db: 0\n', '6cd0fe00d39b325bb9b1db6d180339d2', '2023-05-06 20:08:28', '2023-05-06 12:08:28', 'nacos', '172.18.0.1', 'U', '08bf469d-b01d-4409-867c-991660aca7ee', '');
INSERT INTO `his_config_info` VALUES (8, 39, 'vivy-file.yaml', 'DEFAULT_GROUP', '', 'datasource:\n  defalut:\n    type: mysql\n    port: 3306\n    host: localhost\n    username: root\n    password: Aa@123456\n    database: vivy-cloud\n    synchronize: true\n    autoLoadEntities: true\n\nredis:\n  defalut:\n    port: 6379\n    host: localhost\n    username: default\n    password: Aa@123456\n    db: 0\n', '6cd0fe00d39b325bb9b1db6d180339d2', '2023-05-06 20:08:39', '2023-05-06 12:08:40', 'nacos', '172.18.0.1', 'U', '08bf469d-b01d-4409-867c-991660aca7ee', '');
INSERT INTO `his_config_info` VALUES (9, 40, 'vivy-auth.yaml', 'DEFAULT_GROUP', '', 'datasource:\n  defalut:\n    type: mysql\n    port: 3306\n    host: localhost\n    username: root\n    password: Aa@123456\n    database: vivy-cloud\n    synchronize: true\n    autoLoadEntities: true\n\nredis:\n  defalut:\n    port: 6379\n    host: localhost\n    username: default\n    password: Aa@123456\n    db: 0\n', '6cd0fe00d39b325bb9b1db6d180339d2', '2023-05-06 20:08:49', '2023-05-06 12:08:49', 'nacos', '172.18.0.1', 'U', '08bf469d-b01d-4409-867c-991660aca7ee', '');
INSERT INTO `his_config_info` VALUES (10, 41, 'vivy-gateway.yaml', 'DEFAULT_GROUP', '', '# Mysql 配置\ndatasource:\n  defalut:\n    type: mysql\n    port: 3306\n    host: localhost\n    username: root\n    password: Aa@123456\n    database: vivy-cloud\n    synchronize: true\n    autoLoadEntities: true\n\n# Redis 配置\nredis:\n  defalut:\n    port: 6379\n    host: localhost\n    username: default\n    password: Aa@123456\n    db: 0\n\n# 网关转发规则配置\nproxy:\n  routes:\n    - id: auth\n      uri: lb://vivy-auth\n      filters:\n        - name: RequestPathFilter\n          parameters:\n            strip: 1\n    - id: system\n      uri: lb://vivy-system\n      filters:\n        - name: RequestPathFilter\n          parameters:\n            strip: 1\n    - id: file\n      uri: lb://vivy-file\n      filters:\n        - name: RequestPathFilter\n          parameters:\n            strip: 1\n    - id: gen\n      uri: lb://vivy-gen\n      filters:\n        - name: RequestPathFilter\n          parameters:\n            strip: 1\n', 'ad5bcd6a87ad18a9e86db378ca0de002', '2023-05-09 21:53:22', '2023-05-09 13:53:20', 'nacos', '172.18.0.1', 'U', '08bf469d-b01d-4409-867c-991660aca7ee', '');
INSERT INTO `his_config_info` VALUES (1, 42, 'vivy-config.yaml', 'DEFAULT_GROUP', '', 'test: test\n', 'd27213d2ae2b24e8d1be0806469c564c', '2023-05-10 11:51:40', '2023-05-10 03:51:40', 'nacos', '172.18.0.1', 'U', '', '');
INSERT INTO `his_config_info` VALUES (10, 43, 'vivy-gateway.yaml', 'DEFAULT_GROUP', '', '# Mysql 配置\ndatasource:\n  defalut:\n    type: mysql\n    port: 3306\n    host: localhost\n    username: root\n    password: Aa@123456\n    database: vivy-cloud\n    synchronize: true\n    autoLoadEntities: true\n\n# Redis 配置\nredis:\n  defalut:\n    port: 6379\n    host: localhost\n    username: default\n    password: Aa@123456\n    db: 0\n\n# 网关转发规则配置\nproxy:\n  routes:\n    - id: auth\n      uri: lb://vivy-auth\n      filters:\n        - name: RequestPathFilter\n          parameters:\n            strip: 1\n    - id: system\n      uri: lb://vivy-system\n      filters:\n        - name: RequestPathFilter\n          parameters:\n            strip: 1\n    - id: file\n      uri: lb://vivy-file\n      filters:\n        - name: RequestPathFilter\n          parameters:\n            strip: 1\n    - id: gen\n      uri: lb://vivy-gen\n      filters:\n        - name: RequestPathFilter\n          parameters:\n            strip: 1\n\n# 网关权限白名单规则配置\nauthWhites:\n  - /user/login\n  - /user/logout\n  - /user/refresh\n', 'aa7c50cc5886784d4d84ae3b497dbed9', '2023-05-10 18:43:42', '2023-05-10 10:43:43', 'nacos', '172.18.0.1', 'U', '08bf469d-b01d-4409-867c-991660aca7ee', '');
INSERT INTO `his_config_info` VALUES (10, 44, 'vivy-gateway.yaml', 'DEFAULT_GROUP', '', '# Mysql 配置\ndatasource:\n  defalut:\n    type: mysql\n    port: 3306\n    host: localhost\n    username: root\n    password: Aa@123456\n    database: vivy-cloud\n    synchronize: true\n    autoLoadEntities: true\n\n# Redis 配置\nredis:\n  defalut:\n    port: 6379\n    host: localhost\n    username: default\n    password: Aa@123456\n    db: 0\n\n# 网关转发规则配置\nproxy:\n  routes:\n    - id: auth\n      uri: lb://vivy-auth\n      filters:\n        - name: RequestPathFilter\n          parameters:\n            strip: 1\n    - id: system\n      uri: lb://vivy-system\n      filters:\n        - name: RequestPathFilter\n          parameters:\n            strip: 1\n    - id: file\n      uri: lb://vivy-file\n      filters:\n        - name: RequestPathFilter\n          parameters:\n            strip: 1\n    - id: gen\n      uri: lb://vivy-gen\n      filters:\n        - name: RequestPathFilter\n          parameters:\n            strip: 1\n\n# 网关权限白名单规则配置\nauthWhites:\n  - /auth/login\n  - /auth/logout\n  - /auth/refresh\n', '8ea1f9cd6f9841f1144608a5c36b00ce', '2023-05-10 19:25:55', '2023-05-10 11:25:55', 'nacos', '172.18.0.1', 'U', '08bf469d-b01d-4409-867c-991660aca7ee', '');
INSERT INTO `his_config_info` VALUES (1, 45, 'vivy-config.yaml', 'DEFAULT_GROUP', '', '# Swagger 配置\nswagger:\n  enabled: true\n  title: vivy-cloud\n  description: Nest Micro / Nest Cloud\n  contact:\n    name: nest-micro\n    url: https://github.com/nest-micro\n    email: haiweilian@foxmail.com\n  license:\n    name: MIT\n    url: https://github.com/nest-micro/vivy-cloud/blob/main/LICENSE\n', '6e13a2c29308a10ef0b0cc5ca8f43014', '2023-05-21 16:01:18', '2023-05-21 08:01:16', 'nacos', '172.18.0.1', 'U', '', '');
INSERT INTO `his_config_info` VALUES (10, 46, 'vivy-gateway.yaml', 'DEFAULT_GROUP', '', '# Mysql 配置\ndatasource:\n  defalut:\n    type: mysql\n    port: 3306\n    host: localhost\n    username: root\n    password: Aa@123456\n    database: vivy-cloud\n    synchronize: true\n    autoLoadEntities: true\n\n# Redis 配置\nredis:\n  defalut:\n    port: 6379\n    host: localhost\n    username: default\n    password: Aa@123456\n    db: 0\n\n# 网关转发规则配置\nproxy:\n  routes:\n    - id: auth\n      uri: lb://vivy-auth\n      filters:\n        - name: RequestPathFilter\n          parameters:\n            strip: 1\n    - id: system\n      uri: lb://vivy-system\n      filters:\n        - name: RequestPathFilter\n          parameters:\n            strip: 1\n    - id: file\n      uri: lb://vivy-file\n      filters:\n        - name: RequestPathFilter\n          parameters:\n            strip: 1\n    - id: gen\n      uri: lb://vivy-gen\n      filters:\n        - name: RequestPathFilter\n          parameters:\n            strip: 1\n\n# 网关权限白名单规则配置\nauthWhites:\n  - /auth/login\n  - /auth/logout\n', '51b127026323d8d0efc79db177b7e48f', '2023-05-21 16:03:24', '2023-05-21 08:03:24', 'nacos', '172.18.0.1', 'U', '08bf469d-b01d-4409-867c-991660aca7ee', '');
COMMIT;

-- ----------------------------
-- Table structure for permissions
-- ----------------------------
DROP TABLE IF EXISTS `permissions`;
CREATE TABLE `permissions` (
  `role` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `resource` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `action` varchar(8) COLLATE utf8mb4_general_ci NOT NULL,
  UNIQUE KEY `uk_role_permission` (`role`,`resource`,`action`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of permissions
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `username` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `role` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  UNIQUE KEY `idx_user_role` (`username`,`role`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of roles
-- ----------------------------
BEGIN;
INSERT INTO `roles` VALUES ('nacos', 'ROLE_ADMIN');
COMMIT;

-- ----------------------------
-- Table structure for tenant_capacity
-- ----------------------------
DROP TABLE IF EXISTS `tenant_capacity`;
CREATE TABLE `tenant_capacity` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `tenant_id` varchar(128) COLLATE utf8_bin NOT NULL DEFAULT '' COMMENT 'Tenant ID',
  `quota` int unsigned NOT NULL DEFAULT '0' COMMENT '配额，0表示使用默认值',
  `usage` int unsigned NOT NULL DEFAULT '0' COMMENT '使用量',
  `max_size` int unsigned NOT NULL DEFAULT '0' COMMENT '单个配置大小上限，单位为字节，0表示使用默认值',
  `max_aggr_count` int unsigned NOT NULL DEFAULT '0' COMMENT '聚合子配置最大个数',
  `max_aggr_size` int unsigned NOT NULL DEFAULT '0' COMMENT '单个聚合数据的子配置大小上限，单位为字节，0表示使用默认值',
  `max_history_count` int unsigned NOT NULL DEFAULT '0' COMMENT '最大变更历史数量',
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_tenant_id` (`tenant_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin COMMENT='租户容量信息表';

-- ----------------------------
-- Records of tenant_capacity
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for tenant_info
-- ----------------------------
DROP TABLE IF EXISTS `tenant_info`;
CREATE TABLE `tenant_info` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT 'id',
  `kp` varchar(128) COLLATE utf8_bin NOT NULL COMMENT 'kp',
  `tenant_id` varchar(128) COLLATE utf8_bin DEFAULT '' COMMENT 'tenant_id',
  `tenant_name` varchar(128) COLLATE utf8_bin DEFAULT '' COMMENT 'tenant_name',
  `tenant_desc` varchar(256) COLLATE utf8_bin DEFAULT NULL COMMENT 'tenant_desc',
  `create_source` varchar(32) COLLATE utf8_bin DEFAULT NULL COMMENT 'create_source',
  `gmt_create` bigint NOT NULL COMMENT '创建时间',
  `gmt_modified` bigint NOT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_tenant_info_kptenantid` (`kp`,`tenant_id`),
  KEY `idx_tenant_id` (`tenant_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin COMMENT='tenant_info';

-- ----------------------------
-- Records of tenant_info
-- ----------------------------
BEGIN;
INSERT INTO `tenant_info` VALUES (1, '1', '08bf469d-b01d-4409-867c-991660aca7ee', 'vivy-cloud', 'vivy-cloud', 'nacos', 1681734116476, 1681734147507);
COMMIT;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `username` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(500) COLLATE utf8mb4_general_ci NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES ('nacos', '$2a$10$EuWPZHzz32dJN7jexM34MOeYirDdFAZm2kuWj7VEOJhhZkDrxfvUu', 1);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
