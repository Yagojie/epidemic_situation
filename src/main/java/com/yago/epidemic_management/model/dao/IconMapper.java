package com.yago.epidemic_management.model.dao;

import com.yago.epidemic_management.model.pojo.Icon;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface IconMapper {
    int deleteByPrimaryKey(Integer inconId);

    int insert(Icon record);

    int insertSelective(Icon record);

    Icon selectByPrimaryKey(Integer inconId);

    int updateByPrimaryKeySelective(Icon record);

    int updateByPrimaryKey(Icon record);

    Icon selectByUserId(Integer userId);

    int updateActivityByuserId(@Param("userId") Integer userId);
}
