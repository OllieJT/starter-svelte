<section>
	<h3>Table Time!</h3>
	<p>
		HTML tables used to be the backbone of design, today they are back to their normal use.
		Given that data powers our world we should (re)discover what features HTML tables
		provide and then and only then turn to libraries to help us present data in a tabular
		manner. Understand that if we want to interact with data we call that a <em>datagrid</em
		>
		which is a different thing all together. For now datagrids are not native in HTML, but libraries
		like
		<a href="https://handsontable.com">Handsontable</a>
		and <a href="https://zinggrid.com">ZingGrid</a>
		can certainly address that.
	</p>
	<table style="border: 1px solid black">
		<caption>Class Schedule</caption>
		<colgroup>
			<col style="width: 150px;" />
			<col style="width: 100px;" />
			<col style="width: 100px;" />
			<col style="width: 100px; background-color:#97DB9A;" />
			<col />
			<col style="width: 100px;" />
			<col span="2" style="width: 50px; background-color: #97DB9A" />
		</colgroup>
		<thead>
			<tr>
				<td rowspan="2">&nbsp;</td>
				<td colspan="5" style="text-align: center">Weekdays</td>
				<td colspan="2">Weekend</td>
			</tr>
			<tr>
				<th>Mon</th>
				<th>Tues</th>
				<th>Wed</th>
				<th>Thurs</th>
				<th>Fri</th>
				<th>Sat</th>
				<th>Sun</th>
			</tr>
		</thead>

		<tbody>
			<tr>
				<th>8:00 AM</th>
				<td>DSC 10</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>DSC 1</td>
				<td>CSE 15L Lab</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
			</tr>
			<tr>
				<th>10:00 AM</th>
				<td>DSC 10</td>
				<td>DSC 10</td>
				<td>&nbsp;</td>
				<td>DSC 1</td>
				<td>CSE 15L Lab</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
			</tr>
			<tr>
				<th>12:00 PM</th>
				<td>&nbsp;</td>
				<td>CSE 100</td>
				<td>&nbsp;</td>
				<td>DSC 1</td>
				<td>CSE 15L Lab</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
			</tr>
			<tr>
				<th>2:00 PM</th>
				<td>&nbsp;</td>
				<td>DSC 10</td>
				<td>&nbsp;</td>
				<td>DSC 10</td>
				<td>CSE 100</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
			</tr>
		</tbody>

		<tfoot>
			<tr>
				<td colspan="8" style="text-align: center;">Table footer</td>
			</tr>
		</tfoot>
	</table>
</section>
