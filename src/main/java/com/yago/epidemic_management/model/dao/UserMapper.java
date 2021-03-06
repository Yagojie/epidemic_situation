package com.yago.epidemic_management.model.dao;

import com.yago.epidemic_management.model.pojo.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface UserMapper {
    int deleteByPrimaryKey(Integer userId);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(String userId);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);

    User selectByName(@Param("username") String username);

    User selectByMobile(@Param("mobile") String mobile);

    User selectLogin(@Param("mobile") String mobile, @Param("password") String md5Password);

    List<User> selectList();

    List<User> selectAdminList();

    int deleteUserByUserId(@Param("userId") String userId);

    int batchDeleteEgressUser(@Param("ids") String[] ids, @Param("status") Integer newStatus);
}
