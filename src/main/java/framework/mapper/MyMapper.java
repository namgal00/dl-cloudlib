package  framework.mapper;

import java.util.List;
import java.util.Map;

import tk.mybatis.mapper.common.Mapper;
import tk.mybatis.mapper.common.MySqlMapper;

/**
 * 
 * @ClassName: MyMapper
 * @Description: 通用mapper<br/>
 *               因为使用mysql数据库 ，所以集成了mysql的mapper
 * @author: jinzhaopo
 * @version: V1.0.0-SNAPSHOT
 * @param <T>
 * @date: 2017年5月14日 上午10:49:45
 */
public interface MyMapper<T> extends Mapper<T>, MySqlMapper<T> {
	/**
	 * 获取表中的下一个id<br/>
	 * 由于mycat和mapper整合的时候ID主键策略有问题<br/>
	 * 所以先用这个来代替
	 * 
	 * @return
	 */
	Long selectNextId();

	/**
	 * 
	 * @Title: getListByXml
	 * @Description: 工具XML进行查询
	 * @param filterParams
	 *            查询的条件
	 * @return
	 * @return: List
	 */
	List getListByXml(Map<String, Object> filterParams);
}
